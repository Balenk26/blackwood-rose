import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Pull every single piece of luxury inventory from your live Neon database
    const allProducts = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc', // Brand new imports will show up first!
      },
    });

    return NextResponse.json({ success: true, products: allProducts });
  } catch (error) {
    console.error("Database Fetch Error: ", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}