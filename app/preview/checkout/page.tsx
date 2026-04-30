// app/preview/checkout/page.tsx
"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useCart } from '../../components/CartContext';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe safely on the frontend
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsProcessing(true);

    try {
      // Send the cart to our new backend API
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect the customer to the secure Stripe page
        window.location.href = data.url;
      } else {
        console.error("Something went wrong:", data.error);
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      setIsProcessing(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ fontSize: '32px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '48px', textAlign: 'center' }}>
          Secure Checkout
        </h1>

        {cart.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>Your basket is empty.</p>
        ) : (
          <div style={{ border: '1px solid #eaeaea', padding: '32px', backgroundColor: '#fafafa' }}>
            <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>Order Summary</h2>
            
            {cart.map((item: any, index: number) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px' }}>{item.name}</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>£{item.price.toLocaleString()}</span>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #eaeaea', fontWeight: 'bold', fontSize: '18px' }}>
              <span>Total</span>
              <span>£{cartTotal.toLocaleString()}</span>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={isProcessing}
              style={{ width: '100%', padding: '16px', backgroundColor: '#000000', color: '#ffffff', border: 'none', marginTop: '48px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', cursor: isProcessing ? 'wait' : 'pointer', opacity: isProcessing ? 0.7 : 1 }}
            >
              {isProcessing ? 'Connecting to Secure Server...' : 'Pay Securely with Stripe'}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}