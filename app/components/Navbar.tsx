"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, cartTotal, removeFromCart } = useCart();

  return (
    <>
      <header 
        className="w-full fixed top-0 left-0 flex flex-col"
        style={{ backgroundColor: '#000000', color: '#D4AF37', zIndex: 9999, borderBottom: '1px solid #333333' }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-[100px] flex items-center justify-between">
          
          <div className="w-1/4 flex items-center justify-start">
            <button style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>

          <div className="w-2/4 flex flex-col items-center justify-center text-center">
            <Link href="/preview" style={{ textDecoration: 'none', color: '#D4AF37', fontSize: '32px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Blackwood & Rose
            </Link>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#aaaaaa', marginTop: '4px', fontWeight: 'bold' }}>
              Furniture & Home Accessories
            </span>
          </div>

          <div className="w-1/4 flex justify-end items-center space-x-5 lg:space-x-7 relative">
            <button style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </button>
            <button style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
            </button>
            
            {/* BASKET BUTTON */}
            <button onClick={() => setIsCartOpen(!isCartOpen)} style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer', position: 'relative' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
              <span style={{ position: 'absolute', bottom: '-4px', right: '-8px', backgroundColor: '#ffffff', color: '#000000', fontSize: '10px', fontWeight: 'bold', height: '16px', width: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cart?.length || 0}
              </span>
            </button>

            {/* THE MINI CART MENU (WITH DEFENSIVE FALLBACKS) */}
            {isCartOpen && (
              <div style={{ position: 'absolute', top: '100%', right: '0', marginTop: '30px', width: '360px', backgroundColor: '#ffffff', border: '1px solid #eaeaea', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)', padding: '24px', color: '#000', textAlign: 'left', cursor: 'default' }}>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', borderBottom: '1px solid #eaeaea', paddingBottom: '16px', margin: '0 0 16px 0' }}>Your Basket</h4>
                
                {!cart || cart.length === 0 ? (
                  <p style={{ fontSize: '12px', color: '#666', textAlign: 'center', margin: '32px 0' }}>Your basket is empty.</p>
                ) : (
                  <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                    {cart.map((item: any, index: number) => {
                      // These safe variables guarantee the app will never crash even if data is missing
                      const safeName = item?.name || 'Luxury Item';
                      const safePrice = Number(item?.price) || 0;
                      const safeImage = item?.image || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80';
                      const safeId = item?.id || index;

                      return (
                        <div key={`${safeId}-${index}`} style={{ display: 'flex', gap: '16px', marginBottom: '16px', borderBottom: '1px solid #fafafa', paddingBottom: '16px' }}>
                          <img src={safeImage} alt={safeName} style={{ width: '60px', height: '80px', objectFit: 'cover' }} />
                          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{safeName}</span>
                            <span style={{ fontSize: '10px', color: '#D4AF37', marginTop: '4px', fontWeight: 'bold' }}>£{safePrice.toLocaleString()}</span>
                            <button onClick={() => removeFromCart(safeId)} style={{ marginTop: 'auto', alignSelf: 'flex-start', background: 'none', border: 'none', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', cursor: 'pointer', padding: 0 }}>Remove</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {cart && cart.length > 0 && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #eaeaea' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontWeight: 'bold' }}>
                      <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total</span>
                      {/* Ensures cartTotal is treated strictly as a number before formatting */}
                      <span style={{ fontSize: '16px', fontFamily: 'serif' }}>£{Number(cartTotal || 0).toLocaleString()}</span>
                    </div>
                    <Link href="/preview/checkout" style={{ display: 'block', width: '100%', backgroundColor: '#000000', color: '#ffffff', textAlign: 'center', padding: '16px 0', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', textDecoration: 'none' }}>
                      Proceed to Checkout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM ROW: The Updated Links */}
        <div style={{ width: '100%', height: '55px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #333333' }}>
          <ul style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '1200px', gap: '3rem', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0, padding: 0, listStyle: 'none' }}>
            <li><Link href="/preview/shop" style={{ textDecoration: 'none', color: '#D4AF37' }}>All Products</Link></li>
            <li><Link href="/preview/living" style={{ textDecoration: 'none', color: '#D4AF37' }}>Living</Link></li>
            <li><Link href="/preview/dining" style={{ textDecoration: 'none', color: '#D4AF37' }}>Dining</Link></li>
            <li><Link href="/preview/bedroom" style={{ textDecoration: 'none', color: '#D4AF37' }}>Bedroom</Link></li>
            <li><Link href="/preview/upholstery" style={{ textDecoration: 'none', color: '#D4AF37' }}>Upholstery</Link></li>
            <li><Link href="/preview/brands" style={{ textDecoration: 'none', color: '#D4AF37' }}>Brands</Link></li>
          </ul>
        </div>
      </header>

      <div style={{ height: '155px', width: '100%', backgroundColor: '#ffffff' }}></div>
    </>
  );
}