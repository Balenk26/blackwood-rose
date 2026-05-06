"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useUser, SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function AccountPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [activeTab, setActiveTab] = useState('orders'); // Changed default tab to orders so you can see it instantly!

  // If Clerk is still loading, show a clean loading state
  if (!isLoaded) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '11px' }}>Loading your secure dashboard...</div>
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
              
              {/* MOCK ORDER 1: CURRENTLY IN TRANSIT */}
              <div style={{ border: '1px solid #eaeaea', marginBottom: '32px', backgroundColor: '#fff' }}>
                <div style={{ backgroundColor: '#fafafa', padding: '16px 24px', borderBottom: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px 0' }}>Order Placed</p>
                    <p style={{ fontSize: '12px', fontWeight: 'bold', margin: 0 }}>May 2, 2026</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px 0' }}>Total</p>
                    <p style={{ fontSize: '12px', fontWeight: 'bold', margin: 0 }}>£1,295</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px 0' }}>Order #</p>
                    <p style={{ fontSize: '12px', fontWeight: 'bold', margin: 0 }}>BWR-8934-22</p>
                  </div>
                </div>
                
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px 0', color: '#D4AF37' }}>Status: Shipped</h3>
                      <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Estimated Delivery: May 8, 2026</p>
                    </div>
                    <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', cursor: 'pointer' }}>Track Package</button>
                  </div>

                  {/* Visual Progress Bar */}
                  <div style={{ width: '100%', height: '4px', backgroundColor: '#eaeaea', marginBottom: '40px', position: 'relative' }}>
                    {/* The Fill */}
                    <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '66%', backgroundColor: '#D4AF37' }}></div>
                    
                    {/* The Dots */}
                    <div style={{ position: 'absolute', top: '-4px', left: '0%', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#D4AF37' }}></div>
                    <div style={{ position: 'absolute', top: '-4px', left: '33%', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#D4AF37' }}></div>
                    {/* Current Stage Dot (Slightly larger/outlined) */}
                    <div style={{ position: 'absolute', top: '-6px', left: '66%', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#D4AF37', border: '3px solid #fff', boxShadow: '0 0 0 1px #D4AF37' }}></div>
                    <div style={{ position: 'absolute', top: '-4px', right: '0%', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eaeaea' }}></div>
                    
                    {/* The Labels */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', fontSize: '9px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      <span style={{ width: '25%', textAlign: 'left' }}>Ordered</span>
                      <span style={{ width: '25%', textAlign: 'center' }}>Processing</span>
                      <span style={{ width: '25%', textAlign: 'center', color: '#000', fontWeight: 'bold' }}>Shipped</span>
                      <span style={{ width: '25%', textAlign: 'right' }}>Delivered</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid #eaeaea', paddingTop: '24px' }}>
                    <img src="/haldon-table-1.jpg" alt="Item" style={{ width: '80px', height: '80px', objectFit: 'cover', backgroundColor: '#f5f5f5' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px 0' }}>Haldon Collection Large Dining Table</p>
                      <p style={{ fontSize: '11px', color: '#666', margin: 0 }}>Qty: 1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOCK ORDER 2: DELIVERED PREVIOUSLY */}
              <div style={{ border: '1px solid #eaeaea', backgroundColor: '#fff', opacity: 0.7 }}>
                <div style={{ backgroundColor: '#fafafa', padding: '16px 24px', borderBottom: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px 0' }}>Order Placed</p>
                    <p style={{ fontSize: '12px', fontWeight: 'bold', margin: 0 }}>April 15, 2026</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px 0' }}>Total</p>
                    <p style={{ fontSize: '12px', fontWeight: 'bold', margin: 0 }}>£450</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px 0' }}>Order #</p>
                    <p style={{ fontSize: '12px', fontWeight: 'bold', margin: 0 }}>BWR-7210-09</p>
                  </div>
                </div>
                
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div>
                      <h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px 0' }}>Status: Delivered</h3>
                      <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Delivered on April 21, 2026</p>
                    </div>
                    <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#000', border: '1px solid #000', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', cursor: 'pointer' }}>View Invoice</button>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid #eaeaea', paddingTop: '24px' }}>
                    <img src="/lennox-small-sideboard-1.jpg" alt="Item" style={{ width: '80px', height: '80px', objectFit: 'cover', backgroundColor: '#f5f5f5' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px 0' }}>Lennox Black 2-Door Small Sideboard</p>
                      <p style={{ fontSize: '11px', color: '#666', margin: 0 }}>Qty: 1</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'favorites' && (
            <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
              <h2 style={{ fontSize: '18px', fontFamily: 'serif', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Saved Favourites</h2>
              <div style={{ padding: '48px', textAlign: 'center', backgroundColor: '#fafafa', border: '1px solid #eaeaea' }}>
                <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>You haven't saved any items yet.</p>
                <Link href="/preview/shop" style={{ display: 'inline-block', marginTop: '16px', color: '#D4AF37', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore the Collection</Link>
              </div>
            </div>
          )}

          {activeTab === 'viewed' && (
            <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
              <h2 style={{ fontSize: '18px', fontFamily: 'serif', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Recently Viewed</h2>
              <div style={{ padding: '48px', textAlign: 'center', backgroundColor: '#fafafa', border: '1px solid #eaeaea' }}>
                <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your viewing history is empty.</p>
              </div>
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