import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function PreviewHomepage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-black">
      
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center animate-fade-in py-32 mt-24">
        <h1 className="text-4xl md:text-6xl font-serif tracking-[0.2em] uppercase mb-8">
          Elevate Your Space
        </h1>
        
        <p className="text-gray-500 tracking-wider font-light max-w-xl mx-auto mb-12 leading-relaxed text-sm md:text-base">
          Discover our curated collection of extraordinary furniture. Designed for the modern aesthetic, crafted for a lifetime.
        </p>
        
        <Link 
          href="/preview/shop" 
          className="border border-black text-black px-10 py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-[#D4AF37] transition-all duration-500 font-bold"
        >
          Explore Collection
        </Link>
      </main>

    </div>
  );
}