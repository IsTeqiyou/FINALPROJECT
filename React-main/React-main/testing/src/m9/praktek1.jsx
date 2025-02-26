import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Produk A",
    price: 20000,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Produk B",
    price: 30000,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Produk C",
    price: 50000,
    image: "https://via.placeholder.com/300x200",
  },
];

const Card = ({ product, quantity, setQuantity }) => {
  const handleIncrease = () =>
    setQuantity((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));

  const handleDecrease = () =>
    setQuantity((prev) => ({
      ...prev,
      [product.id]: Math.max((prev[product.id] || 0) - 1, 0),
    }));

  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-xs mx-auto bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
      <p className="text-gray-600 text-sm">
        Harga: <span className="font-semibold text-gray-900">Rp {product.price.toLocaleString()}</span>
      </p>
      <div className="flex justify-center items-center my-4">
        <button
          onClick={handleDecrease}
          className="px-4 py-2 bg-red-500 text-white rounded-l hover:bg-red-600 transition duration-300"
        >
          -
        </button>
        <span className="px-4 py-2 border-t border-b text-lg font-semibold text-gray-700">
          {quantity[product.id] || 0}
        </span>
        <button
          onClick={handleIncrease}
          className="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600 transition duration-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [quantity, setQuantity] = useState({});

  const totalPerProduct = products.map((product) => ({
    ...product,
    quantity: quantity[product.id] || 0,
    total: (quantity[product.id] || 0) * product.price,
  }));

  const grandTotal = totalPerProduct.reduce((sum, product) => sum + product.total, 0);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
        Daftar Produk
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (    
          <Card
            key={product.id}
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </div>
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Rincian Pembelian</h2>
        <ul className="space-y-2">
          {totalPerProduct.map(
            (product) =>
              product.quantity > 0 && (
                <li key={product.id} className="text-gray-700">
                  {product.title} x {product.quantity} ={" "}
                  <span className="font-bold">
                    Rp {product.total.toLocaleString()}
                  </span>
                </li>
              )
          )}
        </ul>
        <div className="mt-6 border-t pt-4 text-xl font-bold text-gray-800">
          Total Harga: Rp {grandTotal.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ProductList;