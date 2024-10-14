import { Box, Grid, Typography } from "@mui/joy";
import MovieCard from "../components/MovieCard";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import movieController from "../../controllers/movieController";
import AppAppBar from "../components/AppAppBar";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);

  // fetch using controller
  useEffect(() => {
    movieController
      .getMovies({})
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AppAppBar />
      <MainLayout giveSpace pt={14}>
        {/* Hero Movie Video */}

        {/* Test grid movie */}
        <Box>
          <Typography level="h1" pb={2}>
            Movies
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
            sx={{ flexGrow: 1, justifyContent: "left" }}
          >
            {movies.map((movie: any, index: number) => (
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
        {/* AppBar tetap di atas tanpa padding */}
      </MainLayout>
    </>
  );
}
