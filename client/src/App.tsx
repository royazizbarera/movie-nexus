import { Box } from "@mui/material";
import "./App.css";
import AdminPages from "./pages/admin/AdminPages";
// import AdminSignin from "./pages/admin/auth/AdminSignin";
// import DetailMovie from "./pages/DetailMovie";
// import MoviesDatabase from "./database/MoviesDatabase";

function App() {
  return (
    <Box>
      {/* <Admin Dashboard/> */}
      <AdminPages />
      {/* <DetailMovie movie={MoviesDatabase[0]}/> */}
      {/* <AdminSignin /> */}
      {/* <FullFeaturedCrudGrid /> */}
    </Box>
  );
}

export default App;
