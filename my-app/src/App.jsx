import { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-600">Our Products</h1>
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-stretch">
        {products.map((product) => (
          <section
            key={product.id}
            className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
          >
            <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-5" />
            <h1 className="text-2xl font-semibold text-gray-800 my-5">{product.title}</h1>
            <p className="mb-5 flex-grow">{product.description}</p>
            <h2 className="font-semibold mb-5">${product.price}</h2>
            <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
              Add To Cart
            </button>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Products;
