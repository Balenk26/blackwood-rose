import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function PreviewHomepage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center animate-fade-in py-32">
        <h1 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-widest uppercase mb-8">
          Elevate Your Space
        </h1>
        
        <p className="text-stone-500 tracking-wider font-light max-w-xl mx-auto mb-12 leading-relaxed text-sm md:text-base">
          Discover our curated collection of extraordinary furniture. Designed for the modern aesthetic, crafted for a lifetime.
        </p>
        
        {/* Look here! This is now a working Link instead of a dead button */}
        <Link 
          href="/preview/shop" 
          className="border border-stone-900 text-stone-900 px-10 py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all duration-500"
        >
          Explore Collection
        </Link>
      </main>

    </div>
  );
}