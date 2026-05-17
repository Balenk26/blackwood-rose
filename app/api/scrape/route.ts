import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ error: "No URL provided" }, { status: 400 });
    }

    // 1. Fetch the raw HTML content from the supplier website
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      return NextResponse.json({ error: `Failed to fetch page. Status: ${response.status}` }, { status: 500 });
    }

    const html = await response.text();

    // 2. Optimization: Clean the HTML so we don't waste OpenAI token limits on junk code
    const cleanedHtml = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Wipe out heavy Javascript
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')   // Wipe out layout styling CSS
      .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')         // Wipe out heavy inline icons
      .replace(/\s+/g, ' ')                                              // Collapse massive white spaces
      .substring(0, 50000);                                              // Grab the most important structural chunk

    // 3. Hand the raw text data over to OpenAI to surgically dissect the product attributes
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a precise data extraction engine. Analyze the provided raw webpage text and extract specific product information. Return your answer strictly as a clean JSON object with no markdown formatting wraps."
        },
        {
          role: "user",
          content: `Analyze this webpage content from a wholesale supplier and extract the core product details. Look specifically for main layout content, headers, data tables, and image source attributes.

Webpage Content:
${cleanedHtml}

Return EXACTLY a JSON object matching this structure. Do not invent markdown or wraps around it:
{
  "name": "The extracted product title",
  "sku": "The supplier item code or model number reference",
  "price": 0.00 (The number value of the price found, ignore currency symbols),
  "colour": "The product color if specified, else empty string",
  "material": "The material/fabric details if specified, else empty string",
  "dimensions": "The dimensions/size string if specified, else empty string",
  "description": "The raw factory body text description",
  "features": ["Feature bullet 1", "Feature bullet 2"],
  "images": ["https://absolute-url-to-product-image1.jpg", "https://absolute-url-to-product-image2.jpg"]
}`
        }
      ],
      temperature: 0.1, // Keep it highly factual and rigid
    });

    // Clean up any edge-case markdown block decorations if the model slips up
    let contentString = aiResponse.choices[0].message.content || '{}';
    if (contentString.startsWith('```json')) {
      contentString = contentString.replace(/```json\s?/, '').replace(/```$/, '');
    }

    const extractedData = JSON.parse(contentString.trim());

    // 4. Send the structured data cleanly back to your admin dashboard form
    return NextResponse.json({
      success: true,
      product: extractedData
    });

  } catch (error) {
    console.error("Scraper internal error: ", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}