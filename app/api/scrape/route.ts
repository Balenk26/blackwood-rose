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
    
    // 2. IMAGE EXTRACTOR: Capture all image URLs before stripping HTML code
    const foundImages: string[] = [];
    
    // Look for high-priority OpenGraph images (the main image social media uses)
    const ogMatch = htmlContent.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
                    htmlContent.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
    if (ogMatch && ogMatch[1]) {
      foundImages.push(ogMatch[1]);
    }
    
    // Look for standard image tags on the page
    const imgRegex = /<img[^>]+src=["']([^"']+\.(?:jpg|jpeg|png|webp|avif))["']/gi;
    let match;
    let count = 0;
    while ((match = imgRegex.exec(htmlContent)) !== null && count < 15) {
      const imgUrl = match[1];
      // Skip obvious small icons, logos, or loading graphics
      if (!imgUrl.includes('logo') && !imgUrl.includes('icon') && !imgUrl.includes('avatar') && !foundImages.includes(imgUrl)) {
        foundImages.push(imgUrl);
        count++;
      }
    }

    // Convert any relative image paths (like /images/chair.jpg) into full absolute web links
    const absoluteImages = foundImages.map(img => {
      try {
        return new URL(img, url).href;
      } catch {
        return img;
      }
    });

    // 3. TURBO CLEANER: Now safe to strip out all HTML tags for maximum speed
    const cleanText = htmlContent
      .replace(/<script\b[^<]*>([\s\S]*?)<\/script>/gi, '')
      .replace(/<style\b[^<]*>([\s\S]*?)<\/style>/gi, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 12000);

    // 4. Send both clean text and found image list to OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      temperature: 0.3,
      messages: [
        {
          role: 'system',
          content: `You are an expert product data extractor for Blackwood & Rose, a luxury furniture brand.
          Analyze the clean text provided to extract the product details, and cross-reference it with the provided list of image URLs to select the absolute best matching main product image.
          
          Return a strict JSON object matching this schema exactly:
          {
            "name": "Luxury rewritten name of the product",
            "category": "Living, Dining, Bedroom, or Upholstery",
            "price": 0.00,
            "sku": "BR-SKU-STRING",
            "description": "An elegant, multi-paragraph product description written for high-end clientele.",
            "features": ["Specification bullet point 1", "Specification bullet point 2"],
            "image": "Select the single absolute best main product image URL from the provided list. If none match or look like product images, return an empty string."
          }`
        },
        {
          role: 'user',
          content: `Here are the candidate Image URLs extracted from the page structure:\n${JSON.stringify(absoluteImages, null, 2)}\n\nExtract and match the product details from this text:\n\n${cleanText}`
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