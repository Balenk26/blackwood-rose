"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useCart } from '../../components/CartContext';

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');

  // DEFENSIVE FALLBACKS: Guarantees the page never crashes during Vercel's server build
  const safeCart = cart || [];
  const safeTotal = Number(cartTotal || 0);

  return (
    <div style={{ backgroundColor: '#fcfcfc', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '140px 24px 100px 24px' }}>
        <h1 style={{ fontSize: '32px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '40px', textAlign: 'center' }}>Secure Checkout</h1>
        
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          
          {/* LEFT COLUMN: Checkout Forms */}
          <div style={{ flex: '2 1 600px', backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            
            {/* Contact & Shipping */}
            <h2 style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid #eaeaea' }}>Contact & Shipping</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              <input type="email" placeholder="Email Address" style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
              <input type="text" placeholder="First Name" style={{ padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
              <input type="text" placeholder="Last Name" style={{ padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
              <input type="text" placeholder="Street Address" style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
              <input type="text" placeholder="City" style={{ padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
              <input type="text" placeholder="Postcode" style={{ padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
            </div>

            {/* Payment Method Selection */}
            <h2 style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid #eaeaea' }}>Payment Method</h2>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <button onClick={() => setPaymentMethod('card')} style={{ flex: 1, padding: '16px', border: paymentMethod === 'card' ? '2px solid #000' : '1px solid #ccc', backgroundColor: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>Credit Card</button>
              <button onClick={() => setPaymentMethod('apple')} style={{ flex: 1, padding: '16px', border: paymentMethod === 'apple' ? '2px solid #000' : '1px solid #ccc', backgroundColor: '#000', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>Apple Pay</button>
              <button onClick={() => setPaymentMethod('paypal')} style={{ flex: 1, padding: '16px', border: paymentMethod === 'paypal' ? '2px solid #000' : '1px solid #ccc', backgroundColor: '#FFC439', color: '#000', cursor: 'pointer', fontWeight: 'bold' }}>PayPal</button>
            </div>

            {/* Credit Card Form */}
            {paymentMethod === 'card' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
                <input type="text" placeholder="Card Number" style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
                <input type="text" placeholder="Expiration Date (MM/YY)" style={{ padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
                <input type="text" placeholder="Security Code (CVC)" style={{ padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
                <input type="text" placeholder="Name on Card" style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #ccc', fontSize: '13px', width: '100%', boxSizing: 'border-box' }} />
              </div>
            )}
            
            {/* Pay Button */}
            <button style={{ width: '100%', backgroundColor: '#000', color: '#fff', padding: '24px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
              {paymentMethod === 'apple' ? 'Pay with Apple Pay' : paymentMethod === 'paypal' ? 'Pay with PayPal' : `Pay £${safeTotal.toLocaleString()} Securely`}
            </button>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div style={{ flex: '1 1 350px', backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea' }}>
            <h2 style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px' }}>Order Summary</h2>
            
            <div style={{ marginBottom: '32px', maxHeight: '400px', overflowY: 'auto', paddingRight: '12px' }}>
              {safeCart.length === 0 ? (
                <p style={{ color: '#666', fontSize: '13px' }}>Your basket is empty.</p>
              ) : (
                safeCart.map((item: any, index: number) => {
                  const safeName = item?.name || 'Luxury Item';
                  const safePrice = Number(item?.price) || 0;
                  const safeImage = item?.image || '';

                  return (
                    <div key={index} style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                      <div style={{ width: '60px', height: '80px', backgroundColor: '#f5f5f5', flexShrink: 0 }}>
                        {safeImage && <img src={safeImage} alt={safeName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <span style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{safeName}</span>
                        <span style={{ fontSize: '12px', color: '#666' }}>£{safePrice.toLocaleString()}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Subtotal</span>
                <span>£{safeTotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Shipping</span>
                <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>Complimentary</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eaeaea', paddingTop: '24px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'serif' }}>
                <span>Total</span>
                <span>£{safeTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}