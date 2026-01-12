import { message } from "antd";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("userfor"));

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return children;
}
