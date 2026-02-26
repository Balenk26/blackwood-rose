"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function Navbar() {
  // Connect to the brain
  const cartContext = useCart();
  const cart = cartContext ? cartContext.cart : [];
  
  // New Brain logic: Is the cart drawer open or closed?
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calculate the total price of everything in the cart
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* 1. THE FIXED NAVBAR
        Using 'fixed' instead of 'sticky' guarantees it hovers over the page no matter what.
      */}
      <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-[100] transition-all">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
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

            {/* Right Side: Account & CART BUTTON */}
            <div className="flex items-center space-x-8">
              <button className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 hover:text-black uppercase transition-colors hidden md:block font-bold">
                Account
              </button>
              {/* This button now triggers the drawer to open! */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="text-[10px] md:text-xs tracking-[0.2em] text-black uppercase hover:text-[#D4AF37] transition-colors font-bold"
              >
                Cart ({cart.length})
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* 2. INVISIBLE SPACER
        Because the nav is 'fixed' and floating, it doesn't take up physical space. 
        This empty 24-pixel tall box pushes the rest of the website down so it doesn't hide under the nav!
      */}
      <div className="h-24 w-full"></div>

      {/* 3. THE SLIDE-OUT CART DRAWER 
      */}
      
      {/* The dark, blurry background overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] transition-opacity"
          onClick={() => setIsCartOpen(false)} // Clicking outside the box closes it
        ></div>
      )}

      {/* The actual sliding white panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[120] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Cart Header */}
        <div className="flex justify-between items-center px-8 h-24 border-b border-gray-200 shrink-0">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="text-2xl text-gray-400 hover:text-black transition-colors"
          >
            &times;
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow overflow-y-auto px-8 py-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest">Your collection is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-[10px] border-b border-black text-black uppercase tracking-widest pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item: any, index: number) => (
              <div key={index} className="flex gap-6 animate-fade-in">
                <div className="w-24 h-32 bg-gray-100 shrink-0 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-black mb-1">{item.name}</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">{item.color} | {item.material}</p>
                  <p className="text-xs font-medium tracking-wider text-[#D4AF37]">£{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer / Checkout Button */}
        {cart.length > 0 && (
          <div className="p-8 border-t border-gray-200 bg-gray-50 shrink-0">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Subtotal</span>
              <span className="text-lg font-serif tracking-wider text-black">£{cartTotal.toLocaleString()}</span>
            </div>
            <button className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
              Proceed to Checkout
            </button>
            <p className="text-[8px] text-gray-400 uppercase tracking-widest text-center mt-4">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}

      </div>
    </>
  );
}