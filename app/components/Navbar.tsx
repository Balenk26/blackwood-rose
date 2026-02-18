"use client";

import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> 
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 p-2">
              {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>

{/* LOGO SECTION - TEXT VERSION */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
            <Link href="/" className="text-2xl font-serif tracking-widest text-black uppercase">
              Blackwood <span className="text-gray-400">&</span> Rose
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center justify-center flex-1">
            {['Living', 'Dining', 'Bedroom', 'Office', 'New Arrivals'].map((item) => (
              <Link 
                key={item} 
                href={`/shop/${item.toLowerCase()}`} 
                className="text-xs font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-[0.2em]"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-8">
            <button className="text-gray-900 hover:text-gray-500 transition-colors">
              <Search size={22} strokeWidth={1} />
            </button>
            <button className="hidden md:block text-gray-900 hover:text-gray-500 transition-colors">
              <User size={22} strokeWidth={1} />
            </button>
            <button className="text-gray-900 hover:text-gray-500 transition-colors relative">
              <ShoppingCart size={22} strokeWidth={1} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen">
          <div className="px-8 py-8 space-y-6">
            {['Living', 'Dining', 'Bedroom', 'Office', 'New Arrivals'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="block text-xl font-light text-gray-900 hover:text-gray-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}