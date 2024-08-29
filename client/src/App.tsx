import { Box } from "@mui/material";
import "./App.css";
import DetailMovie from "./pages/DetailMovie";
import MoviesDatabase from "./database/MoviesDatabase";


function App() {
  return (
    <Box>
      {/* <Home /> */}
      <DetailMovie movie={MoviesDatabase[0]}/>
    </Box>
  );
}

export default App;
