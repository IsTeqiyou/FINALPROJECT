import axios from "axios";
import { useState, useEffect } from "react";

export default function AxiosStore() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const updateCart = (title, price, change) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[title]?.quantity || 0;
      const newQuantity = currentQuantity + change;

      if (newQuantity <= 0) {
        const { [title]: _, ...rest } = prevCart;
        return rest;
      }

      return {
        ...prevCart,
        [title]: { price, quantity: newQuantity },
      };
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
            description={product.description}
            quantity={cart[product.title]?.quantity || 0} 
            onUpdate={updateCart}s
          />
        ))}
      </div>
    </div>
  );
}

function ShoppingCard({ title, price, src, description, quantity, onUpdate }) AudioWorklet
  return (
    <div className="border rounded-lg shadow-lg p-4 w-full flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <img
        src={src}
        alt={title}
        className="w-full h-60 object-contain rounded-t-lg"
      />
      <div className="py-2 flex-grow">
        <h2 className="text-md font-semibold">{title}</h2>
        <p className="text-gray-700">Harga: Rp.{price}</p>
        <p className="text-gray-700">Quantity: {quantity}</p>
        <p className="text-gray-700">Total: Rp.{quantity * price}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="flex justify-between mt-2">
        <button
          className="bg-blue-500 text-white w-1/3 py-2 rounded-md"
          onClick={() => onUpdate(title, price, 1)}
        >
          Tambah
        </button>
        <button
          className="bg-red-500 text-white w-1/3 py-2 rounded-md"
          onClick={() => onUpdate(title, price, -1)}
        >
          Kurang
        </button>
      </div>
    </div>
  );
}