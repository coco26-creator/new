import { useState } from 'react';

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    { id: 1, name: "Sunny Reserve Brandy", category: "brandy", age: "12 Years", desc: "Rich oak-aged with dried fruit notes." },
    { id: 2, name: "Highland Gold Whisky", category: "whisky", age: "15 Years", desc: "Smooth, smoky, and complex." },
    { id: 3, name: "Crimson Vine Wine", category: "wine", age: "2022", desc: "Bold red from select vineyards." },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section
      id="products"
      className="py-20 px-6 bg-red-900 bg-opacity-20"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">Our Collection</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'brandy', 'whisky', 'wine'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full capitalize transition ${
                activeCategory === cat
                  ? 'bg-yellow-400 text-black'
                  : 'bg-white bg-opacity-20 hover:bg-opacity-30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-black bg-opacity-40 p-6 rounded-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{product.name}</h3>
              <p className="text-yellow-400 mb-2">{product.age}</p>
              <p className="text-gray-300">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
