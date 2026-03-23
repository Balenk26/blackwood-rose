"use client";

import React from 'react';
import Navbar from '../../../components/Navbar';
import { useCart } from '../../../components/CartContext';
import { products } from '../page'; // Imports our product list

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  
  // Finds the specific product based on the URL
  const product = products.find(p => p.id === parseInt(params.id)) || products[0];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 24px 100px 24px', display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
        
        {/* Left: Huge Product Image */}
        <div style={{ flex: '1 1 500px', aspectRatio: '4/5', backgroundColor: '#f5f5f5' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Right: Product Details & Cart */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', paddingTop: '40px' }}>
          <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#999', marginBottom: '16px' }}>SKU: BR-{product.id}009</p>
          <h1 style={{ fontSize: '40px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px 0' }}>{product.name}</h1>
          <p style={{ fontSize: '24px', fontFamily: 'serif', color: '#D4AF37', margin: '0 0 32px 0' }}>£{product.price.toLocaleString()}</p>
          
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
            A masterclass in modern luxury. This signature piece features sustainable, hand-finished materials and impeccable British craftsmanship. Designed to elevate your space with uncompromising comfort and timeless architectural lines.
          </p>

          <div style={{ borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea', padding: '24px 0', marginBottom: '40px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#666', display: 'grid', gap: '12px' }}>
              <li><strong>Material:</strong> Premium Finish</li>
              <li><strong>Dimensions:</strong> W: 210cm x D: 95cm x H: 85cm</li>
              <li><strong>Delivery:</strong> Complimentary White-Glove (2-4 Weeks)</li>
            </ul>
          </div>

          <button 
            onClick={() => addToCart(product)}
            style={{ width: '100%', backgroundColor: '#000', color: '#fff', padding: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#D4AF37'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#000'}
          >
            Add to Basket
          </button>
        </div>

      </div>
    </div>
  );
}