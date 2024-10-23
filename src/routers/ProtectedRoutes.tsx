import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../contexts/authStore";

type ProtectedRouteProps = {
  element: React.ReactNode;
  role?: "admin" | "writer" | ["admin", "writer"]; // Role yang dibutuhkan untuk mengakses halaman
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

  // Cek role nya 1 atau 2
  // kalo 1 cek role nya sama dengan role yang di butuhkan
  if ( role === "admin" || role === "writer") {
    if (user!.role !== role) {
      return <Navigate to="/unauthorized" replace />;
    } else {
      return <>{element}</>;
    }
  } else if (role && role.includes("admin") && role.includes("writer")) {
    if (user!.role !== "admin" && user!.role !== "writer") {
      return <Navigate to="/unauthorized" replace/>
    } else {
      return <>{element}</>;
    }
  }

  return <>{element}</>;
};

export default ProtectedRoute;
