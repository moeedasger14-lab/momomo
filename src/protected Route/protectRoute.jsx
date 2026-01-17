import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <Navigate to="/signup" replace />;
  }

  return <Outlet />;
}
