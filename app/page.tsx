// app/page.tsx
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function Home() {
  // Fetch ALL products directly from your live Vercel Database, newest first!
  const liveProducts = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Your Hero Section here... */}
      <div className="py-20 bg-gray-50 text-center">
        <h1 className="text-4xl font-serif text-gray-900">Blackwood & Rose</h1>
        <p className="mt-4 text-gray-500">Curated Luxury Furniture</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Loop through the LIVE database products */}
          {liveProducts.map((product) => (
            <Link href={`/product/${product.sku}`} key={product.id} className="group cursor-pointer">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                {/* Standard img tag prevents Next.js external domain errors */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-medium">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">£{product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  );
}