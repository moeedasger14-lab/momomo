import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";



const ProtectedRoute = ({ allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user?.id) return <Navigate to="/signup" replace />;
  if (!allowedRoles.includes(user.role))
    return <Navigate to="/home" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
