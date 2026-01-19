"use client";

import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="bg-white border shadow-sm rounded-xl p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain"
      />

      <span className="text-xs text-blue-500">{product.category}</span>
      <h2 className="font-bold">{product.title}</h2>
      <p className="text-lg font-bold">${product.price}</p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-blue-600 text-white py-2 rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="flex-1 bg-blue-600 text-white py-2 rounded"
        >
          Wishlist
        </button>

     
      </div>
    </div>
  );
}
