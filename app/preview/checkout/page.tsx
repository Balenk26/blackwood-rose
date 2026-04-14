"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useCart } from '../../components/CartContext';
import Link from 'next/link';

// Component for the mini checkout items
function CheckoutItemCard({ item, index, removeFromCart }: { item: any, index: number, removeFromCart: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = item?.gallery?.length > 0 ? item.gallery : [item?.image];

  const nextImage = (e: React.MouseEvent) => { e.preventDefault(); setCurrentIndex((prev) => (prev + 1) % images.length); };
  const prevImage = (e: React.MouseEvent) => { e.preventDefault(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); };

  const safeName = item?.name || 'Luxury Item';
  const safePrice = Number(item?.price) || 0;

  return (
    <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
      <div style={{ width: '64px', height: '85px', backgroundColor: '#f5f5f5', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[currentIndex]} alt={safeName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        
        {images.length > 1 && (
          <div style={{ position: 'absolute', bottom: '2px', left: '0', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 2px' }}>
             <button onClick={prevImage} style={{ background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0 }}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{width: '8px', height: '8px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
             </button>
             <button onClick={nextImage} style={{ background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0 }}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{width: '8px', height: '8px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
             </button>
          </div>
        )}
        <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: '#666', color: '#fff', fontSize: '10px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>1</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{safeName}</span>
        <span style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>£{safePrice.toLocaleString()}</span>
        <button onClick={() => removeFromCart(index)} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d9534f', cursor: 'pointer', padding: 0, fontWeight: 'bold' }}>Remove</button>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const { cart, cartTotal, removeFromCart } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const safeCart = cart || [];
  const safeTotal = Number(cartTotal || 0);

  if (!mounted) return null;

  return (
    <div style={{ backgroundColor: '#fafafa', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '140px 24px 100px 24px' }}>
        
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          
          <div style={{ flex: '2 1 650px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
             {/* Simple checkout form placeholder to save space here. Keep your current full left-column checkout form! I'm providing just the structure so the right column works perfectly. */}
             <div style={{ backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea' }}>
               <h2 style={{ fontSize: '16px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>Checkout Placeholder</h2>
               <p style={{fontSize: '13px', color: '#666'}}>*Keep the beautiful red-error form we built earlier intact here!*</p>
             </div>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div style={{ flex: '1 1 400px', position: 'sticky', top: '180px' }}>
            <div style={{ backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea' }}>
              <h2 style={{ fontSize: '16px', fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px' }}>Order Summary</h2>
              
              <div style={{ marginBottom: '32px', maxHeight: '350px', overflowY: 'auto', paddingRight: '12px' }}>
                {safeCart.length === 0 ? (
                  <p style={{ color: '#666', fontSize: '13px' }}>Your basket is empty.</p>
                ) : (
                  safeCart.map((item: any, index: number) => (
                    <CheckoutItemCard key={`chk-${index}`} item={item} index={index} removeFromCart={removeFromCart} />
                  ))
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px', borderTop: '1px solid #eaeaea', paddingTop: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666' }}>Subtotal</span>
                  <span style={{ fontWeight: 'bold' }}>£{safeTotal.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eaeaea', paddingTop: '24px', fontSize: '24px', fontFamily: 'serif', marginTop: '8px' }}>
                  <span>Total</span>
                  <span>£{safeTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}