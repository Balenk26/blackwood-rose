"use client";

import React from 'react';

export default function Maintenance() {
  return (
    <div className="min-h-[100dvh] bg-[#FAFAFA] flex flex-col items-center justify-between p-6 md:p-12 relative z-[9999]">
      
      <div className="absolute top-0 left-0 w-full h-1.5 bg-stone-900"></div>

      <div className="w-full pt-8 md:pt-16"></div>

      <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-12 my-auto">
        
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif tracking-[0.2em] text-stone-900 uppercase">
            Blackwood <span className="text-stone-400 font-light">&</span> Rose
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.3em] text-stone-400 uppercase">
            London
          </p>
        </div>

        <div className="w-12 h-[1px] bg-stone-300"></div>

        <div className="space-y-6 max-w-lg">
          <h2 className="text-lg md:text-xl font-light text-stone-800 tracking-[0.15em] uppercase">
            Curating Excellence
          </h2>
          <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">
            Our digital boutique is currently undergoing a meticulous refinement. 
            We look forward to unveiling a curated collection of extraordinary furniture soon.
          </p>
        </div>

      </div>

      <footer className="w-full mt-16 pt-8 text-center flex flex-col items-center justify-center space-y-4 pb-4">
        <p className="text-[10px] text-stone-400 uppercase tracking-widest"></p>