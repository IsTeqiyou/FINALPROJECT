import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Komponen HomePage
const HomePage = () => {
  return <h1>Ini adalah halaman utama</h1>;
};

// Komponen AboutPage
const AboutPage = () => {
  return <h1>Ini adalah halaman about</h1>;
};

// Komponen NotFoundPage
const NotFoundPage = () => {
  return <h1>Halaman tidak ditemukan</h1>;
};

// Definisi Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*", // Penanganan wildcard untuk error 404
    element: <NotFoundPage />,
  },
]);

// Komponen Utama
const App = () => {
  return <RouterProvider router={router} />;
};

// Render Aplikasi
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
