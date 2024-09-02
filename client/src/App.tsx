import { Box } from "@mui/material";
import "./App.css";
import AdminPages from "./pages/admin/AdminPages";
import AdminSignin from "./pages/admin/auth/AdminSignin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";
import MoviesDatabase from "./database/MoviesDatabase";
import ErrorPage from "./pages/util/ErrorPage";
import AdminRoutes from "./routes/AdminRoutes";


function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="detail-movie"
            element={<DetailMovie movie={MoviesDatabase[0]} />}
          />

          {/* Admin Pages */}
          <Route path="admin/*" element={<AdminRoutes />} />

          {/* Error Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
