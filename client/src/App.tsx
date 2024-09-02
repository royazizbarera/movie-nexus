import { Box } from "@mui/material";
import "./App.css";
import AdminPages from "./pages/admin/AdminPages";
import AdminSignin from "./pages/admin/auth/AdminSignin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";
import MoviesDatabase from "./database/MoviesDatabase";
import ErrorPage from "./pages/util/ErrorPage";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="admin" element={<AdminPages />} />
          <Route path="admin-sign" element={<AdminSignin />} />
          <Route
            path="detail-movie"
            element={<DetailMovie movie={MoviesDatabase[0]} />}
          />

          <Route path="*" element={<ErrorPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
