"use client";
import products from "@/data/products.json";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export default function CategorySection({ selectedCategory, setSelectedCategory }: Props) {
  // ইউনিক ক্যাটাগরি বের করার লজিক
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="mt-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-6 py-2 rounded-full transition ${
            selectedCategory === "All" 
            ? "bg-blue-600 text-white shadow-lg" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full transition ${
              selectedCategory === cat 
              ? "bg-blue-600 text-white shadow-lg" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}