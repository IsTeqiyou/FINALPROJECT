import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("authToken", response.data.access_token);
        navigate("/product");
      })
      .catch(() => {
        setError("Login gagal! Silakan periksa email dan password Anda.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800 animate-fadeIn">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {error && (
          <div className="mt-4 text-center text-red-600 animate-pulse">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>    
    loading 
  );
};

export default LoginPage;