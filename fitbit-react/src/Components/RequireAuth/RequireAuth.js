import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../Context/user-context";

function RequireAuth({ children }) {
  const { user } = useUser();

  const location = useLocation();

  return user.isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default RequireAuth;
