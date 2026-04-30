// app/preview/success/page.tsx
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '600px', margin: '100px auto', textAlign: 'center', padding: '0 24px' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'serif', marginBottom: '24px' }}>Thank You For Your Order</h1>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '48px' }}>
          Your payment was successful. Our artisans will begin preparing your luxury furniture immediately. You will receive a confirmation email shortly.
        </p>
        <Link href="/preview/shop" style={{ padding: '16px 32px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '12px', fontWeight: 'bold' }}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}