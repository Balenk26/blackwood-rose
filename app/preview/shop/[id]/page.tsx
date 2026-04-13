"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { useCart } from '../../../components/CartContext';
import { products } from '../../../data';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  
  const productId = Number(params?.id);
  const product = products.find(p => p.id === productId) || products[0];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '160px 24px 100px 24px', display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
        
        {/* Product Image */}
        <div style={{ flex: '1 1 500px', aspectRatio: '4/5', backgroundColor: '#f5f5f5' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Product Info */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
          <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#999', marginBottom: '16px' }}>SKU: {product.sku}</p>
          <h1 style={{ fontSize: '36px', fontFamily: 'serif', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 16px 0', lineHeight: '1.2' }}>{product.name}</h1>
          <p style={{ fontSize: '24px', fontFamily: 'serif', color: '#D4AF37', margin: '0 0 32px 0' }}>£{product.price.toLocaleString()}</p>
          
          {/* Main Description */}
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555', marginBottom: '24px' }}>
            {product.description}
          </p>

          {/* Key Features (Bulleted List) */}
          {product.features && (
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '12px' }}>Key Features</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#555', fontSize: '13px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {product.features.map((feature, index) => (
                  <li key={index} style={{ listStyleType: 'disc' }}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Specifications Box */}
          <div style={{ borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea', padding: '24px 0', marginBottom: '40px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#666', display: 'grid', gap: '12px' }}>
              <li><strong>Material:</strong> {product.material}</li>
              <li><strong>Dimensions:</strong> {product.dimensions}</li>
              {product.doors && <li><strong>Doors:</strong> {product.doors}</li>}
              <li><strong>Delivery:</strong> Standard UK Delivery (3-5 Days)</li>
            </ul>
          </div>

          <button 
            onClick={() => addToCart(product as any)}
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