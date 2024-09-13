import { Routes, Route } from "react-router-dom";

// Component
import AdminPages from "../pages/admin/AdminPages";
// import AdminActors from "../pages/admin/management/AdminActors";
// import AdminCountries from "../pages/admin/management/AdminCountries";
// import AdminAwards from "../pages/admin/management/AdminAwards";
// import AdminGenres from "../pages/admin/management/AdminGenres";
// import AdminMovies from "../pages/admin/management/AdminMovies";
import MoviesTable from "../pages/admin/management/MoviesTable";

export default function AdminRoutes() {
  return (
    <Routes>
      {/* Auth */}
      {/* <Route path="admin-sign" element={<AdminSignin />} /> */}

      {/* Admin Pages */}
      <Route path="/" element={<AdminPages />}>
        <Route path="/" element={<MoviesTable />} />
        <Route path="movies" element={<MoviesTable />} />
        {/* <Route path="actors" element={<AdminActors />} />
        <Route path="countries" element={<AdminCountries />} />
        <Route path="awards" element={<AdminAwards />} />
        <Route path="genres" element={<AdminGenres />} /> */}
      </Route>
    </Routes>
  );
}
