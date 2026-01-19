"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        GadgetHeaven
      </Link>
      <div className="space-x-4">
        <Link href="/product" className="hover:text-blue-500">
          Products
        </Link>
        <Link href="/cart" className="hover:text-blue-500">
          Cart
        </Link>
        <Link href="/wishlist" className="hover:text-blue-500">
          Wishlist
        </Link>
      </div>
    </nav>
  );
}
