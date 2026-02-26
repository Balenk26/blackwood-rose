import React from 'react';
import Navbar from '../../components/Navbar';

// This is our temporary "database" of products
const products = [
  { id: 1, name: 'The Onyx Lounge Chair', price: '£1,250' },
  { id: 2, name: 'Marble & Walnut Console', price: '£890' },
  { id: 3, name: 'Velvet Accent Sofa', price: '£2,100' },
  { id: 4, name: 'Minimalist Oak Dining Table', price: '£1,850' },
  { id: 5, name: 'Brushed Brass Floor Lamp', price: '£420' },
  { id: 6, name: 'Bouclé Armchair', price: '£950' },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center pt-24 px-6 md:px-12 pb-24 max-w-7xl mx-auto w-full">
        
        {/* Page Header */}
        <div className="flex flex-col items-center mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-[0.2em] uppercase mb-6">
            The Collection
          </h1>
          <div className="w-12 h-[1px] bg-stone-300"></div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Placeholder (This will be your real photos later) */}
              <div className="w-full aspect-[4/5] bg-stone-200 mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-[10px] text-stone-400 tracking-widest uppercase font-light group-hover:scale-105 transition-transform duration-700">
                  Image View
                </span>
              </div>
              
              {/* Product Info */}
              <div className="flex flex-col items-center text-center space-y-2">
                <h3 className="text-xs md:text-sm text-stone-900 tracking-[0.15em] uppercase font-light">
                  {product.name}
                </h3>
                <p className="text-xs text-stone-500 tracking-wider">
                  {product.price}
                </p>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}