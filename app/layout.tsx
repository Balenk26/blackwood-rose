import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from './components/CartContext';

export const metadata: Metadata = {
  title: 'Blackwood & Rose',
  description: 'Luxury Furniture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#ffffff', color: '#000000', margin: 0, padding: 0, WebkitFontSmoothing: 'antialiased' }}>
        {/* We wrap the whole app in the Basket Brain */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}