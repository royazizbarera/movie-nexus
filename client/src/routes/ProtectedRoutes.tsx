import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";

type ProtectedRouteProps = {
  children: React.ReactNode;
  role?: 'admin' | 'writer'; // Role yang dibutuhkan untuk mengakses halaman
};

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const { isLoggedIn, isAdmin, isWriter } = useAuth();
  const location = useLocation();

  // Jika pengguna tidak login, redirect ke halaman login
  if (!isLoggedIn()) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  // Jika role diatur, lakukan pengecekan role
  if (role) {
    if (role === 'admin' && !isAdmin()) {
      return <Navigate to="/admin/sign-in" replace />; // Redirect ke halaman unauthorized
    }

    if (role === 'writer' && !isWriter()) {
      return <Navigate to="/sign-in" replace />;
    }
  }

  // Jika login dan memiliki peran yang sesuai, render children
  return <>{children}</>;
};

export default ProtectedRoute;
