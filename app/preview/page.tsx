import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function PreviewHomepage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-black">
      
      <Navbar />
      
      {/* 1. THE HERO BANNER */}
      <section className="w-full h-[70vh] bg-stone-100 relative overflow-hidden flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Living Room" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6 animate-fade-in flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-4 text-[#D4AF37] font-bold">New Arrival</p>
          <h1 className="text-4xl md:text-6xl font-serif tracking-[0.1em] uppercase mb-8">
            The Autumn Collection
          </h1>
          <Link 
            href="/preview/shop" 
            className="border border-white text-white px-10 py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-bold"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* 2. THE "BIG THREE" CATEGORIES */}
      <section className="max-w-[1500px] mx-auto w-full px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Living', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80' },
          { name: 'Dining', image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=600&q=80' },
          { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80' }
        ].map((category) => (
          <Link href="/preview/shop" key={category.name} className="group relative aspect-[4/5] overflow-hidden bg-gray-100 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <h2 className="relative z-10 text-white text-2xl font-serif tracking-[0.2em] uppercase">{category.name}</h2>
          </Link>
        ))}
      </section>

      {/* 3. BRAND / DESIGNER HIGHLIGHT */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-4">Brand Highlight</p>
            <h2 className="text-3xl font-serif text-black uppercase tracking-[0.1em] mb-6">Nova Phoenix</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              With over 50 years of design heritage, our signature collections are renowned for bold architectural lines, sustainable materials, and timeless British craftsmanship.
            </p>
            <Link href="/preview/shop" className="text-[10px] border-b border-black text-black uppercase tracking-widest pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
              View The Brand
            </Link>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Dummy Products for the Highlight */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-200 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-widest text-gray-400">Product {i}</div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
                </div>
                <h3 className="text-[9px] font-bold uppercase tracking-[0.1em] text-black">Signature Chair</h3>
                <p className="text-[10px] text-[#D4AF37] font-medium mt-1">£850</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. EDITORIAL LOOKBOOKS */}
      <section className="max-w-[1500px] mx-auto w-full px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center text-center group cursor-pointer">
          <div className="w-full aspect-square bg-gray-100 mb-8 overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80" alt="Mid Century" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">Designs and Luxury</p>
          <h2 className="text-2xl font-serif text-black uppercase tracking-[0.1em] mb-4">Mid Century Design</h2>
          <Link href="/preview/shop" className="text-[10px] border-b border-black text-black uppercase tracking-widest pb-1">Shop Collection</Link>
        </div>

        <div className="flex flex-col items-center text-center group cursor-pointer">
          <div className="w-full aspect-square bg-gray-100 mb-8 overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="California" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">A modern twist</p>
          <h2 className="text-2xl font-serif text-black uppercase tracking-[0.1em] mb-4">The California Edit</h2>
          <Link href="/preview/shop" className="text-[10px] border-b border-black text-black uppercase tracking-widest pb-1">Shop Collection</Link>
        </div>
      </section>

      {/* 5. INSTAGRAM / LIFESTYLE FEED */}
      <section className="w-full border-t border-gray-200">
        <div className="text-center py-16">
          <h2 className="text-xl font-serif text-black uppercase tracking-[0.15em] mb-2">#BlackwoodAndRose</h2>
          <p className="text-[10px] uppercase tracking-widest text-gray-500">Follow us on Instagram</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
          {[
            'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80'
          ].map((img, i) => (
            <a href="#" key={i} className="aspect-square relative group overflow-hidden block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity">&#9825;</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 6. THE MEGA FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 mt-auto">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="text-lg font-serif tracking-[0.15em] uppercase text-[#D4AF37]">Blackwood & Rose</h3>
            <p className="text-[10px] tracking-widest text-gray-400 leading-loose">
              Curating excellence in modern furniture. London based, globally inspired.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border-b border-gray-800 pb-2">Customer Service</h4>
            <ul className="space-y-4 text-[10px] tracking-widest text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Delivery Information</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border-b border-gray-800 pb-2">The Company</h4>
            <ul className="space-y-4 text-[10px] tracking-widest text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Journal / Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border-b border-gray-800 pb-2">Newsletter</h4>
            <p className="text-[10px] tracking-widest text-gray-400 mb-4">Subscribe for exclusive access to new collections and private sales.</p>
            <div className="flex border-b border-gray-600 focus-within:border-white transition-colors pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent text-[10px] text-white w-full outline-none tracking-widest" />
              <button className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold hover:text-white transition-colors">Join</button>
            </div>
          </div>

        </div>

        <div className="max-w-[1500px] mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.2em] text-gray-500 uppercase">
          <p>&copy; 2026 Nova Phoenix Limited T/A Blackwood and Rose</p>
          <p className="mt-4 md:mt-0">VAT Number: 265261504</p>
        </div>
      </footer>

    </div>
  );
}