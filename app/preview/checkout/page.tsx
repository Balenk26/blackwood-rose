"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useCart } from '../../components/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [billingSame, setBillingSame] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const safeCart = cart || [];
  const safeTotal = Number(cartTotal || 0);

  if (!mounted) return null; // Prevents loading glitches while fetching from localStorage

  return (
    <div style={{ backgroundColor: '#fafafa', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '140px 24px 100px 24px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', color: '#999', marginBottom: '48px' }}>
          <Link href="/preview/shop" style={{ textDecoration: 'none', color: '#999' }}>Shop</Link>
          <span>/</span>
          <span style={{ color: '#000' }}>Checkout</span>
          <span>/</span>
          <span>Confirmation</span>
        </div>

        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          
          <div style={{ flex: '2 1 650px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            <div style={{ backgroundColor: '#fff', padding: '32px', border: '1px solid #eaeaea', textAlign: 'center' }}>
              <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#666', marginBottom: '24px' }}>Express Checkout</h2>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button style={{ flex: 1, padding: '16px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', borderRadius: '4px' }}> Pay</button>
                <button style={{ flex: 1, padding: '16px', backgroundColor: '#FFC439', color: '#000', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', borderRadius: '4px', fontStyle: 'italic' }}>PayPal</button>
                <button style={{ flex: 1, padding: '16px', backgroundColor: '#fff', color: '#000', border: '1px solid #000', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', borderRadius: '4px' }}>G Pay</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '32px 0 16px 0' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#eaeaea' }}></div>
                <span style={{ padding: '0 16px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#999' }}>Or continue below</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#eaeaea' }}></div>
              </div>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea' }}>
              <h2 style={{ fontSize: '16px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>1. Contact Information</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                <input type="email" placeholder="Email Address" style={{ padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                  <input type="checkbox" id="newsletter" defaultChecked style={{ accentColor: '#000' }} />
                  <label htmlFor="newsletter" style={{ fontSize: '12px', color: '#555' }}>Email me with news and exclusive offers</label>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea' }}>
              <h2 style={{ fontSize: '16px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>2. Shipping Address</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <select style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', backgroundColor: '#fff', outlineColor: '#000' }}>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>European Union</option>
                </select>
                <input type="text" placeholder="First Name" style={{ padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input type="text" placeholder="Last Name" style={{ padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input type="text" placeholder="Address (House No. & Street)" style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input type="text" placeholder="City" style={{ padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input type="text" placeholder="Postcode" style={{ padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input type="tel" placeholder="Phone (For delivery updates)" style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
              </div>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea' }}>
              <h2 style={{ fontSize: '16px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>3. Payment</h2>
              <p style={{ fontSize: '12px', color: '#666', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>All transactions are secure and encrypted.</p>
              
              <div style={{ border: '1px solid #000', borderRadius: '4px', overflow: 'hidden', marginBottom: '32px' }}>
                <div style={{ padding: '16px', backgroundColor: '#fafafa', borderBottom: '1px solid #eaeaea', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="radio" id="pay-card" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} style={{ accentColor: '#000' }} />
                  <label htmlFor="pay-card" style={{ fontSize: '14px', fontWeight: 'bold' }}>Credit Card</label>
                </div>
                
                {paymentMethod === 'card' && (
                  <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', backgroundColor: '#fff' }}>
                    <input type="text" placeholder="Card Number" style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                    <input type="text" placeholder="Expiration Date (MM/YY)" style={{ padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                    <input type="text" placeholder="Security Code (CVC)" style={{ padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                    <input type="text" placeholder="Name on Card" style={{ gridColumn: 'span 2', padding: '16px', border: '1px solid #d1d5db', fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                  </div>
                )}

                <div style={{ padding: '16px', backgroundColor: '#fafafa', borderTop: '1px solid #eaeaea', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="radio" id="pay-paypal" name="payment" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} style={{ accentColor: '#000' }} />
                  <label htmlFor="pay-paypal" style={{ fontSize: '14px', fontWeight: 'bold' }}>PayPal</label>
                </div>
              </div>

              <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '16px' }}>Billing Address</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: billingSame ? '1px solid #000' : '1px solid #eaeaea', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setBillingSame(true)}>
                  <input type="radio" checked={billingSame} readOnly style={{ accentColor: '#000' }} />
                  <span style={{ fontSize: '13px' }}>Same as shipping address</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: !billingSame ? '1px solid #000' : '1px solid #eaeaea', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setBillingSame(false)}>
                  <input type="radio" checked={!billingSame} readOnly style={{ accentColor: '#000' }} />
                  <span style={{ fontSize: '13px' }}>Use a different billing address</span>
                </div>
              </div>
              
              <button style={{ width: '100%', backgroundColor: '#000', color: '#fff', padding: '24px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Pay £{safeTotal.toLocaleString()} Securely
              </button>
            </div>

          </div>

          <div style={{ flex: '1 1 400px', position: 'sticky', top: '180px' }}>
            <div style={{ backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea' }}>
              <h2 style={{ fontSize: '16px', fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px' }}>Order Summary</h2>
              
              <div style={{ marginBottom: '32px', maxHeight: '350px', overflowY: 'auto', paddingRight: '12px' }}>
                {safeCart.length === 0 ? (
                  <p style={{ color: '#666', fontSize: '13px' }}>Your basket is empty.</p>
                ) : (
                  safeCart.map((item: any, index: number) => {
                    const safeName = item?.name || 'Luxury Item';
                    const safePrice = Number(item?.price) || 0;
                    const safeImage = item?.image || '';

                    return (
                      <div key={`checkout-cart-${index}`} style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ width: '64px', height: '85px', backgroundColor: '#f5f5f5', flexShrink: 0, position: 'relative' }}>
                          {safeImage && <img src={safeImage} alt={safeName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                          <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: '#666', color: '#fff', fontSize: '10px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>1</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                          <span style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{safeName}</span>
                          <span style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>£{safePrice.toLocaleString()}</span>
                          
                          {/* NEW REMOVE BUTTON (Passes exact index) */}
                          <button 
                            onClick={() => removeFromCart(index)} 
                            style={{ alignSelf: 'flex-start', background: 'none', border: 'none', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d9534f', cursor: 'pointer', padding: 0, fontWeight: 'bold' }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', borderTop: '1px solid #eaeaea', paddingTop: '32px' }}>
                <input type="text" placeholder="Gift card or discount code" style={{ flex: 1, padding: '14px', border: '1px solid #d1d5db', fontSize: '13px', outlineColor: '#000' }} />
                <button style={{ padding: '0 24px', backgroundColor: '#f5f5f5', border: '1px solid #d1d5db', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', cursor: 'pointer' }}>Apply</button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666' }}>Subtotal</span>
                  <span style={{ fontWeight: 'bold' }}>£{safeTotal.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666' }}>Shipping</span>
                  <span style={{ color: '#D4AF37', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.1em' }}>Complimentary White-Glove</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eaeaea', paddingTop: '24px', fontSize: '24px', fontFamily: 'serif', marginTop: '8px' }}>
                  <span>Total</span>
                  <span>£{safeTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '11px', color: '#999', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p>🔒 Secure 256-bit SSL Encryption</p>
              <p>✓ 10-Year Structural Guarantee on Upholstery</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}