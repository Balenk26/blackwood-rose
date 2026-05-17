import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is missing from Vercel.');
    }

    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ error: 'Product URL is required' }, { status: 400 });
    }

    // 1. Fetch the supplier page
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    
    if (!res.ok) {
      throw new Error(`Supplier responded with status: ${res.status}`);
    }
    
    const htmlContent = await res.text();
    
    // 2. TURBO CLEANER: Strip out all code blocks and HTML tags completely
    const cleanText = htmlContent
      .replace(/<script\b[^<]*>([\s\S]*?)<\/script>/gi, '') // Remove javascript
      .replace(/<style\b[^<]*>([\s\S]*?)<\/style>/gi, '')   // Remove styling sheets
      .replace(/<[^>]*>/g, ' ')                             // Strip all HTML tags entirely
      .replace(/\s+/g, ' ')                                 // Collapse messy white spacing
      .trim()
      .slice(0, 12000);                                     // Keep the top 12k characters of pure text

    // 3. Request lightning-fast conversion from OpenAI using the lightweight text
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      temperature: 0.3, // Lower temperature makes the AI process faster
      messages: [
        {
          role: 'system',
          content: `You are an expert product data extractor for Blackwood & Rose, a luxury furniture brand.
          Analyze the clean text provided, locate the product details, and transform them into a prestigious editorial layout.
          
          Return a strict JSON object matching this schema exactly:
          {
            "name": "Luxury rewritten name of the product",
            "category": "Living, Dining, Bedroom, or Upholstery",
            "price": 0.00, (raw number without symbols),
            "sku": "BR-SKU-STRING",
            "description": "An elegant, multi-paragraph product description written for high-end clientele.",
            "features": ["Specification bullet point 1", "Specification bullet point 2"],
            "image": ""
          }`
        },
        {
          role: 'user',
          content: `Extract from this product text:\n\n${cleanText}`
        }
      ],
    });

    const parsedOutput = JSON.parse(completion.choices[0]?.message?.content || '{}');
    return NextResponse.json(parsedOutput);

  } catch (error: any) {
    console.error('Scraper Error:', error);
    return NextResponse.json(
      { error: error.message, message: error.message, msg: error.message },
      { status: 500 }
    );
  }
}