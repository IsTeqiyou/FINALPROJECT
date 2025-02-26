import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [posts, setPosts] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
    }
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserProfile(response.data.name);
      })
      .catch(() => {
        navigate("/");
      });
  }, [navigate]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const productsWithCount = response.data.map((product) => ({
          ...product,
          count: 0,
        }));
        setPosts(productsWithCount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addProduct = (id) => {
    setPosts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const reduceProduct = (id) => {
    setPosts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const formatDollar = (angka) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(angka);
  };

  const calculateTotal = (price, count) => {
    return price * count;
  };

  const calculateGrandTotal = () => {
    return posts.reduce((total, product) => {
      return total + calculateTotal(product.price, product.count);
    }, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center gap-12 mt-12 px-4 animate-fadeIn">
      <div className="w-full max-w-7xl flex justify-end items-center">
        <h1 className="font-bold text-xl text-gray-700 mr-3">Hello, {userProfile}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md"
        >
          LogOut
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {posts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg shadow-lg p-5 w-full bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[350px]"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-contain rounded-t-md mb-4 cursor-pointer transition-all duration-300 hover:opacity-75"
              />
            </Link>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-4">
              Harga: <span className="font-bold">{formatDollar(product.price)}</span>
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => reduceProduct(product.id)}
                className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition-all duration-300"
              >
                Kurang
              </button>
              <p className="text-black font-bold text-base text-center w-10">{product.count}</p>
              <button
                onClick={() => addProduct(product.id)}
                className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition-all duration-300"
              >
                Tambah
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 max-w-4xl w-full bg-white mt-8 animate-slideIn">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Rincian Total Harga:</h2>
        {posts.filter((product) => product.count > 0).map((product) => (
          <p key={product.id} className="text-gray-800 text-sm mb-2">
            {product.title} x {product.count} = <span className="font-bold">{formatDollar(calculateTotal(product.price, product.count))}</span>
          </p>
        ))}
        <hr className="my-4 border-t-2" />
        {posts.some((product) => product.count > 0) ? (
          <p className="text-lg font-semibold text-gray-900">
            Total Keseluruhan: <span className="font-bold">{formatDollar(calculateGrandTotal())}</span>
          </p>
        ) : (
          <p className="text-gray-600 text-sm">Belum ada barang yang ditambahkan.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;