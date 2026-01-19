"use client";
import { useState } from "react";
import CategorySection from "@/app/component/CategorySection";
import ProductCard from "@/app/component/ProductCard";
import products from "@/data/products.json";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // ফিল্টারিং লজিক
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <CategorySection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* গ্রিড লেআউট যেখানে কার্ডগুলো দেখাবে */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* যদি কোনো ডাটা না থাকে */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 font-medium">No products available in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}