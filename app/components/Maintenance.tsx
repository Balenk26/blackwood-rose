"use client";

import React from 'react';

export default function Maintenance() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col h-screen">
      
      {/* Middle Section */}
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl w-full space-y-8 text-center animate-pulse">
          
          <h1 className="text-3xl md:text-5xl font-serif tracking-widest text-black uppercase">
            Blackwood <span className="text-gray-400">&</span> Rose
          </h1>

          <div className="h-px w-24 bg-gray-200 mx-auto"></div>

          <h2 className="text-lg md:text-xl font-light text-gray-900 tracking-wide uppercase">
            Curating Excellence
          </h2>
          
          <p className="text-gray-500 font-light leading-relaxed max-w-md mx-auto">
            Our online boutique is currently under construction. 
            We are crafting a digital experience worthy of our collection.
          </p>

          <div className="pt-8 w-full max-w-xs mx-auto">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Notify me when we launch</p>
            <div className="flex border-b border-gray-300 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full outline-none text-center text-gray-900 placeholder-gray-300 font-light text-sm"
              />
              <button className="text-xs font-bold uppercase hover:text-gray-500 transition-colors ml-2">
                Join
              </button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Updated Footer with Legal Info */}
      <footer className="w-full py-8 text-center space-y-2">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          &copy; 2026 Blackwood & Rose
        </p>
        <p className="text-[9px] text-gray-300 uppercase tracking-wider">
          Nova Phoenix Limited trading as Blackwood and Rose | VAT Number: 265261504
        </p>
      </footer>

    </div>
  );
}