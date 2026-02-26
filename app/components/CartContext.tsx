"use client";

import React, { createContext, useContext, useState } from 'react';

// 1. Create the blank memory bank
const CartContext = createContext<any>(null);

// 2. Create the "Provider" that wraps the website and remembers the items
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart((prev) => [...prev, product]); // Adds the new item to the existing list
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. A quick shortcut hook so our buttons can talk to the cart easily
export function useCart() {
  return useContext(CartContext);
}