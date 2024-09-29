import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";


import AdminSidebar from "./components/AdminSidebar";

export default function MiniDrawer() {
  return (
    <>
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <AdminSidebar />

        {/* Content */}
        <Box
          component="main"
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            // p: 1,
            backgroundColor: "background.paper",
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
