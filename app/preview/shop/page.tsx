"use client";

import React, { useState, Suspense } from 'react';
import Navbar from '../../components/Navbar';
import { useCart } from '../../components/CartContext';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { products } from '../../data';

function ProductCard({ product, addToCart }: { product: any, addToCart: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = product?.gallery?.length > 0 ? product.gallery : [product?.image];

  const nextImage = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); };
  const prevImage = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ width: '100%', aspectRatio: '4/5', backgroundColor: '#f5f5f5', marginBottom: '16px', position: 'relative', overflow: 'hidden' }}>
        <Link href={`/preview/shop/${product.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[currentIndex]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Link>
        
        {images.length > 1 && (
          <>
            <button onClick={prevImage} style={{ position: 'absolute', top: '50%', left: '8px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{width: '14px', height: '14px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button onClick={nextImage} style={{ position: 'absolute', top: '50%', right: '8px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{width: '14px', height: '14px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </>
        )}
      </div>
      <Link href={`/preview/shop/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px 0' }}>{product.name}</h3>
        <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#D4AF37', margin: 0 }}>£{product.price.toLocaleString()}</p>
      </Link>
      <button onClick={() => addToCart(product)} style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', border: '1px solid #eaeaea', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', cursor: 'pointer', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#eaeaea'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}>
        Add To Basket
      </button>
    </div>
  );
}

function ShopContent() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const collectionFilter = searchParams.get('collection');

  let displayedProducts = products;
  let pageTitle = "All Products";

  // Logic to handle Delphine, Reed, and the new Haldon collection!
  if (collectionFilter === 'delphine') {
    displayedProducts = products.filter((p: any) => p.collection === 'delphine');
    pageTitle = "Delphine Collection";
  } else if (collectionFilter === 'reed') {
    displayedProducts = products.filter((p: any) => p.collection === 'reed');
    pageTitle = "Reed Collection";
  } else if (collectionFilter === 'haldon') {
    displayedProducts = products.filter((p: any) => p.collection === 'haldon');
    pageTitle = "Haldon Collection";
  }

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '48px 24px', textAlign: 'center', borderBottom: '1px solid #eaeaea', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>{pageTitle}</h1>
      </div>

      <main style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px 100px 24px', display: 'flex', gap: '64px' }}>
        <aside style={{ width: '250px', flexShrink: 0, position: 'sticky', top: '180px', height: 'fit-content' }}>
          <div style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '16px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Refine</h2>
          </div>
          <Link href="/preview/shop" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', width: '100%', backgroundColor: '#000', color: '#fff', padding: '12px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            Clear Filters
          </Link>
        </aside>
        
        <div style={{ flexGrow: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {displayedProducts.map((product) => (
             <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
          {displayedProducts.length === 0 && (
            <p style={{ color: '#666', gridColumn: '1 / -1' }}>No products found in this collection yet.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading products...</div>}>
      <ShopContent />
    </Suspense>
  );
}