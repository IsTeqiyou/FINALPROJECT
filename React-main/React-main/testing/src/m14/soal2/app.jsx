import { ProductList,ProductDetail } from "./Components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <ProductList /> },
    { path: "/product/:id", element: <ProductDetail /> },
]);

function App() {
    return <RouterProvider router={router} />
}

export default App;