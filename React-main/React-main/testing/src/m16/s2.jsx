import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useParams,
  } from "react-router-dom";
  import ProductDetail from "./productdetail";
  import ProductList from "./itemlist";
  import LoginPage from "./loginpage";
  import Protected from "./protected";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/product",
      element: (
        <Protected>
          <ProductList />
        </Protected>
      ),
    },
    {
      path: "/product/:id",
      element: (
        <Protected>
          <ProductDetail />
        </Protected>
      ),
    },
  ]);
  
  function AxioCard() {
    return <RouterProvider router={router} />;
  }
  
  export default AxioCard;