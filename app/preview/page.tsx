import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function PreviewHomepage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-black font-sans">
      <Navbar />
      
      {/* 1. HERO SECTION (Matches Screenshot 1) */}
      <section className="w-full h-[70vh] md:h-[85vh] relative flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Sofa" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center flex flex-col items-center mt-20">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 tracking-widest uppercase mb-4">
            Take A Seat
          </h1>
          <p className="text-lg md:text-xl font-serif text-gray-700 tracking-wider mb-8">
            Refined upholstery for beautifully lived spaces
          </p>
          <Link 
            href="/preview/shop" 
            className="bg-white/90 text-gray-800 px-8 py-3 text-xs tracking-widest font-bold uppercase hover:bg-white transition-all duration-300 shadow-sm"
          >
            View All Upholstery
          </Link>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION (Matches Screenshot 2 Top) */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bedroom */}
        <Link href="/preview/shop" className="relative aspect-square overflow-hidden group block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" alt="Bedroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="bg-[#788e84] px-6 py-2 text-white text-sm font-bold tracking-[0.2em] uppercase shadow-md">
              Bedroom
            </div>
          </div>
        </Link>

        {/* Living */}
        <Link href="/preview/shop" className="relative aspect-square overflow-hidden group block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80" alt="Living" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="bg-[#788e84] px-6 py-2 text-white text-sm font-bold tracking-[0.2em] uppercase shadow-md">
              Living
            </div>
          </div>
        </Link>

        {/* Dining */}
        <Link href="/preview/shop" className="relative aspect-square overflow-hidden group block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=800&q=80" alt="Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="bg-[#788e84] px-6 py-2 text-white text-sm font-bold tracking-[0.2em] uppercase shadow-md">
              Dining
            </div>
          </div>
        </Link>

      </section>

      {/* 3. BRAND HIGHLIGHT SECTION (Matches Screenshot 2 Bottom) */}
      <section className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-xl font-serif text-black uppercase tracking-widest mb-2">Brand Highlight</h2>
          <h3 className="text-2xl font-serif text-black uppercase tracking-widest mb-6">Ora Designs</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            With over 50 years of design heritage, Ora Designs is renowned for creating bold and versatile collections of luxury furniture, lighting, and home accessories.
          </p>
          <Link href="/preview/shop" className="text-xs font-bold text-black border-b border-black uppercase tracking-widest pb-1 hover:text-gray-500 transition-colors">
            View The Brand
          </Link>
        </div>

        {/* Center: Large Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-full aspect-[4/3] overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="Brand Feature" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right: Product List */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-8 pl-0 lg:pl-8">
          
          <div className="flex gap-4 items-center">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80" alt="Product" className="w-24 h-16 object-cover" />
            <div className="flex flex-col">
              <p className="text-xs text-black mb-1 font-serif">Wicklow Sectional Sofa Natural</p>
              <Link href="/preview/shop" className="text-[10px] text-black font-bold border-b border-black pb-0.5 inline-block w-fit">Shop Now</Link>
            </div>
          </div>

          <div className="flex gap-4 items-center">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=200&q=80" alt="Product" className="w-24 h-16 object-cover" />
            <div className="flex flex-col">
              <p className="text-xs text-black mb-1 font-serif">Egerton Occasional Chair With Wooden Arms Green Fabric</p>
              <Link href="/preview/shop" className="text-[10px] text-black font-bold border-b border-black pb-0.5 inline-block w-fit">Shop Now</Link>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}