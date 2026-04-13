"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { useCart } from '../../../components/CartContext';
// We import your new master list here too!
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
        
        <div style={{ flex: '1 1 500px', aspectRatio: '4/5', backgroundColor: '#f5f5f5' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', paddingTop: '40px' }}>
          {/* Now pulls YOUR custom SKU */}
          <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#999', marginBottom: '16px' }}>SKU: {product.sku}</p>
          <h1 style={{ fontSize: '40px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px 0' }}>{product.name}</h1>
          <p style={{ fontSize: '24px', fontFamily: 'serif', color: '#D4AF37', margin: '0 0 32px 0' }}>£{product.price.toLocaleString()}</p>
          
          {/* Now pulls YOUR custom description */}
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
            {product.description}
          </p>

          <div style={{ borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea', padding: '24px 0', marginBottom: '40px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#666', display: 'grid', gap: '12px' }}>
              {/* Now pulls YOUR custom materials and dimensions */}
              <li><strong>Material:</strong> {product.material}</li>
              <li><strong>Dimensions:</strong> {product.dimensions}</li>
              <li><strong>Delivery:</strong> Complimentary White-Glove (2-4 Weeks)</li>
            </ul>
          </div>

          <button 
            onClick={() => addToCart(product)}
            style={{ width: '100%', backgroundColor: '#000', color: '#fff', padding: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}