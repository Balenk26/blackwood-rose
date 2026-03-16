"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* THE MOVING BAR: Forced Black Background and Gold Text. High Z-Index guarantees NO overlapping */}
      <header 
        className="w-full fixed top-0 left-0 flex flex-col"
        style={{ backgroundColor: '#000000', color: '#D4AF37', zIndex: 9999, borderBottom: '1px solid #333333' }}
      >
        
        {/* TOP ROW: Search, Logo, Icons */}
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-[100px] flex items-center justify-between">
          
          {/* Left: Search Icon */}
          <div className="w-1/4 flex items-center justify-start">
            <button style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>

          {/* Center: Exact Logo Layout */}
          <div className="w-2/4 flex flex-col items-center justify-center text-center">
            <Link href="/preview" style={{ textDecoration: 'none', color: '#D4AF37', fontSize: '32px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Blackwood & Rose
            </Link>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#aaaaaa', marginTop: '4px', fontWeight: 'bold' }}>
              Furniture & Home Accessories
            </span>
          </div>

          {/* Right: Reviews & Icons */}
          <div className="w-1/4 flex justify-end items-center space-x-5 lg:space-x-7 relative">
            <button style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>
            <button style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            
            <button onClick={() => setIsCartOpen(!isCartOpen)} style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer', position: 'relative' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span style={{ position: 'absolute', bottom: '-4px', right: '-8px', backgroundColor: '#ffffff', color: '#000000', fontSize: '10px', fontWeight: 'bold', height: '16px', width: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>0</span>
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: Navigation Links */}
        <div style={{ width: '100%', height: '55px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #333333' }}>
          <ul style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '1200px', gap: '3rem', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0, padding: 0, listStyle: 'none' }}>
            <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: '#D4AF37' }}>Products</Link></li>
            
            {/* LIVING Dropdown Trigger */}
            <li className="group" style={{ position: 'relative' }}>
              <Link href="/preview/shop" style={{ textDecoration: 'none', color: '#D4AF37' }}>Living</Link>
              <div className="absolute top-[55px] -left-32 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8 z-50 flex gap-12 text-left" style={{ backgroundColor: '#111111', border: '1px solid #333333', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '11px', fontWeight: 'bold', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>Sofas & Armchairs</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '11px', color: '#cccccc', letterSpacing: '0.1em' }}>
                    <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: 'inherit' }}>2 Seater Sofas</Link></li>
                    <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: 'inherit' }}>3 Seater Sofas</Link></li>
                    <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: 'inherit' }}>Armchairs</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: '#D4AF37' }}>Dining</Link></li>
            <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: '#D4AF37' }}>Bedroom</Link></li>
            <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: '#D4AF37' }}>Upholstery</Link></li>
            <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: '#D4AF37' }}>Brands</Link></li>
            <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: '#ffffff' }}>Sale</Link></li>
          </ul>
        </div>
      </header>

      {/* Invisible Spacer so content doesn't get hidden under the 155px fixed header */}
      <div style={{ height: '155px', width: '100%', backgroundColor: '#ffffff' }}></div>
    </>
  );
}