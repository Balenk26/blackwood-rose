import React from 'react';
import Navbar from '../../components/Navbar';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center pt-32 px-6">
        <h1 className="text-3xl font-serif text-stone-900 tracking-[0.2em] uppercase mb-4">
          The Collection
        </h1>
        <div className="w-12 h-[1px] bg-stone-300 mb-16"></div>
        
        <p className="text-stone-500 tracking-[0.15em] uppercase text-xs font-light">
          Curated pieces arriving soon...
        </p>
        
        {/* We will build the product image grid here next! */}
      </main>
    </div>
  );
}