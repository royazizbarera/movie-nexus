import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/util/ErrorPage";
import AdminRoutes from "./routes/AdminRoutes";
import ClientRoutes from "./routes/ClientRoutes";
import Home from "./pages/client/Home";
import { UserProvider } from "./context/useAuth";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            {/* Admin Pages */}
            <Route index element={<Home />} />
            {/* Admin V2 Pages */}
            <Route path="admin/*" element={<AdminRoutes />} />

            {/* Client V1 Pages */}
            <Route path="/*" element={<ClientRoutes />} />

            {/* Error Page */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>{" "}
    </Box>
  );
}

export default App;
