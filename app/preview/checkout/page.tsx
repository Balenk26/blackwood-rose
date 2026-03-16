import React from 'react';
import Navbar from '../../components/Navbar';

export default function CheckoutPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      <div style={{ padding: '100px 24px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>Secure Checkout</h1>
        <p style={{ color: '#666', letterSpacing: '0.05em', lineHeight: '1.8' }}>
          This is where your secure payment gateway (Stripe or PayPal) will be integrated when the store goes live.
        </p>
      </div>
    </div>
  );
}