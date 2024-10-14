import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../contexts/authStore";

type ProtectedRouteProps = {
  element: React.ReactNode;
  role?: "admin" | "writer"; // Role yang dibutuhkan untuk mengakses halaman
  isAuthenticatedState?: boolean;
};

const ProtectedRoute = ({
  element,
  role,
  isAuthenticatedState = true,
}: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  // Jika pengguna belum login diperbolehkan masuk ke halaman login
  if (!isAuthenticatedState && !isAuthenticated) {
    return <>{element}</>;
  } else if (!isAuthenticatedState && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Jika pengguna tidak login, redirect ke halaman login
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  // Jika role diatur, lakukan pengecekan role
  if (role) {
    if (user.role !== role) {
      return <Navigate to="/sign-in" replace />;
    }
  }

  return <>{element}</>;
};

export default ProtectedRoute;
