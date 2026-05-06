// app/preview/account/page.tsx
"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Navbar from '../../components/Navbar';
import { useUser, SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { products } from '../../data'; // We import data to match saved IDs

function AccountDashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const searchParams = useSearchParams();
  
  const initialTab = searchParams.get('tab') || 'profile';
  const [activeTab, setActiveTab] = useState(initialTab);
  
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  useEffect(() => {
    // Load Recently Viewed
    const savedViews = localStorage.getItem('recentlyViewed');
    if (savedViews) {
      setRecentlyViewed(JSON.parse(savedViews));
    }

    // Load Favorites
    const savedFavs = localStorage.getItem('favorites');
    if (savedFavs) {
      const favIds = JSON.parse(savedFavs);
      const favProducts = products.filter(p => favIds.includes(p.id));
      setFavorites(favProducts);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '11px' }}>Loading your secure dashboard...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        <Navbar />
        <div style={{ maxWidth: '600px', margin: '100px auto', textAlign: 'center', padding: '48px' }}>
          <h1 style={{ fontSize: '32px', fontFamily: 'serif', marginBottom: '24px' }}>Please Sign In</h1>
          <p style={{ color: '#666', marginBottom: '32px' }}>You must be logged in to view your account dashboard.</p>
          <Link href="/preview/shop" style={{ padding: '12px 24px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '11px', fontWeight: 'bold' }}>
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ padding: '48px 24px', textAlign: 'center', borderBottom: '1px solid #eaeaea', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
          My Account
        </h1>
        <p style={{ marginTop: '16px', color: '#666', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Welcome back, {user?.firstName || 'Guest'}
        </p>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 100px 24px', display: 'flex', gap: '64px', flexDirection: 'row', flexWrap: 'wrap' }}>
        
        {/* SIDEBAR NAVIGATION */}
        <aside style={{ width: '250px', flexShrink: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button 
              onClick={() => setActiveTab('profile')}
              style={{ textAlign: 'left', padding: '16px', backgroundColor: activeTab === 'profile' ? '#f5f5f5' : 'transparent', border: 'none', borderLeft: activeTab === 'profile' ? '2px solid #D4AF37' : '2px solid transparent', cursor: 'pointer', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', transition: 'all 0.2s' }}
            >
              Profile Details
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              style={{ textAlign: 'left', padding: '16px', backgroundColor: activeTab === 'orders' ? '#f5f5f5' : 'transparent', border: 'none', borderLeft: activeTab === 'orders' ? '2px solid #D4AF37' : '2px solid transparent', cursor: 'pointer', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', transition: 'all 0.2s' }}
            >
              Order History
            </button>
            <button 
              onClick={() => setActiveTab('favorites')}
              style={{ textAlign: 'left', padding: '16px', backgroundColor: activeTab === 'favorites' ? '#f5f5f5' : 'transparent', border: 'none', borderLeft: activeTab === 'favorites' ? '2px solid #D4AF37' : '2px solid transparent', cursor: 'pointer', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', transition: 'all 0.2s' }}
            >
              Saved Favourites
            </button>
            <button 
              onClick={() => setActiveTab('viewed')}
              style={{ textAlign: 'left', padding: '16px', backgroundColor: activeTab === 'viewed' ? '#f5f5f5' : 'transparent', border: 'none', borderLeft: activeTab === 'viewed' ? '2px solid #D4AF37' : '2px solid transparent', cursor: 'pointer', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', transition: 'all 0.2s' }}
            >
              Recently Viewed
            </button>
            
            <div style={{ marginTop: '32px', paddingTop: '16px', borderTop: '1px solid #eaeaea' }}>
              <SignOutButton redirectUrl="/preview/shop">
                <button style={{ textAlign: 'left', padding: '16px', width: '100%', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d9534f', fontWeight: 'bold' }}>
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          </div>
        </aside>

        {/* DASHBOARD CONTENT AREA */}
        <div style={{ flexGrow: 1, minWidth: '300px' }}>
          
          {activeTab === 'profile' && (
            <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
              <h2 style={{ fontSize: '18px', fontFamily: 'serif', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Profile Details</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
                <img src={user?.imageUrl} alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #eaeaea' }} />
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>{user?.fullName}</p>
                  <p style={{ fontSize: '12px', color: '#666' }}>{user?.primaryEmailAddress?.emailAddress}</p>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.6' }}>
                Secure profile management is handled directly through your authentication provider to ensure maximum security of your personal data.
              </p>
            </div>
          )}

          {activeTab === 'orders' && (
            <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
              <h2 style={{ fontSize: '18px', fontFamily: 'serif', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Order History & Tracking</h2>
              <div style={{ padding: '48px', textAlign: 'center', backgroundColor: '#fafafa', border: '1px solid #eaeaea' }}>
                <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>You have no previous orders.</p>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
              <h2 style={{ fontSize: '18px', fontFamily: 'serif', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Saved Favourites</h2>
              
              {favorites.length === 0 ? (
                <div style={{ padding: '48px', textAlign: 'center', backgroundColor: '#fafafa', border: '1px solid #eaeaea' }}>
                  <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>You haven't saved any items yet.</p>
                  <Link href="/preview/shop" style={{ display: 'inline-block', marginTop: '16px', color: '#D4AF37', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore the Collection</Link>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '32px' }}>
                  {favorites.map((item, index) => (
                    <Link href={`/preview/shop/${item.id}`} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ width: '100%', aspectRatio: '4/5', backgroundColor: '#f5f5f5', marginBottom: '16px' }}>
                        <img src={item.image || item.gallery?.[0]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <h3 style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px 0', lineHeight: '1.4' }}>{item.name}</h3>
                      <p style={{ fontSize: '11px', color: '#D4AF37', margin: 0, fontWeight: 'bold' }}>£{item.price.toLocaleString()}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'viewed' && (
            <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
              <h2 style={{ fontSize: '18px', fontFamily: 'serif', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Recently Viewed</h2>
              
              {recentlyViewed.length === 0 ? (
                <div style={{ padding: '48px', textAlign: 'center', backgroundColor: '#fafafa', border: '1px solid #eaeaea' }}>
                  <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your viewing history is empty.</p>
                  <Link href="/preview/shop" style={{ display: 'inline-block', marginTop: '16px', color: '#D4AF37', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore the Collection</Link>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '32px' }}>
                  {recentlyViewed.map((item, index) => (
                    <Link href={`/preview/shop/${item.id}`} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ width: '100%', aspectRatio: '4/5', backgroundColor: '#f5f5f5', marginBottom: '16px' }}>
                        <img src={item.image || item.gallery?.[0]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <h3 style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px 0', lineHeight: '1.4' }}>{item.name}</h3>
                      <p style={{ fontSize: '11px', color: '#D4AF37', margin: 0, fontWeight: 'bold' }}>£{item.price.toLocaleString()}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </main>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center', fontFamily: 'sans-serif' }}>Loading...</div>}>
      <AccountDashboard />
    </Suspense>
  );
}