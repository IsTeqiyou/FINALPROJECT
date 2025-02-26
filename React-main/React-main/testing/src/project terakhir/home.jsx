import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// CurrencyFormatter component
const CurrencyFormatter = ({ number }) => {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);

  return <span>{formattedNumber}</span>;
};

// Product component
const Product = ({ product, onChange }) => {
  const [count, setCount] = useState(0);
  const totalPrice = count * product.price;

  const handleTambah = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(product.id, newCount, totalPrice + product.price);
  };

  const handleKurang = () => {
    const newCount = count ? count - 1 : 0;
    setCount(newCount);
    onChange(product.id, newCount, totalPrice - product.price);
  };

  const handleClick = () => {
    window.open(`/product/${product.id}`, '_self');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 transition-all hover:scale-105 hover:shadow-xl">
      <img
        src={product.image}
        className="w-full h-auto rounded-lg mb-4 cursor-pointer transition-all hover:scale-105"
        alt=""
        onClick={handleClick}
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600">{<CurrencyFormatter number={product.price} />}</p>
        <p className="text-gray-500 text-sm mt-2">{product.description}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onClick={handleTambah}
          >
            Tambah
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            onClick={handleKurang}
          >
            Kurang
          </button>
        </div>
        <div className="text-xl font-bold">{count}</div>
      </div>

      {count > 0 && (
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Total Harga: <CurrencyFormatter number={totalPrice} />
        </p>
      )}
    </div>
  );
};

// Summary component
const Summary = ({ summary }) => {
  const totalHargaKeseluruhan = summary.reduce(
    (total, product) => total + product.totalPrice,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6 transition-all hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ringkasan Pembelian</h2>
      <ul className="space-y-2">
        {summary
          .filter((product) => product.quantity > 0)
          .map((product) => (
            <li key={product.id} className="text-lg text-gray-700">
              {product.title} x {product.quantity} ={' '}
              <CurrencyFormatter number={product.totalPrice} />
            </li>
          ))}
      </ul>
      <h3 className="mt-4 text-xl font-bold text-gray-900">
        Total Keseluruhan:{' '}
        <CurrencyFormatter number={totalHargaKeseluruhan} />
      </h3>
    </div>
  );
};

// HeaderHome component
const HeaderHome = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decode = jwtDecode(token);
      axios
        .get(`https://api.escuelajs.co/api/v1/users/${decode.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setProfile(response.data);
        });
    }
  }, []);

  if (!profile.name) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-between items-center bg-blue-500 text-white p-4">
      <h1 className="text-xl font-bold">Product List</h1>
      <div className="flex items-center">
        Welcome, {profile.name}
        <img
          src={profile.avatar}
          alt="User Logo"
          className="w-10 h-10 rounded-full ml-2 cursor-pointer"
          onClick={() => navigate('/profile')}
        />
        <button
          className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
          onClick={LogOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

// ProfileDetail component
const ProfileDetail = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        axios
          .get(`https://api.escuelajs.co/api/v1/users/${decoded.sub}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => setProfile(response.data))
          .catch((error) => console.error("Error fetching profile:", error));
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-700">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage:
            "url('https://as2.ftcdn.net/jpg/03/71/92/67/1000_F_371926762_MdmDMtJbXt7DoaDrxFP0dp9Nq1tSFCnR.jpg')",
        }}
      ></div>

      {/* Profile Card */}
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-6 shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Profile Detail</h2>
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-lg">
            <span className="text-gray-600">No Avatar</span>
          </div>
        )}
        <p className="text-lg font-medium text-gray-700 text-center">Name: {profile.name || "N/A"}</p>
        <p className="text-lg font-medium text-gray-700 text-center">Email: {profile.email || "N/A"}</p>
        <p className="text-lg font-medium text-gray-700 text-center">Role: {profile.role || "N/A"}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

// ProductList component
const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Filter produk berdasarkan searchQuery
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fungsi Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token
    navigate("/login"); // Redirect ke login
  };

  return (
    <div
      className={`p-8 min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header dengan Toggle Mode & Logout */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Rumba Shop</h1>
        <div className="flex items-center gap-4">
          <p className="text-lg font-medium">Bello, Taqy! 👋</p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="py-2 px-4 rounded-md border border-gray-300 shadow-sm bg-gray-200 dark:bg-gray-800 transition"
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-500 text-white rounded-md shadow-md"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-white dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Discount Banner */}
      <div className="mb-6 flex justify-center">
        <img 
          src="https://hype.my/wp-content/uploads/2020/11/Shopee-11.11-Big-Sale.jpg" 
          alt="Ramadan Ekstra Seru" 
          className="w-full max-w-3xl rounded-lg shadow-lg" 
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`border p-4 shadow-md rounded-lg cursor-pointer transition ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain"
              />
              <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
              <p className="font-bold">${product.price.toFixed(2)}</p>
              {/* Bintang Rating */}
              <div className="flex items-center mt-2">
                {Array.from({ length: Math.round(product.rating?.rate || 0) }).map((_, index) => (
                  <span key={index} className="text-yellow-400 text-lg">⭐</span>
                ))}
                <span className="ml-2 text-sm text-gray-500">({product.rating?.rate || 0})</span>
              </div>
              <button className="mt-3 bg-orange-500 text-white py-2 px-4 rounded-md w-full">
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">No products found.</p>
        )}
      </div>
    </div>
  );
};



// LogOut function
const LogOut = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

// ProductDetail component

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });

    // Ambil ulasan produk
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setReviews(response.data.rating ? response.data.rating.reviews || [] : []);
    });
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity, size: selectedSize });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (!product) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('https://as2.ftcdn.net/jpg/03/71/92/67/1000_F_371926762_MdmDMtJbXt7DoaDrxFP0dp9Nq1tSFCnR.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-xl w-full">
        {/* Tombol Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          ← Back to Product List
        </button>

        {/* Informasi Produk */}
        <h1 className="text-2xl font-bold text-center">{product.title}</h1>
        <img src={product.image} alt={product.title} className="w-60 mx-auto my-4 rounded-lg shadow" />
        <p className="text-gray-600 text-center">{product.description}</p>

        {/* Harga Total */}
        <p className="text-xl font-bold text-center mt-2">
          ${product.price.toFixed(2)} x {quantity} = ${(product.price * quantity).toFixed(2)}
        </p>

        {/* Pilih Ukuran */}
        <div className="mt-3 text-center">
          <label className="text-gray-700 font-medium">Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="ml-2 p-2 border rounded-md bg-white text-gray-900"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        {/* Pilih Jumlah */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="border px-3 py-1 rounded"
          >
            -
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border px-3 py-1 rounded"
          >
            +
          </button>
        </div>

        {/* Tombol Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 w-full"
        >
          + Keranjang
        </button>

        {/* Ulasan Produk */}
        <div className="mt-6">
          <h2 className="text-lg font-bold">Ulasan Produk</h2>
          <div className="border p-3 rounded-md mt-2 max-h-40 overflow-auto bg-gray-100">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="border-b py-2">
                  <p className="text-sm font-semibold">⭐ {review.rate}/5</p>
                  <p className="text-sm italic">"{review.comment}"</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm italic">Belum ada ulasan.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};







export { ProductList, ProductDetail, ProfileDetail };