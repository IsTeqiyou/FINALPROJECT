import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from "react-router-dom";

// Komponen Halaman Dashboard Utama
const DashboardHome = () => {
  return <h1 style={styles.heading}>Halaman Dashboard Utama</h1>;
};

// Komponen Halaman Settings
const SettingsPage = () => {
  return <h1 style={styles.heading}>Halaman Settings</h1>;
};

// Komponen DashboardPage
const DashboardPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>
      <nav style={styles.nav}>
        <NavLink
          to="/dashboard"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
          end // Menghindari tautan aktif pada rute bersarang
        >
          Dashboard Home
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Settings
        </NavLink>
      </nav>
      <Outlet /> {/* Tempat untuk merender konten rute bersarang */}
    </div>
  );
};

// Definisi Router
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "", // Rute default untuk /dashboard
        element: <DashboardHome />,
      },
      {
        path: "settings", // Rute untuk /dashboard/settings
        element: <SettingsPage />,
      },
    ],
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

export default DashboardPage;
