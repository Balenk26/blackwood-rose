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
      <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-[100]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-24">
            
            {/* Left Side */}
            <div className="hidden md:flex space-x-10 w-1/3">
              <Link href="/preview/shop" className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 hover:text-black uppercase transition-colors font-bold">
                Shop
              </Link>
              <Link href="/preview/collections" className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 hover:text-black uppercase transition-colors font-bold">
                Collections
              </Link>
            </div>

            {/* Center Brand */}
            <div className="flex-shrink-0 flex justify-center w-1/3">
              <Link href="/preview" className="text-xl md:text-2xl font-serif tracking-[0.15em] text-black uppercase whitespace-nowrap">
                Blackwood <span className="text-[#D4AF37]">&</span> Rose
              </Link>
            </div>

            {/* Right Side - THIS IS NOW THE STRICT ANCHOR FOR THE CART */}
            <div className="flex items-center justify-end space-x-8 w-1/3 relative" ref={cartRef}>
              <button className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 hover:text-black uppercase transition-colors hidden md:block font-bold">
                Account
              </button>
              
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className={`text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors font-bold ${isCartOpen ? 'text-[#D4AF37]' : 'text-black hover:text-[#D4AF37]'}`}
              >
                Cart ({cart.length})
              </button>

              {/* THE REFINED MINI-CART */}
              {/* right-0 guarantees it aligns perfectly with the right edge of the Cart button */}
              {isCartOpen && (
                <div className="absolute top-[100%] right-0 mt-8 w-[340px] bg-white shadow-[0_15px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 z-[120] flex flex-col animate-fade-in p-6 cursor-default">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-5 shrink-0">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black">Selection</span>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">{cart.length} Pieces</span>
                  </div>

                  {/* Items List - No scrollbar, shrink-wrapped */}
                  <div className="flex flex-col gap-5 mb-6">
                    {cart.length === 0 ? (
                      <p className="text-[9px] text-gray-400 uppercase tracking-widest text-center py-6">Your collection is empty.</p>
                    ) : (
                      cart.map((item: any, index: number) => (
                        <div key={index} className="flex gap-4 items-center group">
                          
                          {/* Ultra-sleek thumbnail */}
                          <div className="w-10 h-14 bg-gray-100 shrink-0 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          
                          <div className="flex flex-col flex-grow">
                            {/* Title and Price on the same line */}
                            <div className="flex justify-between items-start mb-1 gap-2">
                              <h3 className="text-[9px] font-bold uppercase tracking-[0.1em] text-black leading-tight max-w-[150px] truncate">{item.name}</h3>
                              <p className="text-[9px] font-bold tracking-wider text-[#D4AF37] shrink-0">£{item.price.toLocaleString()}</p>
                            </div>
                            <p className="text-[8px] text-gray-400 uppercase tracking-[0.15em]">{item.color} | {item.material}</p>
                          </div>

                        </div>
                      ))
                    )}
                  </div>

                  {/* Footer */}
                  {cart.length > 0 && (
                    <div className="pt-4 border-t border-gray-100 shrink-0">
                      <div className="flex justify-between items-end mb-5">
                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5">Total</span>
                        <span className="text-sm font-serif tracking-wider text-black">£{cartTotal.toLocaleString()}</span>
                      </div>
                      <button className="w-full bg-black text-white py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                        Checkout
                      </button>
                    </div>
                  )}

                </div>
              )}
            </div>

          </div>
        </div>
      </nav>

      <div className="h-24 w-full"></div>
    </>
  );
}