import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  // Redirect to login if no user is authenticated
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
