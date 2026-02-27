"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function Navbar() {
  const cartContext = useCart();
  const cart = cartContext ? cartContext.cart : [];
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartTotal = cart.reduce((sum: number, item: any) => sum + item.price, 0);
  
  // This helps us detect if the user clicks outside the cart to close it
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
        {/* We wrap the Navbar content in the reference so the cart drops down perfectly inside it */}
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative" ref={cartRef}>
          <div className="flex justify-between items-center h-24">
            
            {/* Left Side */}
            <div className="hidden md:flex space-x-10">
              <Link href="/preview/shop" className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 hover:text-black uppercase transition-colors font-bold">
                Shop
              </Link>
              <Link href="/preview/collections" className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 hover:text-black uppercase transition-colors font-bold">
                Collections
              </Link>
            </div>

            {/* Center Brand */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Link href="/preview" className="text-xl md:text-2xl font-serif tracking-[0.15em] text-black uppercase">
                Blackwood <span className="text-[#D4AF37]">&</span> Rose
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-8">
              <button className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 hover:text-black uppercase transition-colors hidden md:block font-bold">
                Account
              </button>
              {/* Toggles the mini-cart */}
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className={`text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors font-bold ${isCartOpen ? 'text-[#D4AF37]' : 'text-black hover:text-[#D4AF37]'}`}
              >
                Cart ({cart.length})
              </button>
            </div>

          </div>

          {/* THE LUXURY FLOATING MINI-CART */}
          {isCartOpen && (
            <div className="absolute top-[85px] right-6 md:right-12 w-[340px] bg-white border border-black shadow-xl z-[120] flex flex-col animate-fade-in max-h-[70vh]">
              
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 shrink-0">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">Your Selection</h2>
              </div>

              <div className="flex-grow overflow-y-auto px-6 py-4 space-y-6">
                {cart.length === 0 ? (
                  <div className="py-10 flex flex-col items-center justify-center text-center space-y-4">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Your collection is empty.</p>
                  </div>
                ) : (
                  cart.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4 items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      
                      {/* Ultra-minimal thumbnails */}
                      <div className="w-16 h-20 bg-gray-100 shrink-0 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex flex-col justify-center w-full">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] text-black mb-1">{item.name}</h3>
                        <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">{item.color} | {item.material}</p>
                        <p className="text-[10px] font-bold tracking-wider text-[#D4AF37]">£{item.price.toLocaleString()}</p>
                      </div>

                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-200 bg-gray-50 shrink-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Subtotal</span>
                    <span className="text-sm font-serif tracking-wider text-black">£{cartTotal.toLocaleString()}</span>
                  </div>
                  <button className="w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                    Checkout
                  </button>
                </div>
              )}

            </div>
          )}
        </div>
      </nav>

      <div className="h-24 w-full"></div>
    </>
  );
}