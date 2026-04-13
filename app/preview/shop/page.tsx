"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import { useCart } from '../../components/CartContext';
import Link from 'next/link';
// We import your new master list here!
import { products } from '../../data';

export default function ShopPage() {
  const { addToCart } = useCart();

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '48px 24px', textAlign: 'center', borderBottom: '1px solid #eaeaea', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>All Products</h1>
      </div>

      <main style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px 100px 24px', display: 'flex', gap: '64px' }}>
        <aside style={{ width: '250px', flexShrink: 0, position: 'sticky', top: '180px', height: 'fit-content' }}>
          <div style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '16px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Refine</h2>
          </div>
          <button style={{ width: '100%', backgroundColor: '#000', color: '#fff', padding: '12px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            Clear Filters
          </button>
        </aside>
        
        <div style={{ flexGrow: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {products.map((product) => (
            <div key={product.id} className="group" style={{ display: 'flex', flexDirection: 'column' }}>
              <Link href={`/preview/shop/${product.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', aspectRatio: '4/5', backgroundColor: '#f5f5f5', marginBottom: '16px', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px 0' }}>{product.name}</h3>
                <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#D4AF37', margin: 0 }}>£{product.price.toLocaleString()}</p>
              </Link>
              <button onClick={() => addToCart(product)} style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', border: '1px solid #eaeaea', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', cursor: 'pointer' }}>
                Add To Basket
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}