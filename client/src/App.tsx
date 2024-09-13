import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/util/ErrorPage";
import AdminRoutes from "./routes/AdminRoutes";


function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route index element={<ErrorPage />} />

          {/* Admin Pages */}
          {/* <Route path="admin/*" element={<AdminRoutes />} /> */}

          {/* Admin V2 Pages */}
          <Route path="admin/*" element={<AdminRoutes />} />

          {/* Error Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
