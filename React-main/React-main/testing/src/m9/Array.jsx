import React, { useState } from 'react';

// Data produk awal
const initialProducts = [
  { id: 1, name: 'Produk A', price: 20000, quantity: 0 },
  { id: 2, name: 'Produk B', price: 30000, quantity: 0 },
  { id: 3, name: 'Produk C', price: 50000, quantity: 0 },
];

// Komponen Card
const Card = ({ product, updateQuantity }) => {
  // Hitung total harga berdasarkan jumlah produk dan harga per produk
  const totalPrice = product.price * product.quantity;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-64">
      <img
        src={`https://via.placeholder.com/150?text=${product.name}`} // Gambar placeholder
        alt={product.name}
        className="w-full h-32 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-600">Harga: Rp {product.price.toLocaleString()}</p>
      
      <div className="flex items-center mt-4">
        <button
          onClick={() => updateQuantity(product.id, -1)}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        >
          Kurang
        </button>
        <span className="text-lg">{product.quantity}</span>
        <button
          onClick={() => updateQuantity(product.id, 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Tambah
        </button>
      </div>

      <div className="mt-4">
        <p className="font-semibold">
          Total Harga: Rp {totalPrice.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

// Komponen utama untuk menampilkan daftar produk
const ProductList = () => {
  // State untuk produk
  const [products, setProducts] = useState(initialProducts);

  // Fungsi untuk memperbarui jumlah produk
  const updateQuantity = (id, change) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + change) } // memastikan quantity tidak negatif
          : product
      )
    );
  };

  return (
    <div className="flex gap-4 p-8">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
  );
};

export default ProductList;
