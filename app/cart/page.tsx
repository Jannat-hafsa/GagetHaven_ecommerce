// app/cart/page.tsx
"use client";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 border-b pb-2">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-20 h-20 object-contain bg-gray-50 p-2 rounded" 
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                  <p className="text-blue-600 font-bold mt-1">${item.price}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-medium">Quantity: {item.quantity}</p>
                <p className="font-bold text-lg mt-1">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-8 bg-gray-50 p-6 rounded-lg text-right">
            <h2 className="text-xl text-gray-600">Total Amount:</h2>
            <p className="text-3xl font-black text-blue-600">
              ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
            <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}