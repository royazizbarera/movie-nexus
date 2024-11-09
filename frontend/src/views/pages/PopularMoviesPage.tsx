import React from "react";

import { Box, Grid } from "@mui/joy";
import MainLayout from "../layouts/MainLayout";
import MovieCard from "../components/MovieCard";

import AppAppBar from "../components/AppAppBar";
import { MovieModel } from "../../models/MovieModel";
import movieController from "../../controllers/MovieController";

export default function PopularMoviesPage() {
  const [popularMovies, setPopularMovies] = React.useState<MovieModel[]>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieController.getPopularMovies();
        const { data: movies } = response;
        setPopularMovies(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <AppAppBar />
      <MainLayout giveSpace pt={14}>
        {/* PopularMovies */}
        <Box>
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
            sx={{ flexGrow: 1, justifyContent: "left" }}
          >
            {popularMovies.map((movie: any, index: number) => (
              <Grid
                key={index}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                xl={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MovieCard
                  key={index}
                  id={movie.id}
                  title={movie.title}
                  posterUrl={movie.posterUrl}
                  rating={movie.rating}
                  year={movie.releaseDate}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </MainLayout>
    </>
  );
}
