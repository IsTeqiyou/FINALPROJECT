import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";

// Komponen HomePage
const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Ini adalah halaman utama</h1>
    </div>
  );
};

// Komponen AboutPage
const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Ini adalah halaman about</h1>
    </div>
  );
};

// Komponen Navigasi
const Navigation = () => {
  return (
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
        to="/about"
        style={({ isActive }) =>
          isActive ? { ...styles.link, ...styles.activeLink } : styles.link
        }
      >
        About
      </NavLink>
    </nav>
  );
};

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <HomePage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navigation />
        <AboutPage />
      </>
    ),
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

export default Navigation;