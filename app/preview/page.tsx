import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function PreviewHomepage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-black">
      
      <Navbar />
      
      {/* 1. HERO SECTION (Matches Screenshot 1) */}
      <section className="w-full h-[75vh] relative flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Sofa" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle overlay so text is readable */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center mt-24">
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-widest uppercase mb-4 drop-shadow-lg">
            Take A Seat
          </h1>
          <p className="text-lg md:text-2xl font-serif text-white tracking-wider mb-10 drop-shadow-md">
            Refined upholstery for beautifully lived spaces
          </p>
          <Link 
            href="/preview/shop" 
            className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 text-xs tracking-[0.2em] font-bold uppercase hover:bg-white transition-all duration-300"
          >
            View All Upholstery
          </Link>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION (Matches Screenshot 2 Top) */}
      <section className="max-w-[1600px] mx-auto w-full px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bedroom */}
        <Link href="/preview/shop" className="relative aspect-square md:aspect-[4/5] overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" alt="Bedroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="bg-[#6b7c73] bg-opacity-90 px-8 py-3 text-white text-sm font-bold tracking-[0.2em] uppercase">
              Bedroom
            </div>
          </div>
        </Link>

        {/* Living */}
        <Link href="/preview/shop" className="relative aspect-square md:aspect-[4/5] overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80" alt="Living" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="bg-[#6b7c73] bg-opacity-90 px-8 py-3 text-white text-sm font-bold tracking-[0.2em] uppercase">
              Living
            </div>
          </div>
        </Link>

        {/* Dining */}
        <Link href="/preview/shop" className="relative aspect-square md:aspect-[4/5] overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=800&q=80" alt="Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="bg-[#6b7c73] bg-opacity-90 px-8 py-3 text-white text-sm font-bold tracking-[0.2em] uppercase">
              Dining
            </div>
          </div>
        </Link>

      </section>

      {/* 3. BRAND HIGHLIGHT SECTION (Matches Screenshot 2 Bottom) */}
      <section className="w-full bg-[#fcfcfc] py-20 border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Block */}
          <div className="w-full lg:w-1/4 text-center lg:text-left">
            <h2 className="text-2xl font-serif text-black uppercase tracking-[0.1em] mb-2">Brand Highlight</h2>
            <h3 className="text-xl font-serif text-gray-800 uppercase tracking-widest mb-6">Nova Phoenix</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              With over 50 years of design heritage, Nova Phoenix is renowned for creating bold and versatile collections of luxury furniture, lighting, and home accessories.
            </p>
            <Link href="/preview/shop" className="text-xs text-black border-b border-black uppercase tracking-widest pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
              View The Brand
            </Link>
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-2/4 flex justify-center">
            <div className="w-full max-w-md aspect-[4/3] bg-gray-200 overflow-hidden rounded-sm">
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="Brand Highlight" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Product List */}
          <div className="w-full lg:w-1/4 flex flex-col space-y-6">
            
            <div className="flex gap-4 items-center">
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80" alt="Product" className="w-20 h-16 object-cover bg-gray-100" />
              <div>
                <p className="text-xs text-black mb-1 leading-tight">Wicklow Sectional Sofa Natural</p>
                <Link href="/preview/shop" className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-0.5 hover:text-black hover:border-black">Shop Now</Link>
              </div>
            </div>

            <div className="flex gap-4 items-center">
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=200&q=80" alt="Product" className="w-20 h-16 object-cover bg-gray-100" />
              <div>
                <p className="text-xs text-black mb-1 leading-tight">Egerton Occasional Chair Green</p>
                <Link href="/preview/shop" className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-0.5 hover:text-black hover:border-black">Shop Now</Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}