// ProtectedRoute.js
import React from "react";
import useFirebase from "../hooks/useFirebase";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();
  const location = useLocation();
  if (isLoading) {
    // You can show a loading spinner here if needed
    return <div>Loading...</div>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
