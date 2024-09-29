import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/layouts/Header";
import Banner from "../../components/layouts/Banner";
import MovieList from "../../components/layouts/MovieList";
import movies from "../../database/DummyMovies";


const Home: React.FC = () => {
  return (
    <Box
      sx={{ backgroundColor: "#141414", color: "white", minHeight: "100vh" }}
    >
      <Header />
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          zIndex: 1,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Banner />
      </Box>

      <Box
        sx={{
          position: { md: "absolute", xs: "relative" },
          top: { md: "31rem", xs: "3rem" },
          maxWidth: "100%",
          zIndex: 2,
        }}
      >
        <MovieList title={"Popular"} movies={movies} />
        <MovieList title={"Film"} movies={movies} />
        <MovieList title={"Acara TV"} movies={movies} />
      </Box>
    </Box>
  );
};

export default Home;
