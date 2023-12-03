// AdminRoute.js
import React from "react";
import useSWR from "swr";
import { Navigate, useLocation } from "react-router-dom";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const AdminRoute = ({ children, ...rest }) => {
  const location = useLocation();

  // Replace "admin@example.com" with the actual email or identifier
  const {
    data: userData,
    error,
    isLoading,
  } = useSWR("https://dokan-backend.onrender.com/user", fetcher);

  if (error) {
    console.error("Error fetching user data", error);
    return <div>Error loading user data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Find the user based on some identifier (like email)
  const user = userData.find(user => user.role === "admin");

  // Check if the user has an "admin" role
  // const isAdmin = user?.role === "admin";

  if (!user?.role === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
