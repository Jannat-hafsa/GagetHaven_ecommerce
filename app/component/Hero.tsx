export default function Hero() {
  return (
    <section className="bg-blue-500 text-white rounded-lg p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to GadgetHeaven
      </h1>
      <p className="mb-6 text-lg">
        Buy your favorite gadgets easily and safely online
      </p>
      <a
        href="/product"
        className="bg-white text-blue-500 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
      >
        Explore Products
      </a>
    </section>
  );
}
