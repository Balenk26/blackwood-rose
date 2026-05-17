import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is missing from Vercel environment variables.');
    }

    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'Product URL is required', message: 'Product URL is required' }, { status: 400 });
    }

    // 1. Fetch data from the supplier website
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    
    if (!res.ok) {
      throw new Error(`Supplier website responded with status code: ${res.status}`);
    }
    
    const htmlContent = await res.text();
    
    const cleanHtml = htmlContent
      .replace(/<script\b[^<]*>(?:([\s\S]*?)<\/script>)?/gi, '')
      .replace(/<style\b[^<]*>(?:([\s\S]*?)<\/style>)?/gi, '')
      .slice(0, 60000);

    // 2. Request luxury conversion from OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content: `You are an advanced AI scraper and master copywriter for Blackwood & Rose, a premium, luxury furniture brand. 
          Analyze the raw web layout data provided and extract product parameters. Then, completely rewrite all content to match a prestigious, sophisticated editorial tone.
          
          Return a valid JSON structure matching this schema exactly:
          {
            "name": "Luxury rewritten name of the product",
            "category": "Living, Dining, Bedroom, or Upholstery",
            "price": 0.00,
            "sku": "A clean uppercase generated string like BR-SKU-NUMBER",
            "description": "An elegant, multi-paragraph product description written for high-end clientele.",
            "features": ["Exquisite specification bullet point 1", "Exquisite specification bullet point 2"],
            "image": "Extract the absolute source URL for the main item image if found, else leave as empty string"
          }`
        },
        {
          role: 'user',
          content: `Scrape and transform this raw web data:\n\n${cleanHtml}`
        }
      ],
    });

    const parsedOutput = JSON.parse(completion.choices[0]?.message?.content || '{}');
    return NextResponse.json(parsedOutput);

  } catch (error: any) {
    console.error('Production AI Scraper Error:', error);
    
    const fallbackMessage = error.message || 'An unexpected error occurred during the live processing sequence.';
    
    // Returns every variation of error labels to satisfy any frontend configuration
    return NextResponse.json(
      { 
        error: fallbackMessage,
        message: fallbackMessage,
        msg: fallbackMessage,
        success: false 
      },
      { status: 500 }
    );
  }
}