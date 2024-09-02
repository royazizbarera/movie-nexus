import { Box } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie";
import MoviesDatabase from "./database/MoviesDatabase";


function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/DetailMovie" element={<DetailMovie movie={MoviesDatabase[0]} />} />
            </Routes>
      </BrowserRouter>
  );
}

export default App;