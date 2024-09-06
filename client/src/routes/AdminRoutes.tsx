import { Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";

// Component
import AdminPages from "../pages/admin/AdminPages";
import AdminActors from "../pages/admin/management/AdminActors";
import { AdminCountries } from "../pages/admin/management/AdminCountries";

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
        <Route path="/" element={<AdminActors />} />
        <Route path="actors" element={<AdminActors />} />
        <Route path="countries" element={<AdminCountries />} />
        <Route path="awards" element={<AwardsContent />} />
        <Route path="genres" element={<GenresContent />} />
      </Route>
    </Routes>
  );
}
