"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function Navbar() {
  const cartContext = useCart();
  const cart = cartContext ? cartContext.cart : [];
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartTotal = cart.reduce((sum: number, item: any) => sum + item.price, 0);
  
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-[100] bg-white shadow-sm flex flex-col">
        
        {/* TIER 1: Utility Bar */}
        <div className="w-full bg-black text-white h-10 flex items-center justify-between px-6 md:px-12 text-[9px] uppercase tracking-[0.2em] font-bold">
          <p className="hidden md:block">Complimentary White-Glove UK Delivery</p>
          <div className="flex space-x-8 ml-auto h-full">
            <Link href="#" className="hover:bg-white/10 h-full flex items-center px-4 transition-colors">Login / Register</Link>
            <Link href="#" className="hover:bg-white/10 h-full flex items-center px-4 transition-colors">Wishlist</Link>
          </div>
        </div>

        {/* TIER 2: Main Header (Search, Logo, Cart) */}
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between" ref={cartRef}>
          
          {/* Left: BOXED Search Bar */}
          <div className="w-1/3 flex items-center">
            <div className="flex items-center bg-gray-50 border border-gray-200 focus-within:border-black transition-colors px-4 py-3 w-full max-w-[280px]">
              <span className="text-gray-400 mr-3 text-lg leading-none">⚲</span>
              <input 
                type="text" 
                placeholder="SEARCH..." 
                className="bg-transparent text-[10px] text-black w-full outline-none tracking-[0.15em] uppercase placeholder-gray-400" 
              />
            </div>
          </div>

          {/* Center: Brand Logo */}
          <div className="w-1/3 flex justify-center">
            <Link href="/preview" className="text-2xl md:text-3xl font-serif tracking-[0.15em] text-black uppercase whitespace-nowrap">
              Blackwood <span className="text-[#D4AF37]">&</span> Rose
            </Link>
          </div>

          {/* Right: BOXED Cart Button & Mini Cart */}
          <div className="w-1/3 flex justify-end space-x-4 relative">
            <button className="text-[10px] tracking-[0.2em] text-black uppercase hover:bg-gray-50 border border-transparent hover:border-gray-200 px-6 py-3 transition-colors hidden md:block font-bold">
              Account
            </button>
            
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className={`text-[10px] tracking-[0.2em] uppercase transition-colors font-bold px-6 py-3 border ${
                isCartOpen 
                  ? 'bg-black text-[#D4AF37] border-black' 
                  : 'bg-white text-black border-gray-200 hover:border-black'
              }`}
            >
              Basket ({cart.length})
            </button>

            {/* The Mini Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute top-[100%] right-0 mt-6 w-[360px] bg-white shadow-2xl border border-gray-100 z-[120] flex flex-col animate-fade-in p-6 cursor-default">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-5 shrink-0">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black">Selection</span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">{cart.length} Pieces</span>
                </div>
                <div className="flex flex-col gap-5 mb-6 max-h-[50vh] overflow-y-auto scrollbar-hide">
                  {cart.length === 0 ? (
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest text-center py-6">Your basket is empty.</p>
                  ) : (
                    cart.map((item: any, index: number) => (
                      <div key={index} className="flex gap-4 items-center group">
                        <div className="w-12 h-16 bg-gray-100 shrink-0 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex flex-col flex-grow">
                          <div className="flex justify-between items-start mb-1 gap-2">
                            <h3 className="text-[9px] font-bold uppercase tracking-[0.1em] text-black leading-tight max-w-[160px] truncate">{item.name}</h3>
                            <p className="text-[9px] font-bold tracking-wider text-[#D4AF37] shrink-0">£{item.price.toLocaleString()}</p>
                          </div>
                          <p className="text-[8px] text-gray-400 uppercase tracking-[0.15em]">{item.color} | {item.material}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="pt-4 border-t border-gray-100 shrink-0">
                    <div className="flex justify-between items-end mb-5">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5">Total</span>
                      <span className="text-base font-serif tracking-wider text-black">£{cartTotal.toLocaleString()}</span>
                    </div>
                    <button className="w-full bg-black text-white py-4 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

        {/* TIER 3: BOXED Category Links with Mega-Menus */}
        <div className="w-full border-t border-gray-200 bg-white h-14 flex items-center justify-center relative">
          <ul className="flex space-x-4 h-full px-4">
            
            {/* LIVING Mega Menu */}
            <li className="group h-full flex items-center">
              <Link href="/preview/shop" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 group-hover:text-black px-8 py-2.5 border border-transparent group-hover:border-gray-200 group-hover:bg-gray-50 transition-all duration-300">
                Living
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-12 px-12 z-50 flex justify-center gap-24">
                <div>
                  <h4 className="text-[10px] font-bold text-black uppercase tracking-[0.2em] mb-4">Seating</h4>
                  <ul className="space-y-3 text-[9px] text-gray-500 tracking-widest uppercase">
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">All Sofas</Link></li>
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Armchairs</Link></li>
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Accent Chairs</Link></li>
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Footstools</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-black uppercase tracking-[0.2em] mb-4">Tables</h4>
                  <ul className="space-y-3 text-[9px] text-gray-500 tracking-widest uppercase">
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Coffee Tables</Link></li>
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Console Tables</Link></li>
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Side Tables</Link></li>
                  </ul>
                </div>
                <div className="w-64 aspect-[4/3] bg-gray-100 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80" alt="Living Feature" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border border-white px-4 py-2 bg-black/50">Shop Living</span>
                  </div>
                </div>
              </div>
            </li>

            {/* DINING Mega Menu */}
            <li className="group h-full flex items-center">
              <Link href="/preview/shop" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 group-hover:text-black px-8 py-2.5 border border-transparent group-hover:border-gray-200 group-hover:bg-gray-50 transition-all duration-300">
                Dining
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-12 px-12 z-50 flex justify-center gap-24">
                <div>
                  <h4 className="text-[10px] font-bold text-black uppercase tracking-[0.2em] mb-4">Furniture</h4>
                  <ul className="space-y-3 text-[9px] text-gray-500 tracking-widest uppercase">
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Dining Tables</Link></li>
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Dining Chairs</Link></li>
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Bar Stools</Link></li>
                    <li><Link href="/preview/shop" className="hover:text-[#D4AF37]">Sideboards</Link></li>
                  </ul>
                </div>
                <div className="w-64 aspect-[4/3] bg-gray-100 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=600&q=80" alt="Dining Feature" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border border-white px-4 py-2 bg-black/50">Shop Dining</span>
                  </div>
                </div>
              </div>
            </li>

            {/* BEDROOM */}
            <li className="h-full flex items-center">
              <Link href="/preview/shop" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 hover:text-black px-8 py-2.5 border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-300">
                Bedroom
              </Link>
            </li>

          </ul>
        </div>
      </header>

      {/* FIXED SPACER: Matches exact height of the new 3-tier header (40px + 96px + 56px = 192px) */}
      <div className="h-[192px] w-full"></div>
    </>
  );
}