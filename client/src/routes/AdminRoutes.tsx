import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminMoviesList from "../pages/admin/AdminMoviesList";
import AdminApprovement from "../pages/admin/AdminApprovement";
import AdminSignin from "../pages/admin/auth/AdminSignin";
import AdminPages from "../pages/admin/AdminPages";

export default function AdminRoutes() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="admin-sign" element={<AdminSignin />} />

      {/* Admin Pages */}
      <Route path="/" element={<AdminPages />}>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="movies" element={<AdminMoviesList />} />
        <Route path="approvement" element={<AdminApprovement />} />
        <Route path="approvement-movies" element={<AdminApprovement />} />
        <Route path="approvement-rating" element={<AdminApprovement />} />
      </Route>
    </Routes>
  );
}
