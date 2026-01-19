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
  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-48 relative overflow-hidden rounded-lg mb-4 bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-xs font-medium text-blue-500 uppercase tracking-wider">
        {product.category}
      </span>
      <h2 className="text-lg font-bold text-gray-800 mt-1 truncate">{product.title}</h2>
      <p className="text-xl font-black text-gray-900 mt-2">${product.price}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all">
        Add to Cart
      </button>
    </div>
  );
}