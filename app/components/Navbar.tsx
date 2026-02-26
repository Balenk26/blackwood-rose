"use client";

import Link from 'next/link';
import { useCart } from './CartContext';

export default function Navbar() {
  // Talk to the brain to get the cart items
  const cartContext = useCart();
  const cart = cartContext ? cartContext.cart : [];

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
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

          {/* Right Side: Account & CART NUMBER */}
          <div className="flex items-center space-x-8">
            <button className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 hover:text-black uppercase transition-colors hidden md:block font-bold">
              Account
            </button>
            <button className="text-[10px] md:text-xs tracking-[0.2em] text-black uppercase hover:text-[#D4AF37] transition-colors font-bold">
              Cart ({cart.length})
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}