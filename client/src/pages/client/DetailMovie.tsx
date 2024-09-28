import React from "react";
import { Box } from "@mui/material";
import MovieModel from "../../../../../temp/movie-nexus/client/src/model/temp/MovieModel";
import MovieHeroSection from "../../../../../temp/movie-nexus/client/src/components/layouts/MovieHeroSection";
import MovieDescriptionSection from "../../../../../temp/movie-nexus/client/src/components/layouts/MovieDescriptionSection";
import ActorListSection from "../../../../../temp/movie-nexus/client/src/components/layouts/ActorListSection";
import MovieReviewSection from "../../../../../temp/movie-nexus/client/src/components/layouts/MovieReviewSection";
import Header from "../../../../../temp/movie-nexus/client/src/components/layouts/Header";

// Props detail movie menggunakan MovieModel
interface DetailMovieProps {
  movie: MovieModel;
}

const DetailMovie: React.FC<DetailMovieProps> = ({ movie }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Header />
      {/* Title, Poster, and Trailer with Glassmorphism Background */}
      <MovieHeroSection movie={movie} />

      {/* Movie Description */}
      <MovieDescriptionSection movie={movie} />

      {/* Actor List Section */}
      <ActorListSection actors={movie.actors} />

      {/* Review Section */}
      <MovieReviewSection reviews={movie.reviews!} />
    </Box>
  );
};

export default DetailMovie;
