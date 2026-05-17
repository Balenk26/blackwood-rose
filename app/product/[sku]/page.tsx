// app/product/[sku]/page.tsx
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { sku: string } }) {
  // 1. Fetch the specific product from your live Vercel database using the SKU
  const product = await prisma.product.findUnique({
    where: { sku: params.sku }
  });

  // 2. If the product doesn't exist, show Next.js's built-in 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          
          {/* Left Side: Product Image */}
          <div className="mb-10 lg:mb-0">
            <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Side: Product Details & AI Copy */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
            <h1 className="text-4xl font-serif text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl font-medium text-gray-900 mb-8">£{product.price.toFixed(2)}</p>

            {/* AI-Generated Luxury Description */}
            <div className="prose prose-sm text-gray-700 mb-8 leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* AI-Generated Features List */}
            <div className="border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wider">Product Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-4 rounded-md font-medium tracking-wide hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}