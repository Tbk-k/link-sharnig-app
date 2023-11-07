import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoad = ({ isAutenticated, children }) => {
  if (isAutenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoad;
