// app/preview/shop/[id]/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { useCart } from '../../../components/CartContext';
import { products } from '../../../data';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [mainImage, setMainImage] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const id = parseInt(params.id as string);
    const foundProduct = products.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.image || foundProduct.gallery?.[0]);

      // Handle Favorites Check
      const savedFavs = localStorage.getItem('favorites');
      if (savedFavs) {
        const favsArray = JSON.parse(savedFavs);
        if (favsArray.includes(foundProduct.id)) {
          setIsFavorite(true);
        }
      }

      // Recently Viewed Logic
      const savedViews = localStorage.getItem('recentlyViewed');
      let viewedArray = savedViews ? JSON.parse(savedViews) : [];
      viewedArray = viewedArray.filter((p: any) => p.id !== foundProduct.id);
      viewedArray.unshift(foundProduct);
      if (viewedArray.length > 4) viewedArray.pop();
      localStorage.setItem('recentlyViewed', JSON.stringify(viewedArray));
    }
  }, [params.id]);

  const handleToggleFavorite = () => {
    const savedFavs = localStorage.getItem('favorites');
    let favsArray = savedFavs ? JSON.parse(savedFavs) : [];
    
    if (favsArray.includes(product.id)) {
      favsArray = favsArray.filter((id: number) => id !== product.id);
      setIsFavorite(false);
    } else {
      favsArray.push(product.id);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favsArray));
  };

  if (!product) return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#000' }}>
      <Navbar />
      <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '11px' }}>Loading...</div>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#000', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 24px', display: 'flex', flexWrap: 'wrap', gap: '64px' }}>
        
        {/* Gallery Section */}
        <div style={{ flex: '1 1 500px', display: 'flex', gap: '16px', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100px' }}>
            {product.gallery?.map((img: string, index: number) => (
              <img 
                key={index} 
                src={img} 
                alt="" 
                onClick={() => setMainImage(img)} 
                style={{ 
                  width: '100%', 
                  aspectRatio: '4/5', 
                  objectFit: 'cover', 
                  cursor: 'pointer', 
                  border: mainImage === img ? '1px solid #000' : '1px solid transparent',
                  opacity: mainImage === img ? 1 : 0.6,
                  transition: 'all 0.2s'
                }} 
              />
            ))}
          </div>
          <div style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <img src={mainImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '600px' }} />
          </div>
        </div>

        {/* Product Info Section */}
        <div style={{ flex: '1 1 400px', padding: '24px 0' }}>
          <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#666', marginBottom: '16px' }}>{product.collection} Collection</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '32px', fontFamily: 'serif', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0, paddingRight: '24px' }}>{product.name}</h1>
            <button onClick={handleToggleFavorite} style={{ background: 'none', border: 'none', cursor: 'pointer', color: isFavorite ? '#d9534f' : '#ccc', marginTop: '4px', padding: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.5} style={{ width: '28px', height: '28px', transition: 'color 0.2s' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </div>

          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#D4AF37', marginBottom: '32px' }}>£{product.price.toLocaleString()}</p>
          
          <button 
            onClick={() => addToCart(product)} 
            style={{ width: '100%', padding: '16px', backgroundColor: '#000', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', fontSize: '12px', border: 'none', cursor: 'pointer', marginBottom: '48px', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#000'}
          >
            Add to Basket
          </button>

          <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '32px' }}>
            <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '16px' }}>Description</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', marginBottom: '32px' }}>{product.description}</p>
            
            {product.features && (
              <>
                <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '16px' }}>Key Features</h3>
                <ul style={{ fontSize: '14px', color: '#444', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '32px' }}>
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} style={{ marginBottom: '8px' }}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '16px' }}>Dimensions & Details</h3>
            <ul style={{ fontSize: '14px', color: '#444', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li><strong>SKU:</strong> {product.sku}</li>
              <li><strong>Dimensions:</strong> {product.dimensions}</li>
              {product.material && <li><strong>Material:</strong> {product.material}</li>}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}