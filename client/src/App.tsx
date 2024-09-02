import { Box } from "@mui/material";
import "./App.css";
import AdminPages from "./pages/admin/AdminPages";
import AdminSignin from "./pages/admin/auth/AdminSignin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie";
import MoviesDatabase from "./database/MoviesDatabase";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<AdminPages />} />
          <Route path="admin" element={<AdminPages />} />
          <Route path="admin-sign" element={<AdminSignin />} />
          <Route
            path="detail-movie"
            element={<DetailMovie movie={MoviesDatabase[0]} />}
          />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
