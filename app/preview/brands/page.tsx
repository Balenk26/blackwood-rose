import React from 'react';
import Navbar from '../../components/Navbar';

export default function BrandsPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '60px 24px', textAlign: 'center', borderBottom: '1px solid #eaeaea' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
          Our Brands
        </h1>
        <p style={{ marginTop: '16px', color: '#666', letterSpacing: '0.05em' }}>
          Exclusive collections from the world's most renowned designers.
        </p>
      </div>

      <div style={{ padding: '60px 24px', textAlign: 'center' }}>
        <p style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '12px', color: '#999' }}>
          [ Designer profiles and collections will be displayed here ]
        </p>
      </div>
    </div>
  );
}