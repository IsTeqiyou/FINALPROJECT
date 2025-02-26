import { MapBooks, BooksDetail } from "./component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <MapBooks /> },
    { path: "/books/:id", element: <BooksDetail /> },
]);

function App () {
    return <RouterProvider router={router} />
}

export default  App;
