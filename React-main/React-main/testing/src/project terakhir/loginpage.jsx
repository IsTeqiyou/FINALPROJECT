import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        localStorage.token ? navigate("/") : navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data);
      });

    setEmail("");
    setPassword("");
  };

  const id = Math.floor(Math.random() * 30);
  const [freeEmail, setFreeEmail] = useState("");
  const [freePassword, setFreePassword] = useState("");

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/users/${id}`).then((response) => {
      setFreeEmail(response.data.email);
      setFreePassword(response.data.password);
    });
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://4kwallpapers.com/images/walls/thumbs_3t/16777.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md p-8 bg-white/30 backdrop-blur-md rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg text-white mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white/50 backdrop-blur-md rounded-lg border-none focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-white mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-white/50 backdrop-blur-md rounded-lg border-none focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>
        <a
          onClick={() => navigate("/help")}
          className="text-sm text-white mt-4 inline-block cursor-pointer hover:underline hover:text-blue-300 transition-all"
        >
          <b>Need help?</b>
        </a>
        <p className="text-sm text-gray-300 mt-4 text-center">
          <span className="text-gray-400">username:</span> {freeEmail},{" "}
          <span className="text-gray-400">password:</span> {freePassword}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;