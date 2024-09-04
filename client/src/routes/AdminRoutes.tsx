import { Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";

// Component
import AdminPages from "../pages/admin/AdminPages";
import AdminActors from "../pages/admin/management/AdminActors";
import AdminMovies from "../pages/admin/management/AdminMovies";

// ActorsContent.js
export const ActorsContent = () => {
  return (
    <div>
      <Typography variant="h4">Actors List</Typography>
      <Typography>
        This is where the list of actors will be displayed.
      </Typography>
    </div>
  );
};

// MoviesContent.js
export const MoviesContent = () => {
  return (
    <div>
      <Typography variant="h4">Movies List</Typography>
      <Typography>
        This is where the list of movies will be displayed.
      </Typography>
    </div>
  );
};

// CountriesContent.js
export const CountriesContent = () => {
  return (
    <div>
      <Typography variant="h4">Countries List</Typography>
      <Typography>
        This is where the list of countries will be displayed.
      </Typography>
    </div>
  );
};

// AwardsContent.js
export const AwardsContent = () => {
  return (
    <div>
      <Typography variant="h4">Awards List</Typography>
      <Typography>
        This is where the list of awards will be displayed.
      </Typography>
    </div>
  );
};

// GenresContent.js
export const GenresContent = () => {
  return (
    <div>
      <Typography variant="h4">Genres List</Typography>
      <Typography>
        This is where the list of genres will be displayed.
      </Typography>
    </div>
  );
};

export default function AdminRoutes() {
  return (
    <Routes>
      {/* Auth */}
      {/* <Route path="admin-sign" element={<AdminSignin />} /> */}

      {/* Admin Pages */}
      <Route path="/" element={<AdminPages />}>
        <Route path="/" element={<ActorsContent />} />
        <Route path="actors" element={<AdminActors />} />
        <Route path="movies" element={<AdminMovies />} />
        <Route path="countries" element={<CountriesContent />} />
        <Route path="awards" element={<AwardsContent />} />
        <Route path="genres" element={<GenresContent />} />
      </Route>
    </Routes>
  );
}
