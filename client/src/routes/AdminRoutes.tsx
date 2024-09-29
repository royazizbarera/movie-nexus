import { Routes, Route } from "react-router-dom";

// Component
import AdminPages from "../pages/admin/AdminPages";
// import AdminActors from "../pages/admin/management/AdminActors";
// import AdminCountries from "../pages/admin/management/AdminCountries";
// import AdminAwards from "../pages/admin/management/AdminAwards";
// import AdminGenres from "../pages/admin/management/AdminGenres";
// import AdminMovies from "../pages/admin/management/AdminMovies";
import MoviesTable from "../pages/admin/management/MoviesTable";
import GenresTable from "../pages/admin/management/GenresTable";
import CountriesTable from "../pages/admin/management/CountriesTable";
import AwardsTable from "../pages/admin/management/AwardsTable";
import ActorsTable from "../pages/admin/management/ActorsTable";
import DirectorsTable from "../pages/admin/management/DirectorsTable";
import LoginPages from "../pages/admin/LoginPages";

export default function AdminRoutes() {
  return (
    <Routes>
      {/* Auth */}
      {/* <Route path="admin-sign" element={<AdminSignin />} /> */}

      {/* Admin Pages */}
      <Route path="/" element={<AdminPages />}>
        <Route path="/" element={<MoviesTable />} />
        <Route path="movies" element={<MoviesTable />} />
        <Route path="genres" element={<GenresTable />} />
        <Route path="actors" element={<ActorsTable />} />
        <Route path="directors" element={<DirectorsTable />} />
        <Route path="countries" element={<CountriesTable />} />
        <Route path="awards" element={<AwardsTable/>} />
        <Route path="login" element={<LoginPages/>} />
      </Route>
    </Routes>
  );
}
