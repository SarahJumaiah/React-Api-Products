import { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700 font-medium">{product.price} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
