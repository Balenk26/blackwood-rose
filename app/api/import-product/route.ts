import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import OpenAI from 'openai';
import { currentUser } from '@clerk/nextjs/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress;

    if (!user || userEmail !== 'sonia@blackwoodandrose.com') {
      return NextResponse.json(
        { error: "Access Denied. Only sonia@blackwoodandrose.com can publish items." }, 
        { status: 403 }
      );
    }

    const { 
      name, 
      sku,
      rawDescription, 
      retailPrice, 
      category, 
      images, 
      deliveryCharge,
      deliveryTime,
      quantity,
      colour,
      material,
      dimensions
    } = await req.json();

    const finalSku = String(sku || 'BR-' + Math.random().toString(36).substring(2, 7).toUpperCase());
    const safeImagesArray = Array.isArray(images) ? images.filter(Boolean) : [];
    const primaryImage = safeImagesArray[0] || "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500";

    // 1. INTELLIGENT CATEGORY SORTING HAT
    // Cleans up messy strings like "Outdoor Oasis" or "Dining Room" into strict shop tags
    let standardizedCategory = String(category || "living").toLowerCase().trim();
    
    if (standardizedCategory.includes('outdoor')) {
      standardizedCategory = 'outdoor';
    } else if (standardizedCategory.includes('dining')) {
      standardizedCategory = 'dining';
    } else if (standardizedCategory.includes('bedroom')) {
      standardizedCategory = 'bedroom';
    } else if (standardizedCategory.includes('upholstery')) {
      standardizedCategory = 'upholstery';
    } else {
      standardizedCategory = 'living'; // Safe fallback for anything living room or unassigned
    }

    // 2. RUN AI PREMIUM COPYWRITING ENGINE
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert luxury copywriter for Blackwood & Rose, an elite, high-end interior design and furniture boutique. Your tone is sophisticated, elegant, and aspirational. Do not use cheesy sales pitch words like 'revolutionary' or 'must-have'. Focus on craftsmanship, heritage, material composition, and texture."
        },
        {
          role: "user",
          content: `Rewrite this raw factory product description into a captivating, luxury product narrative. \nProduct Name: ${name}\nRaw Description: ${rawDescription}\nProvide your response as a clean JSON object with exactly two keys:\n"description": (A beautifully written paragraph describing the item)\n"features": (An array of 3 to 4 elegant bullet points highlighting key materials or characteristics)`
        }
      ],
      response_format: { type: "json_object" }
    });

    const aiContent = JSON.parse(aiResponse.choices[0].message.content || '{}');

    const coreProductFields = {
      name: String(name || "Luxury Product"),
      price: parseFloat(retailPrice) || 0.0,
      category: standardizedCategory, // Saves the absolute clean sorted category tag!
      collection: "Hill Interiors Dropship",
      description: String(aiContent.description || rawDescription || ""),
      features: aiContent.features || ["Exquisite craftsmanship"],
      
      image: String(primaryImage),
      gallery: safeImagesArray,

      images: safeImagesArray,
      deliveryCharge: parseFloat(deliveryCharge) || 0.0,
      deliveryTime: deliveryTime ? String(deliveryTime) : "3-5 Business Days",
      quantity: parseInt(quantity) || 0,
      colour: colour ? String(colour) : "As Shown",
      material: material ? String(material) : "Premium Composition",
      dimensions: dimensions ? String(dimensions) : "Contact for details"
    };

    const savedProduct = await prisma.product.upsert({
      where: { sku: finalSku },
      update: coreProductFields, 
      create: {                  
        sku: finalSku,
        ...coreProductFields
      }
    });

    return NextResponse.json({ success: true, product: savedProduct });

  } catch (error) {
    console.error("API Processing Error: ", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}