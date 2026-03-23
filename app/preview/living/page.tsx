"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import { useCart } from '../../components/CartContext';
import Link from 'next/link';

const livingProducts = [
  { id: 1, name: 'The Onyx Lounge Chair', price: 1250, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Velvet Accent Sofa', price: 2100, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'Bouclé Armchair', price: 950, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80' }
];

export default function LivingPage() {
  const { addToCart } = useCart();

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '48px 24px', textAlign: 'center', borderBottom: '1px solid #eaeaea', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Living Room</h1>
        <p style={{ marginTop: '16px', color: '#666', letterSpacing: '0.05em' }}>Explore our curated selection of luxury sofas and armchairs.</p>
      </div>

      <main style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px 100px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {livingProducts.map((product) => (
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