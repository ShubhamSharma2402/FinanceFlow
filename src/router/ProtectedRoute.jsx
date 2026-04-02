import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRole }) {
  const { isAuthenticated, user, logout } = useAuth();

  const wrongRole =
    isAuthenticated && allowedRole ? user.role !== allowedRole : false;

  useEffect(() => {
    if (wrongRole) {
      logout();
    }
  }, [wrongRole, logout]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (wrongRole) {
    return null;
  }

  return children;
}
