import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { loginUser } = useSelector((state) => state.login);
  return loginUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
