"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { useCart } from '../../../components/CartContext';
import { products } from '../../../data';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  
  const productId = Number(params?.id);
  
  // THE FIX: We added ": any" so TypeScript stops being overly strict about missing properties!
  const product: any = products.find((p: any) => p.id === productId) || products[0];

  // THE REACT MAGIC: This remembers which image is currently selected
  const [mainImage, setMainImage] = useState(product?.image);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '160px 24px 100px 24px', display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
        
        {/* LEFT COLUMN: Image Gallery */}
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Main Huge Image */}
          <div style={{ width: '100%', aspectRatio: '4/5', backgroundColor: '#f5f5f5' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mainImage} alt={product?.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Thumbnail Row */}
          {product?.gallery && product.gallery.length > 0 && (
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
              {product.gallery.map((imgUrl: string, index: number) => (
                <button 
                  key={index} 
                  onClick={() => setMainImage(imgUrl)}
                  style={{ 
                    width: '80px', 
                    height: '100px', 
                    flexShrink: 0,
                    border: mainImage === imgUrl ? '2px solid #000' : '1px solid transparent', 
                    padding: '2px', 
                    backgroundColor: 'transparent', 
                    cursor: 'pointer',
                    transition: 'border 0.3s ease'
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgUrl} alt={`${product?.name} angle ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Product Info */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
          <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#999', marginBottom: '16px' }}>SKU: {product?.sku}</p>
          <h1 style={{ fontSize: '36px', fontFamily: 'serif', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 16px 0', lineHeight: '1.2' }}>{product?.name}</h1>
          <p style={{ fontSize: '24px', fontFamily: 'serif', color: '#D4AF37', margin: '0 0 32px 0' }}>£{Number(product?.price || 0).toLocaleString()}</p>
          
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555', marginBottom: '24px' }}>
            {product?.description}
          </p>

          {product?.features && (
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '12px' }}>Key Features</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#555', fontSize: '13px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {product.features.map((feature: string, index: number) => (
                  <li key={index} style={{ listStyleType: 'disc' }}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea', padding: '24px 0', marginBottom: '40px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: '#666', display: 'grid', gap: '12px' }}>
              <li><strong>Material:</strong> {product?.material}</li>
              <li><strong>Dimensions:</strong> {product?.dimensions}</li>
              {product?.doors && <li><strong>Doors:</strong> {product.doors}</li>}
              <li><strong>Delivery:</strong> Standard UK Delivery (3-5 Days)</li>
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