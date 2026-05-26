"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';
import { SignInButton, Show, UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const { user } = useUser(); // Grab the logged-in user's details from Clerk
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  
  const { cart, cartTotal, removeFromCart } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLLIElement>(null);
  const [mounted, setMounted] = useState(false);

  // Check if the logged-in user is explicitly Sonia
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'sonia@blackwoodandrose.com';

  useEffect(() => {
    setMounted(true);
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
      if (collectionsRef.current && !collectionsRef.current.contains(event.target as Node)) {
        setIsCollectionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .nav-logo-container { max-width: 280px !important; overflow: visible !important; }
          .nav-logo-container img { transform: scale(2.2) !important; }
          .nav-top-container { display: flex !important; justify-content: center !important; position: relative !important; padding: 0 !important; height: 140px !important; overflow: visible !important; }
          .nav-left-col { position: absolute !important; left: 16px !important; width: auto !important; z-index: 60; }
          .nav-right-col { position: absolute !important; right: 16px !important; width: auto !important; position: relative !important; z-index: 60; }
          .nav-center-col { width: 55% !important; display: flex !important; justify-content: center !important; height: 100% !important; overflow: visible !important; }

          /* Adjusted for 7 menu items */
          .mobile-bottom-row ul { 
            gap: 0.2rem !important; 
            padding: 0 8px !important; 
            justify-content: space-between !important; 
            flex-wrap: nowrap !important;
          }
          .mobile-bottom-row ul li, .mobile-bottom-row ul li a, .mobile-bottom-row ul li div { 
            font-size: 7.5px !important; 
            letter-spacing: 0.02em !important; 
            flex-shrink: 1 !important; 
          }
          .mobile-bottom-row ul::-webkit-scrollbar { display: none; }
          
          .cart-dropdown { 
            position: fixed !important;
            top: 140px !important;
            right: 0 !important;
            width: 100vw !important; 
            max-width: 100vw !important; 
            box-sizing: border-box !important;
            z-index: 99999 !important;
          }
          
          .collections-dropdown {
            position: fixed !important;
            top: 195px !important;
            left: 0 !important;
            width: 100vw !important;
            transform: none !important;
            background-color: rgba(0,0,0,0.98) !important;
            border: none !important;
            border-bottom: 1px solid #333 !important;
            z-index: 99999 !important;
          }
        }
      `}} />

      <header className="w-full fixed top-0 left-0 flex flex-col" style={{ backgroundColor: '#000000', color: '#D4AF37', zIndex: 50, borderBottom: '1px solid #333333', overflow: 'visible' }}>
        
        <div className="nav-top-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1600px', margin: '0 auto', height: '140px', padding: '0 24px', overflow: 'visible' }}>
          
          <div className="nav-left-col" style={{ width: '120px', display: 'flex', justifyContent: 'flex-start' }}>
            <button style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>

          {/* Absolute Overflow Center Container */}
          <div className="nav-center-col" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', overflow: 'visible' }}>
            <Link href="/preview" className="nav-logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto', height: '100%', overflow: 'visible' }}>
              <img 
                src="/logo.png" 
                alt="Blackwood & Rose Logo" 
                style={{ 
                  objectFit: 'contain', 
                  height: '140px',          // Forces image frame to match header row height
                  width: 'auto', 
                  display: 'block',
                  transform: 'scale(3.2)',  // Hardware bypass: Multiplies the size by over 3x to crush empty margins
                  transformOrigin: 'center'
                }} 
              />
            </Link>
          </div>

          <div className="nav-right-col" style={{ width: '120px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px', position: 'relative' }} ref={cartRef}>
            
            <WithAuthGates />
            
            <button onClick={() => setIsCartOpen(!isCartOpen)} style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer', position: 'relative', padding: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
              <span style={{ position: 'absolute', bottom: '-6px', right: '-8px', backgroundColor: '#ffffff', color: '#000000', fontSize: '10px', fontWeight: 'bold', height: '18px', width: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {mounted ? cart.length : 0}
              </span>
            </button>

            {isCartOpen && (
              <div className="cart-dropdown" style={{ position: 'absolute', top: '100%', right: '0', marginTop: '30px', backgroundColor: '#ffffff', border: '1px solid #eaeaea', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)', padding: '24px', color: '#000', textAlign: 'left', cursor: 'default' }}>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', borderBottom: '1px solid #eaeaea', paddingBottom: '16px', margin: '0 0 16px 0' }}>Your Basket</h4>
                
                {!cart || cart.length === 0 ? (
                  <p style={{ fontSize: '12px', color: '#666', textAlign: 'center', margin: '32px 0' }}>Your basket is empty.</p>
                ) : (
                  <div style={{ maxHeight: '50vh', overflowY: 'auto', overflowX: 'hidden' }}>
                    {cart.map((item: any, index: number) => {
                      const safeName = item?.name || 'Luxury Item';
                      const safePrice = Number(item?.price) || 0;
                      const safeImage = item?.image || '';

                      return (
                        <div key={`nav-cart-${index}`} style={{ display: 'flex', gap: '16px', marginBottom: '16px', borderBottom: '1px solid #fafafa', paddingBottom: '16px' }}>
                          {safeImage && <img src={safeImage} alt={safeName} style={{ width: '60px', height: '80px', objectFit: 'cover', flexShrink: 0 }} />}
                          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                            <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: '1.4', wordWrap: 'break-word', whiteSpace: 'normal' }}>{safeName}</span>
                            <span style={{ fontSize: '10px', color: '#D4AF37', marginTop: '4px', fontWeight: 'bold' }}>£{safePrice.toLocaleString()}</span>
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); removeFromCart(index); }} style={{ marginTop: 'auto', alignSelf: 'flex-start', background: 'none', border: 'none', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d9534f', cursor: 'pointer', padding: 0, fontWeight: 'bold' }}>Remove</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {cart && cart.length > 0 && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #eaeaea' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontWeight: 'bold' }}>
                      <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total</span>
                      <span style={{ fontSize: '16px', fontFamily: 'serif' }}>£{Number(cartTotal || 0).toLocaleString()}</span>
                    </div>
                    <Link href="/preview/checkout" onClick={() => setIsCartOpen(false)} style={{ display: 'block', width: '100%', backgroundColor: '#000000', color: '#ffffff', textAlign: 'center', padding: '16px 0', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', textDecoration: 'none' }}>Proceed to Checkout</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mobile-bottom-row" style={{ width: '100%', height: '55px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #333333' }}>
          <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '1200px', gap: '3rem', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0, padding: 0, listStyle: 'none', height: '100%' }}>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}><Link href="/preview/shop" style={{ textDecoration: 'none', color: '#D4AF37' }}>All</Link></li>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}><Link href="/preview/shop?category=living" style={{ textDecoration: 'none', color: '#D4AF37' }}>Living</Link></li>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}><Link href="/preview/shop?category=dining" style={{ textDecoration: 'none', color: '#D4AF37' }}>Dining</Link></li>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}><Link href="/preview/shop?category=bedroom" style={{ textDecoration: 'none', color: '#D4AF37' }}>Bedroom</Link></li>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}><Link href="/preview/shop?category=upholstery" style={{ textDecoration: 'none', color: '#D4AF37' }}>Upholstery</Link></li>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}><Link href="/preview/shop?category=outdoor" style={{ textDecoration: 'none', color: '#D4AF37' }}>Outdoor</Link></li>
            
            <li 
              ref={collectionsRef}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={(e) => { e.preventDefault(); setIsCollectionsOpen(!isCollectionsOpen); }}
            >
              <div style={{ color: '#D4AF37', fontWeight: 'bold' }}>COLLECTIONS</div>
              
              {isCollectionsOpen && (
                <div className="collections-dropdown" style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#000', border: '1px solid #333', padding: '16px 24px', minWidth: '180px', display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 100, textAlign: 'center' }}>
                  <Link href="/preview/shop?collection=delphine" onClick={(e) => { e.stopPropagation(); setIsCollectionsOpen(false); }} style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'color 0.2s', display: 'block' }}>Delphine Collection</Link>
                  <Link href="/preview/shop?collection=reed" onClick={(e) => { e.stopPropagation(); setIsCollectionsOpen(false); }} style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'color 0.2s', display: 'block' }}>Reed Collection</Link>
                  <Link href="/preview/shop?collection=haldon" onClick={(e) => { e.stopPropagation(); setIsCollectionsOpen(false); }} style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'color 0.2s', display: 'block' }}>Haldon Collection</Link>
                  <Link href="/preview/shop?collection=lennox" onClick={(e) => { e.stopPropagation(); setIsCollectionsOpen(false); }} style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'color 0.2s', display: 'block' }}>Lennox Collection</Link>
                  <Link href="/preview/shop?collection=rutland" onClick={(e) => { e.stopPropagation(); setIsCollectionsOpen(false); }} style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'color 0.2s', display: 'block' }}>Rutland Collection</Link>
                  <Link href="/preview/shop?collection=camden" onClick={(e) => { e.stopPropagation(); setIsCollectionsOpen(false); }} style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'color 0.2s', display: 'block' }}>Camden Collection</Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </header>

      <div style={{ height: '195px', width: '100%', backgroundColor: '#ffffff' }}></div>
    </>
  );

  function WithAuthGates() {
    return (
      <Show 
        when="signed-in" 
        fallback={
          <SignInButton mode="modal" fallbackRedirectUrl="/preview/account">
            <button style={{ color: '#D4AF37', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </button>
          </SignInButton>
        }
      >
        <UserButton>
          <UserButton.MenuItems>
            {isAdmin && (
              <UserButton.Link label="Admin Dashboard" href="/admin" labelIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>} />
            )}
            <UserButton.Link label="Orders & Tracking" href="/preview/account?tab=orders" labelIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.25v10.5A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25V8.25M12 2.25v10.5m0 0l-3-3m3 3l3-3" /></svg>} />
            <UserButton.Link label="Recently Viewed" href="/preview/account?tab=viewed" labelIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
            <UserButton.Link label="Saved Favourites" href="/preview/account?tab=favorites" labelIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>} />
          </UserButton.MenuItems>
        </UserButton>
      </Show>
    );
  }
}