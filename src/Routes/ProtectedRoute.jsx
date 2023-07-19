import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { loginUser } = useSelector((state) => state.login);
  return !loginUser ? <Outlet /> : <Navigate to="/home" />;
};

export default ProtectedRoute;
