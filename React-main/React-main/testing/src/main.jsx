import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

// import App from "./m6/RenderingList/fragments/App.jsx";
import CreatePost from "./m17/createdate.jsx";
import ProductList from "./m16/itemlist.jsx";
import App from "./project terakhir/app.jsx";








createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
