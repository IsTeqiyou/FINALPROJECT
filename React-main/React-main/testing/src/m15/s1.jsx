import { useState } from "react";
import axios from "axios";

const Login = () => {
  // State untuk input form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State untuk respons
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);

  // Fungsi untuk menangani login
  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Reset pesan sebelumnya
    setMessage("");
    setToken(null);

    // Kirim data ke API menggunakan then dan catch
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        // Jika berhasil
        setMessage("Login Berhasil!");
        setToken(response.data.token); // Ambil token dari respons
      })
      .catch((error) => {
        // Jika gagal
        setMessage(
          error.response?.data?.message || "Login Gagal! Periksa kredensial Anda."
        );
      });
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>

      {/* Tampilkan pesan */}
      {message && <p>{message}</p>}

      {/* Tampilkan token jika ada */}
      {token && (
        <div>
          <h3>Token:</h3>
          <pre>{token}</pre>
        </div>
      )}
    </div>
  );
};

// Gaya sederhana untuk halaman login
const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;