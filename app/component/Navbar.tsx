"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
 
 

export default function Navbar() {
  const { cart } = useCart();
 


   

  // কার্টের মোট আইটেম সংখ্যা বের করা
  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-blue-600">
        GadgetHeaven
      </Link>
      
      <div className="space-x-6 flex items-center">
         

        <Link href="/cart" className="relative hover:text-blue-500 font-medium flex items-center gap-1">
          Cart
          { totalItems > 0 && (
            <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        <Link href="/Wishlist" className="hover:text-blue-500 font-medium">
          Wishlist
        </Link>
      </div>
    </nav>
  );
}