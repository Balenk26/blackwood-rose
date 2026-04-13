"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void; // Upgraded to remove by exact list order
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // 1. LOADS CART FROM MEMORY WHEN PAGE OPENS
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('blackwood_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart");
      }
    }
  }, []);

  // 2. SAVES CART TO MEMORY EVERY TIME IT CHANGES
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('blackwood_cart', JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  // 3. BULLETPROOF REMOVE: Deletes the exact line item, not the product ID
  const removeFromCart = (indexToRemove: number) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // 4. FAILSAFE MATH: Guarantees the price is always treated as a number
  const cartTotal = cart.reduce((sum, item) => sum + (Number(item.price) || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}