"use client";

import { useWishlist } from "@/app/context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 && (
        <p className="text-gray-500">No items in wishlist</p>
      )}

      {wishlist.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 rounded mb-4"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} className="w-20 h-20 object-cover" />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>${item.price}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromWishlist(item.id)}
            className="text-red-500 font-semibold"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
