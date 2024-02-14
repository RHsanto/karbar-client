// AdminRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();
  const location = useLocation();

  if (isLoading) {
    // You can show a loading spinner here if needed
    return (
      <div className="text-center p-20">
        Loading...<span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user?.email === "robinhood100@gmail.com") {
    return children;
  }
  return <Navigate to="/security-alert" state={{ from: location }} />;
};

export default AdminRoute;
