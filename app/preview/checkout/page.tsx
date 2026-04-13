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

  // 1. STATE FOR FORM DATA
  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', postcode: '',
    cardNumber: '', expiry: '', cvc: '', cardName: ''
  });

  // 2. STATE FOR ERRORS & LOADING
  const [errors, setErrors] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => setMounted(true), []);

  const safeCart = cart || [];
  const safeTotal = Number(cartTotal || 0);

  // HANDLE TYPING IN INPUTS
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Remove the red error box once they start typing
    if (errors.includes(e.target.name)) {
      setErrors(errors.filter(err => err !== e.target.name));
    }
  };

  // 3. THE "PAY SECURELY" BUTTON LOGIC
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check which fields are empty
    let newErrors: string[] = [];
    
    // Always check shipping info
    if (!formData.email) newErrors.push('email');
    if (!formData.firstName) newErrors.push('firstName');
    if (!formData.lastName) newErrors.push('lastName');
    if (!formData.address) newErrors.push('address');
    if (!formData.city) newErrors.push('city');
    if (!formData.postcode) newErrors.push('postcode');

    // Only check credit card info if "Card" is selected
    if (paymentMethod === 'card') {
      if (!formData.cardNumber) newErrors.push('cardNumber');
      if (!formData.expiry) newErrors.push('expiry');
      if (!formData.cvc) newErrors.push('cvc');
      if (!formData.cardName) newErrors.push('cardName');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors); // This triggers the red borders
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll up to show errors
      return;
    }

    // IF NO ERRORS: Simulate contacting Stripe/PayPal
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert(`SUCCESS! In a live environment, this would securely send the data to Stripe/PayPal to charge £${safeTotal.toLocaleString()}.`);
      // Here is where we will eventually redirect them to a "Thank You" page and clear the cart!
    }, 2000);
  };

  if (!mounted) return null;

  // HELPER FUNCTION FOR RED BORDERS
  const getBorderStyle = (fieldName: string) => {
    return errors.includes(fieldName) ? '1px solid #d9534f' : '1px solid #d1d5db';
  };

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

        {errors.length > 0 && (
          <div style={{ backgroundColor: '#fff3f3', color: '#d9534f', padding: '16px', border: '1px solid #d9534f', marginBottom: '32px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>
            Please fill out all required fields highlighted in red below.
          </div>
        )}

        <form onSubmit={handleCheckout} style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          
          <div style={{ flex: '2 1 650px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Express Checkout (Visual Only) */}
            <div style={{ backgroundColor: '#fff', padding: '32px', border: '1px solid #eaeaea', textAlign: 'center' }}>
              <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#666', marginBottom: '24px' }}>Express Checkout</h2>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button type="button" style={{ flex: 1, padding: '16px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', borderRadius: '4px' }}> Pay</button>
                <button type="button" style={{ flex: 1, padding: '16px', backgroundColor: '#FFC439', color: '#000', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', borderRadius: '4px', fontStyle: 'italic' }}>PayPal</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '32px 0 16px 0' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#eaeaea' }}></div>
                <span style={{ padding: '0 16px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#999' }}>Or continue below</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#eaeaea' }}></div>
              </div>
            </div>

            {/* Contact & Shipping */}
            <div style={{ backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea' }}>
              <h2 style={{ fontSize: '16px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>1. Contact & Shipping</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email Address" style={{ gridColumn: 'span 2', padding: '16px', border: getBorderStyle('email'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" placeholder="First Name" style={{ padding: '16px', border: getBorderStyle('firstName'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" placeholder="Last Name" style={{ padding: '16px', border: getBorderStyle('lastName'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input name="address" value={formData.address} onChange={handleInputChange} type="text" placeholder="Address (House No. & Street)" style={{ gridColumn: 'span 2', padding: '16px', border: getBorderStyle('address'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input name="city" value={formData.city} onChange={handleInputChange} type="text" placeholder="City" style={{ padding: '16px', border: getBorderStyle('city'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                <input name="postcode" value={formData.postcode} onChange={handleInputChange} type="text" placeholder="Postcode" style={{ padding: '16px', border: getBorderStyle('postcode'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
              </div>
            </div>

            {/* Payment Method */}
            <div style={{ backgroundColor: '#fff', padding: '40px', border: '1px solid #eaeaea' }}>
              <h2 style={{ fontSize: '16px', fontFamily: 'serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>2. Payment</h2>
              <p style={{ fontSize: '12px', color: '#666', marginBottom: '24px', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>All transactions are secure and encrypted.</p>
              
              <div style={{ border: '1px solid #000', borderRadius: '4px', overflow: 'hidden', marginBottom: '32px' }}>
                <div style={{ padding: '16px', backgroundColor: '#fafafa', borderBottom: '1px solid #eaeaea', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="radio" id="pay-card" checked={paymentMethod === 'card'} onChange={() => { setPaymentMethod('card'); setErrors([]); }} style={{ accentColor: '#000' }} />
                  <label htmlFor="pay-card" style={{ fontSize: '14px', fontWeight: 'bold' }}>Credit Card</label>
                </div>
                
                {paymentMethod === 'card' && (
                  <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', backgroundColor: '#fff' }}>
                    <input name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} type="text" placeholder="Card Number" style={{ gridColumn: 'span 2', padding: '16px', border: getBorderStyle('cardNumber'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                    <input name="expiry" value={formData.expiry} onChange={handleInputChange} type="text" placeholder="Expiration Date (MM/YY)" style={{ padding: '16px', border: getBorderStyle('expiry'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                    <input name="cvc" value={formData.cvc} onChange={handleInputChange} type="text" placeholder="Security Code (CVC)" style={{ padding: '16px', border: getBorderStyle('cvc'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                    <input name="cardName" value={formData.cardName} onChange={handleInputChange} type="text" placeholder="Name on Card" style={{ gridColumn: 'span 2', padding: '16px', border: getBorderStyle('cardName'), fontSize: '13px', width: '100%', boxSizing: 'border-box', outlineColor: '#000' }} />
                  </div>
                )}

                <div style={{ padding: '16px', backgroundColor: '#fafafa', borderTop: '1px solid #eaeaea', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="radio" id="pay-paypal" checked={paymentMethod === 'paypal'} onChange={() => { setPaymentMethod('paypal'); setErrors([]); }} style={{ accentColor: '#000' }} />
                  <label htmlFor="pay-paypal" style={{ fontSize: '14px', fontWeight: 'bold' }}>PayPal (Redirect)</label>
                </div>
              </div>
              
              <button disabled={safeCart.length === 0 || isProcessing} type="submit" style={{ width: '100%', backgroundColor: safeCart.length === 0 ? '#ccc' : '#000', color: '#fff', padding: '24px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', border: 'none', cursor: safeCart.length === 0 ? 'not-allowed' : 'pointer' }}>
                {isProcessing ? 'Processing...' : paymentMethod === 'paypal' ? 'Proceed to PayPal' : `Pay £${safeTotal.toLocaleString()} Securely`}
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Order Summary */}
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
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          {safeImage && <img src={safeImage} alt={safeName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                          <span style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{safeName}</span>
                          <span style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>£{safePrice.toLocaleString()}</span>
                          <button type="button" onClick={() => removeFromCart(index)} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d9534f', cursor: 'pointer', padding: 0, fontWeight: 'bold' }}>Remove</button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px', borderTop: '1px solid #eaeaea', paddingTop: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666' }}>Subtotal</span>
                  <span style={{ fontWeight: 'bold' }}>£{safeTotal.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eaeaea', paddingTop: '24px', fontSize: '24px', fontFamily: 'serif', marginTop: '8px' }}>
                  <span>Total</span>
                  <span>£{safeTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}