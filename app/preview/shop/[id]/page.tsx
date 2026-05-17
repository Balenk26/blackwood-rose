"use client";

import React, { useState, useEffect, use } from 'react';
import Navbar from '../../../components/Navbar';
import { useCart } from '../../../components/CartContext';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  // Safe unwrap of async params in Next.js
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch product from the live database database on load
  useEffect(() => {
    async function loadProduct() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.success) {
          // Robust case-insulated comparison to catch both Int and String IDs perfectly
          const foundProduct = data.products.find(
            (p: any) => String(p.id) === String(productId)
          );
          setProduct(foundProduct);
        }
      } catch (err) {
        console.error("Failed to fetch product details from Neon database", err);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [productId]);

  if (loading) {
    return <div style={{ padding: '150px', textAlign: 'center', fontFamily: 'serif', color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Unveiling Masterpiece...</div>;
  }

  if (!product) {
    return (
      <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000' }}>
        <Navbar />
        <div style={{ padding: '100px 24px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'serif', fontSize: '24px', marginBottom: '16px' }}>Asset Not Found</h1>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '32px' }}>This item may have been curated out of the current collection.</p>
          <Link href="/preview/shop" style={{ backgroundColor: '#000', color: '#fff', padding: '12px 24px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.1em' }}>Return to Shop</Link>
        </div>
      </div>
    );
  }

  // Support both legacy single images and your brand new multi-image array gallery structures
  const productImages = product.images?.length > 0 ? product.images : (product.gallery?.length > 0 ? product.gallery : [product.image]);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />

      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px 100px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '64px' }}>
        
        {/* LEFT COLUMN: Premium Gallery Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ width: '100%', aspectRatio: '4/5', backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
            <img 
              src={productImages[currentImageIndex]} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.3s ease' }} 
            />
          </div>
          
          {/* Multi-Image Micro Thumbnails */}
          {productImages.length > 1 && (
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
              {productImages.map((imgUrl: string, idx: number) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentImageIndex(idx)}
                  style={{ width: '70px', height: '90px', border: currentImageIndex === idx ? '2px solid #D4AF37' : '1px solid #eaeaea', padding: 0, cursor: 'pointer', backgroundColor: '#fff', flexShrink: 0 }}
                >
                  <img src={imgUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Luxury Brand Copywriting & Specification Sheet */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
          <span style={{ fontSize: '10px', uppercase: 'true', letterSpacing: '0.2em', color: '#888', marginBottom: '8px', fontWeight: 'bold' }}>
            BLACKWOOD & ROSE • {product.category?.toUpperCase()}
          </span>
          <h1 style={{ fontSize: '28px', fontFamily: 'serif', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '20px', fontFamily: 'serif', color: '#D4AF37', margin: '0 0 32px 0', fontWeight: 'bold' }}>
            £{Number(product.price || 0).toLocaleString()}
          </p>

          <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '24px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>The Narrative</h3>
            <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', fontWeight: 300, margin: 0 }}>
              {product.description}
            </p>
          </div>

          {/* Premium Architectural Bullet Points */}
          {product.features?.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Characteristics</h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#555', lineHeight: '1.8' }}>
                {product.features.map((feature: string, i: number) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* BRAND NEW: Luxury Specification Sheet */}
          <div style={{ backgroundColor: '#fdfbf7', border: '1px solid #f2ece0', padding: '20px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 4px 0', color: '#8b7355' }}>Specification Sheet</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', borderBottom: '1px solid #f2ece0', paddingBottom: '6px' }}>
              <span style={{ color: '#777' }}>Dimensions</span>
              <span style={{ fontWeight: 'bold' }}>{product.dimensions || 'Contact for details'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', borderBottom: '1px solid #f2ece0', paddingBottom: '6px' }}>
              <span style={{ color: '#777' }}>Material / Composition</span>
              <span style={{ fontWeight: 'bold' }}>{product.material || 'Premium Finish'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', borderBottom: '1px solid #f2ece0', paddingBottom: '6px' }}>
              <span style={{ color: '#777' }}>Colour Profile</span>
              <span style={{ fontWeight: 'bold' }}>{product.colour || 'As Photographed'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', borderBottom: '1px solid #f2ece0', paddingBottom: '6px' }}>
              <span style={{ color: '#777' }}>Logistics Estimation</span>
              <span style={{ fontWeight: 'bold', color: '#448b44' }}>{product.deliveryTime || '3-5 Business Days'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ color: '#777' }}>White-Glove Shipping</span>
              <span style={{ fontWeight: 'bold' }}>{product.deliveryCharge > 0 ? `£${product.deliveryCharge}` : 'Complimentary'}</span>
            </div>
          </div>

          <button 
            onClick={() => addToCart(product)} 
            style={{ width: '100%', padding: '18px', backgroundColor: '#000000', color: '#ffffff', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
          >
            Secure This Masterpiece
          </button>
        </div>

      </main>
    </div>
  );
}