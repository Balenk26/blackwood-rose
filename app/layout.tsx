import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar'; // Fixed: Removed the curly braces to match default export

export const metadata: Metadata = {
  title: 'Blackwood & Rose',
  description: 'Luxury Furniture & Home Accessories',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
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