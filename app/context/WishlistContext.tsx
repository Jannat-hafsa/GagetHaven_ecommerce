"use client";

import { createContext, useContext, useState } from "react";

export interface WishlistItem {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    const exist = wishlist.find((i) => i.id === item.id);
    if (!exist) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be inside WishlistProvider");
  return context;
};
