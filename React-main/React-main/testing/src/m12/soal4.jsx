import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, NavLink, useParams } from "react-router-dom";

// Komponen HomePage
const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Ini adalah halaman utama</h1>
      <nav style={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile/123"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Profile 123
        </NavLink>
        <NavLink
          to="/profile/abc"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Profile ABC
        </NavLink>
      </nav>
    </div>
  );
};

// Komponen ProfilePage
const ProfilePage = () => {
  const { userId } = useParams(); // Mengambil parameter userId dari URL
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Profil Pengguna</h1>
      <p style={styles.text}>User ID: Abdillah Arrafif{userId}</p>
      <NavLink to="/" style={styles.link}>
        Kembali ke Home
      </NavLink>
    </div>
  );
};

// Definisi Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile/:userId", // Rute dinamis
    element: <ProfilePage />,
  },
]);

// Komponen Utama
const App = () => {
  return <RouterProvider router={router} />;
};

// Gaya CSS Inline
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#333",
    fontSize: "28px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "20px",
    color: "#555",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "18px",
    padding: "5px 10px",
  },
  activeLink: {
    fontWeight: "bold",
    borderBottom: "2px solid #007BFF",
  },
};

// Render Aplikasi
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
