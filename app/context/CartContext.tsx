// app/context/CartContext.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: any) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ১ম বার পেজ লোড হলে LocalStorage থেকে ডাটা আনা
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // কার্ট চেঞ্জ হলেই LocalStorage-এ সেভ করা
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const exist = prevCart.find((i) => i.id === product.id);
      if (exist) {
        return prevCart.map((i) =>
          i.id === product.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};