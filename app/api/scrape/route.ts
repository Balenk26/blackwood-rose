// Cache buster edit to force fresh Vercel environment loading
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI strictly using the environment variable (Zero hardcoded keys)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Safety check to ensure Vercel has passed the variable down to the application layer
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is completely missing from the live server configuration.');
    }

    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'Product URL is required' }, { status: 400 });
    }

    // 1. Fetch the raw page data from the supplier website
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to connect to supplier link. Server responded with status: ${res.status}`);
    }
    
    const htmlContent = await res.text();
    
    // Clean up bloated script tags to keep the text well within context limits
    const cleanHtml = htmlContent
      .replace(/<script\b[^<]*>(?:([\s\S]*?)<\/script>)?/gi, '')
      .replace(/<style\b[^<]*>(?:([\s\S]*?)<\/style>)?/gi, '')
      .slice(0, 60000);

    // 2. Pass the text payload directly to OpenAI using JSON mode
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content: `You are an advanced AI scraper and master copywriter for Blackwood & Rose, a premium, luxury furniture and home accessories brand. 
          Analyze the raw web layout data provided and extract product parameters. Then, completely rewrite all content to match a prestigious, sophisticated editorial tone.
          
          You must return a valid JSON structure matching this schema exactly:
          {
            "name": "Luxury rewritten name of the product",
            "category": "Living, Dining, Bedroom, or Upholstery",
            "price": 0.00, (extract price strictly as a raw number without currency symbols),
            "sku": "A clean uppercase generated string like BR-SKU-NUMBER",
            "description": "An elegant, multi-paragraph product description written for high-end clientele.",
            "features": ["Exquisite specification bullet point 1", "Exquisite specification bullet point 2"],
            "image": "Extract the absolute source URL for the main item image if found, else leave as an empty string"
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
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred during the live processing sequence.' },
      { status: 500 }
    );
  }
}