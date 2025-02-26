import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) AudioWorklet
    return <div className="text-center text-lg text-gray-600 animate-pulse">Loading...</div>;
AKU
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-screen-lg transform transition-all duration-500 hover:shadow-2xl">
        <div className="flex flex-col sm:flex-row animate-fadeIn">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg w-full max-w-xs h-auto max-h-80 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-between px-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
              <p className="text-green-600 mt-1 font-medium">In stock</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">${product.price}</p>

              <div className="flex items-center mt-4 space-x-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <span
                    key={size}
                    className="text-sm font-medium px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex space-x-4">
                <button className="bg-black text-white text-lg px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md">
                  Buy now
                </button>
                <button className="border border-gray-300 text-lg px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-sm">
                  Add to bag
                </button>
              </div>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              <p className="text-gray-500 text-sm mt-4 animate-fadeIn">
                Free shipping on all continental US orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 