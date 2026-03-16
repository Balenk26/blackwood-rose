import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function PreviewHomepage() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />

      {/* 1. HERO SECTION (1:1 with Screenshot) */}
      <section style={{ position: 'relative', width: '100%', height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Sofa" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.05)' }}></div>
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontFamily: 'serif', color: '#4a4a4a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', textShadow: '2px 2px 10px rgba(255,255,255,0.8)' }}>
            Take A Seat
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontFamily: 'serif', color: '#4a4a4a', letterSpacing: '0.05em', marginBottom: '2.5rem', textShadow: '1px 1px 5px rgba(255,255,255,0.8)' }}>
            Refined upholstery for beautifully lived spaces
          </p>
          <Link 
            href="/preview/shop" 
            style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#000000', padding: '16px 36px', fontSize: '11px', letterSpacing: '0.2em', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
          >
            View All Upholstery
          </Link>
        </div>
      </section>

      {/* 2. THE COLLAGE SECTION (Hover for 'Shop Now') */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '100px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '24px', fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#000' }}>Curated Spaces</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#D4AF37', margin: '20px auto 0' }}></div>
        </div>

        {/* CSS Grid for the Collage */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Collage Item 1: Living */}
          <Link href="/preview/shop" className="group" style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', display: 'block', textDecoration: 'none', backgroundColor: '#f5f5f5' }}>
            <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80" alt="Living" className="group-hover:scale-110" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s ease' }} />
            <div className="group-hover:bg-black/40" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.15)', transition: 'background-color 0.4s ease' }}></div>
            
            {/* The "Shop Now" Overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h3 style={{ color: '#ffffff', fontSize: '24px', fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Living</h3>
              <span className="opacity-0 group-hover:opacity-100" style={{ color: '#ffffff', borderBottom: '2px solid #D4AF37', paddingBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', transition: 'opacity 0.4s ease' }}>Shop Now</span>
            </div>
          </Link>

          {/* Collage Item 2: Dining */}
          <Link href="/preview/shop" className="group" style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', display: 'block', textDecoration: 'none', backgroundColor: '#f5f5f5' }}>
            <img src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=800&q=80" alt="Dining" className="group-hover:scale-110" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s ease' }} />
            <div className="group-hover:bg-black/40" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.15)', transition: 'background-color 0.4s ease' }}></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h3 style={{ color: '#ffffff', fontSize: '24px', fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Dining</h3>
              <span className="opacity-0 group-hover:opacity-100" style={{ color: '#ffffff', borderBottom: '2px solid #D4AF37', paddingBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', transition: 'opacity 0.4s ease' }}>Shop Now</span>
            </div>
          </Link>

          {/* Collage Item 3: Bedroom */}
          <Link href="/preview/shop" className="group" style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', display: 'block', textDecoration: 'none', backgroundColor: '#f5f5f5' }}>
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" alt="Bedroom" className="group-hover:scale-110" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s ease' }} />
            <div className="group-hover:bg-black/40" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.15)', transition: 'background-color 0.4s ease' }}></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h3 style={{ color: '#ffffff', fontSize: '24px', fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Bedroom</h3>
              <span className="opacity-0 group-hover:opacity-100" style={{ color: '#ffffff', borderBottom: '2px solid #D4AF37', paddingBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', transition: 'opacity 0.4s ease' }}>Shop Now</span>
            </div>
          </Link>

        </div>
      </section>

      {/* 3. BRAND HIGHLIGHT SECTION (Editorial Lifestyle instead of stock products) */}
      <section style={{ width: '100%', backgroundColor: '#fafafa', padding: '100px 24px', borderTop: '1px solid #eaeaea' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '64px' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '11px', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '16px', fontWeight: 'bold' }}>Brand Highlight</h2>
            <h3 style={{ fontSize: '36px', fontFamily: 'serif', color: '#000', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>Nova Phoenix</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '2', marginBottom: '40px', maxWidth: '450px' }}>
              With over 50 years of design heritage, Nova Phoenix is renowned for creating bold and versatile collections. We blend sustainable materials with timeless British craftsmanship to curate spaces that feel instantly like home.
            </p>
            <Link href="/preview/shop" style={{ fontSize: '11px', color: '#000', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', textDecoration: 'none', borderBottom: '1px solid #000', paddingBottom: '4px', transition: 'color 0.3s ease' }}>
              Discover The Brand
            </Link>
          </div>

          <div style={{ flex: '2 1 600px', display: 'flex', gap: '24px' }}>
            {/* Editorial Image 1 */}
            <div style={{ flex: 1, aspectRatio: '3/4', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="Brand Editorial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Editorial Image 2 (Slightly staggered for a modern look) */}
            <div style={{ flex: 1, aspectRatio: '3/4', overflow: 'hidden', marginTop: '48px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80" alt="Brand Details" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}