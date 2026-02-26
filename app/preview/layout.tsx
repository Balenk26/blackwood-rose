import React from 'react';
import { CartProvider } from '../components/CartContext';

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}