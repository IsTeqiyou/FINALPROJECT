import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/", // Rute untuk halaman utama
    element: <Home />,
  },
  {
    path: "/profile/:userId", // Rute dinamis
    element: <DetailProduct />,
  },
  {apath: "*", // Rute fallback untuk 404
    element: <NotFound />,
  },
]);

// Komponen DetailProduct
function DetailProduct() {
  const { userId } = useParams(); // Ambil parameter userId dari URL
  return (
    <div>
      <h1>Detail Product</h1>
      <p>ID Product: {userId}</p>
    </div>
  );
}

// Komponen Home (opsional)
function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>Click on a profile to view details.</p>
    </div>
  );
}

// Komponen NotFound (404)
function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

// Komponen Utama
    function CobaUseParams() {
    return <RouterProvider router={router} />;
}

export default CobaUseParams;