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
      <header className="w-full bg-white fixed top-0 left-0 z-[100] flex flex-col">
        
        {/* TIER 1: Top Utility Bar (Boxed off with a background color and bottom border) */}
        <div className="w-full h-10 bg-gray-50 border-b border-gray-200 flex items-center justify-between px-6 md:px-12 text-[10px] uppercase tracking-widest font-bold text-gray-500">
          <div className="hidden md:block">Complimentary UK White-Glove Delivery</div>
          <div className="flex space-x-8 h-full">
            <Link href="#" className="hover:text-black flex items-center h-full transition-colors">Login / Register</Link>
            <Link href="#" className="hover:text-black flex items-center h-full transition-colors">Wishlist</Link>
          </div>
        </div>

        {/* TIER 2: Main Header (Tall, breathing room, boxed off with a bottom border) */}
        <div className="w-full h-28 border-b border-gray-200 bg-white px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Boxed Search Bar */}
          <div className="w-1/3 flex items-center justify-start">
            <div className="flex items-center border border-gray-300 hover:border-black transition-colors px-4 py-3 w-full max-w-[280px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input 
                type="text" 
                placeholder="SEARCH..." 
                className="bg-transparent text-[10px] text-black w-full outline-none tracking-widest uppercase placeholder-gray-400" 
              />
            </div>
          </div>

          {/* Center: BRAND LOGO */}
          <div className="w-1/3 flex justify-center">
            <Link href="/preview" className="text-3xl md:text-4xl font-serif tracking-[0.15em] text-black uppercase whitespace-nowrap">
              Blackwood <span className="text-[#D4AF37]">&</span> Rose
            </Link>
          </div>

          {/* Right: Icons (Spaced out) */}
          <div className="w-1/3 flex justify-end items-center space-x-8 relative" ref={cartRef}>
            
            <button className="text-gray-900 hover:text-[#D4AF37] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>

            <button className="text-gray-900 hover:text-[#D4AF37] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            
            {/* Bag Icon */}
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="text-gray-900 hover:text-[#D4AF37] transition-colors relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Mini Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute top-[100%] right-0 mt-6 w-[340px] bg-white shadow-2xl border border-gray-100 z-[120] flex flex-col p-6 cursor-default text-left">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-5 shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black">Selection</span>
                  <span className="text-[10px] text-gray-500">{cart.length} Items</span>
                </div>
                <div className="flex flex-col gap-4 mb-6 max-h-[50vh] overflow-y-auto scrollbar-hide">
                  {cart.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-6">Your basket is empty.</p>
                  ) : (
                    cart.map((item: any, index: number) => (
                      <div key={index} className="flex gap-4 items-center group">
                        <div className="w-12 h-16 bg-gray-100 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col flex-grow">
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-[10px] font-bold text-gray-900 leading-tight max-w-[150px] truncate uppercase tracking-wider">{item.name}</h3>
                            <p className="text-[10px] font-bold text-[#D4AF37] shrink-0">£{item.price.toLocaleString()}</p>
                          </div>
                          <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">{item.color} | {item.material}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="pt-4 border-t border-gray-100 shrink-0">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-xs font-bold text-gray-900">Total</span>
                      <span className="text-lg font-serif tracking-wider text-black">£{cartTotal.toLocaleString()}</span>
                    </div>
                    <button className="w-full bg-black text-white py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#D4AF37] hover:text-black transition-colors">
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

        {/* TIER 3: The Navigation Links (Boxed off with bottom border, perfectly spread out) */}
        <div className="w-full h-16 bg-white border-b border-gray-200 flex justify-center items-center">
          {/* using 'justify-between' forces the words to stretch evenly across the container */}
          <ul className="flex justify-between w-full max-w-[1400px] px-6 text-[11px] font-bold text-gray-800 uppercase tracking-[0.2em]">
            <li><Link href="/preview/shop" className="hover:text-[#D4AF37] transition-colors">Products</Link></li>
            <li><Link href="/preview/shop" className="hover:text-[#D4AF37] transition-colors">Living</Link></li>
            <li><Link href="/preview/shop" className="hover:text-[#D4AF37] transition-colors">Dining</Link></li>
            <li><Link href="/preview/shop" className="hover:text-[#D4AF37] transition-colors">Bedroom</Link></li>
            <li><Link href="/preview/shop" className="hover:text-[#D4AF37] transition-colors">Upholstery</Link></li>
            <li><Link href="/preview/shop" className="hover:text-[#D4AF37] transition-colors">Outdoor</Link></li>
            <li><Link href="/preview/shop" className="hover:text-[#D4AF37] transition-colors">Brands</Link></li>
            <li><Link href="/preview/shop" className="text-red-600 hover:text-black transition-colors">Sale</Link></li>
          </ul>
        </div>
      </header>

      {/* Spacer updated to match exactly: 40px + 112px + 64px = 216px height */}
      <div className="h-[216px] w-full bg-white shrink-0"></div>
    </>
  );
}