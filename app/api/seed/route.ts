// app/api/seed/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { products } from '@/app/data'; 

export async function GET() {
  try {
    // Loop through your 73 products and add them to the cloud database
    for (const product of products) {
      await prisma.product.upsert({
        where: { sku: product.sku },
        update: {}, // If it already exists, do nothing
        create: {
          sku: product.sku,
          name: product.name,
          price: product.price,
          category: product.category,
          collection: product.collection || null,
          image: product.image,
          gallery: product.gallery,
          description: product.description,
          features: product.features,
          material: product.material || null,
          dimensions: product.dimensions || null,
          doors: product.doors || null,
        },
      });
    }
    
    return NextResponse.json({ message: "SUCCESS! All 73 products have been securely uploaded to the Vercel Postgres Database." });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}