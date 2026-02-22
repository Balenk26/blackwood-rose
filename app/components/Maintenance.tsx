"use client";

import React from 'react';

export default function Maintenance() {
  return (
    // Changed to a soft 'stone' off-white and used min-h-[100dvh] to fix the mobile cut-off issue
    <div className="min-h-[100dvh] bg-[#FAFAFA] flex flex-col items-center justify-between p-6 md:p-12 relative z-[9999]">
      
      {/* Top Border Accent for a framed, boutique feel */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-stone-900"></div>

      {/* Top Spacer */}
      <div className="w-full pt-8 md:pt-16"></div>

      {/* Main Content Area */}
      <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-12 my-auto">
        
        {/* Brand Identity */}
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif tracking-[0.2em] text-stone-900 uppercase">
            Blackwood <span className="text-stone-400 font-light">&</span> Rose
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.3em] text-stone-400 uppercase">
            London
          </p>
        </div>

        {/* Elegant Divider */}
        <div className="w-12 h-[1px] bg-stone-300"></div>

        {/* Messaging */}
        <div className="space-y-6 max-w-lg">
          <h2 className="text-lg md:text-xl font-light text-stone-800 tracking-[0.15em] uppercase">
            Curating Excellence
          </h2>
          <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">
            Our digital boutique is currently undergoing a meticulous refinement. 
            We look forward to unveiling a curated collection of extraordinary furniture soon.
          </p>
        </div>

        {/* Sophisticated Newsletter Signup */}
        <div className="pt-8 w-full max-w-sm">
          <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] mb-4">
            Invitation to Launch
          </p>
          <div className="flex items-center border-b border-stone-300 pb-2 focus-within:border-stone-800 transition-colors duration-300">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-transparent w-full outline-none text-center text-stone-800 placeholder-stone-300 font-light text-sm"
            />
            <button className="text-[10px] md:text-xs font-medium uppercase tracking-[0.15em] text-stone-900 hover:text-stone-500 transition-colors ml-4">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Footer - Restructured so the