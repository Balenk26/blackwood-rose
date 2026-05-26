import './globals.css';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from '@/components/CartContext';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Blackwood & Rose',
  description: 'Luxury Furniture & Home Accessories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="bg-white text-black m-0 p-0 antialiased" suppressHydrationWarning>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}