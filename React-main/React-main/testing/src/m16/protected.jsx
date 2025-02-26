import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/" />;
};

export default Protected;