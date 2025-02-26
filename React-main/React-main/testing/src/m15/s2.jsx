import { useState } from "react";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ProductDetail, ProductList } from "../m14/soal 2/components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        setMessage("Login Berhasil!");
        const token = response.data.token;
        setToken(token);
        localStorage.setItem("token", token); // Simpan token di localStorage
        console.log(response.data.token);

        if (token) {
          navigate("/product");
        }
      })
      .catch((error) => {
        setMessage(
          error.response?.data?.message ||
            "Login Gagal! Periksa kredensial Anda."
        );
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <Link
            to="/product"
            className="block mt-4 text-blue-500 hover:underline"
          >
            Belum Punya Akun? Daftar Sekarang
          </Link>
        </form>
        {message && (
          <p className="mt-4 text-sm text-gray-700 bg-gray-200 p-2 rounded">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/product", element: <ProductList /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/profile/:userId", element: <ProductDetail /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;