"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useUser, SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function AccountPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [activeTab, setActiveTab] = useState('profile');

  // If Clerk is still loading, show a clean loading state
  if (!isLoaded) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'sans-serif' }}>Loading your secure dashboard...</div>
      </div>
    );
  }

  // If the user isn't logged in, politely tell them to log in
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

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 100px 24px', display: 'flex', gap: '64px' }}>
        
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
        <div style={{ flexGrow: 1 }}>
          
          {activeTab === 'profile' && (
            <div>
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
            <div>
              <h2 style={{ fontSize: '18px', fontFamily: 'serif', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Order History</h2>
              <div style={{ padding: '48px', textAlign: 'center', backgroundColor: '#fafafa', border: '1px solid #eaeaea' }}>
                <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>You have no previous orders.</p>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <h2 style={{ fontSize: '18px', fontFamily: 'serif', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Saved Favourites</h2>
              <div style={{ padding: '48px', textAlign: 'center', backgroundColor: '#fafafa', border: '1px solid #eaeaea' }}>
                <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>You haven't saved any items yet.</p>
                <Link href="/preview/shop" style={{ display: 'inline-block', marginTop: '16px', color: '#D4AF37', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore the Collection</Link>
              </div>
            </div>
          )}

          {activeTab === 'viewed' && (
            <div>
              <h2 style={{ fontSize: '18px', fontFamily: 'serif', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Recently Viewed</h2>
              <div style={{ padding: '48px', textAlign: 'center', backgroundColor: '#fafafa', border: '1px solid #eaeaea' }}>
                <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your viewing history is empty.</p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}