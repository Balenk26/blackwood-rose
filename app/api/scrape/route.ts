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
    
    // 2. Capture candidate image references
    const foundImages: string[] = [];
    
    const ogMatch = htmlContent.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
                    htmlContent.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
    if (ogMatch && ogMatch[1]) {
      foundImages.push(ogMatch[1]);
    }
    
    const imgRegex = /<img[^>]+src=["']([^"']+\.(?:jpg|jpeg|png|webp|avif))["']/gi;
    let match;
    let count = 0;
    while ((match = imgRegex.exec(htmlContent)) !== null && count < 25) { // Expanded count to grab full galleries
      const imgUrl = match[1];
      if (!imgUrl.includes('logo') && !imgUrl.includes('icon') && !imgUrl.includes('avatar') && !foundImages.includes(imgUrl)) {
        foundImages.push(imgUrl);
        count++;
      }
    }

    const absoluteImages = foundImages.map(img => {
      try {
        return new URL(img, url).href;
      } catch {
        return img;
      }
    });

    // 3. Strip HTML layout blocks for speed
    const cleanText = htmlContent
      .replace(/<script\b[^<]*>([\s\S]*?)<\/script>/gi, '')
      .replace(/<style\b[^<]*>([\s\S]*?)<\/style>/gi, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 12000);

    // 4. Request full gallery parsing from OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      temperature: 0.2,
      messages: [
        {
          role: 'system',
          content: `You are an expert product data extractor for Blackwood & Rose, a luxury furniture brand.
          Analyze the clean text provided to extract the product details, and cross-reference it with the list of candidate image URLs.
          Filter out any remaining logos, header icons, layout spacers, or unrelated brand assets. Return ALL valid images that belong specifically to this item or its alternative gallery views.
          
          Return a strict JSON object matching this schema exactly:
          {
            "name": "Luxury rewritten name of the product",
            "category": "Living, Dining, Bedroom, or Upholstery",
            "price": 0.00,
            "sku": "BR-SKU-STRING",
            "description": "An elegant, multi-paragraph product description written for high-end clientele.",
            "features": ["Specification bullet point 1", "Specification bullet point 2"],
            "images": ["Array containing all filtered absolute image URLs found, sorted with the main cover photo at index 0."]
          }`
        },
        {
          role: 'user',
          content: `Candidate Image URLs:\n${JSON.stringify(absoluteImages, null, 2)}\n\nProduct text:\n\n${cleanText}`
        }
      ],
    });

    const parsedOutput = JSON.parse(completion.choices[0]?.message?.content || '{}');
    return NextResponse.json(parsedOutput);

  } catch (error: any) {
    console.error('Scraper Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}