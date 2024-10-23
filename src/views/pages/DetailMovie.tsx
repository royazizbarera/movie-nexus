import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Typography,
  List,
  // Avatar,
  // ListItem,
  // ListItemDecorator,
  // ListItemContent,
  // ListDivider,
} from "@mui/joy";
import ContentLayout from "../layouts/ContentLayout";

// icon
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddCommentIcon from "@mui/icons-material/AddComment";

import MainLayout from "../layouts/MainLayout";
import MovieCard from "../components/MovieCard";
import ActorCard from "../components/ActorCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieController from "../../controllers/movieController";
// import getTrailerMovie from "../../helpers/getTrailerMovie";
import AppAppBar from "../components/AppAppBar";
import BackgroundTrailer from "../components/movies/BackgroundTrailer";
import VideoTrailer from "../components/movies/VideoTrailer";

export default function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>({});
  const [genres, setGenres] = useState<any[]>([]);
  const [actors, setActors] = useState<any[]>([]);
  const [director, setDirector] = useState<any>({});
  // const [reviews, setReviews] = useState<any[]>([]);
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

  useEffect(() => {
    // Ambil detail movie
    try {
      movieController.getMovieById(id!).then((data) => {
        setMovie(data.data);
        setGenres(data.data.genres);
        setDirector(data.data.director);
        setActors(data.data.actors);
        // setReviews(data.data.reviews);
      });
    } catch (error) {}
  }, [id]);

  return (
    <>
      <AppAppBar />
      <MainLayout>
        {/* Poster Trailer */}
        <ContentLayout>
          <BackgroundTrailer backgroundUrl={movie.posterUrl}>
            <ContentLayout giveSpace>
              <Box position="relative" zIndex={1}>
                <Grid
                  container
                  spacing={2}
                  alignItems="stretch"
                  direction={{ xs: "column", md: "row" }}
                  pb={2}
                >
                  <Grid xs={12} md={3}>
                    <Box
                      component="img"
                      src={movie.posterUrl} // URL gambar poster dari prop
                      alt={`${movie.title} Poster`}
                      width="100%"
                      height="100%" // Menetapkan tinggi penuh agar sejajar dengan trailer
                      borderRadius="8px"
                      sx={{
                        objectFit: "cover",
                        aspectRatio: "3/4", // Misalnya, 2:3 untuk poster film di layar besar dan 3:4 di layar kecil
                      }}
                    />
                  </Grid>

                  {/* Trailer */}
                  <Grid xs={12} md={9}>
                    {movie.videoUrl ? (
                      <VideoTrailer videoUrl={movie.videoUrl} />
                    ) : (
                      <Typography>No trailer available</Typography>
                    )}
                  </Grid>
                </Grid>
                {/* Title and Info with Ratings */}
                <Box
                  display="flex"
                  justifyContent={{ xs: "center", md: "space-between" }}
                  alignItems="center"
                  flexDirection={{ xs: "column", md: "row" }}
                  mb={2}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  <Box mb={{ xs: 2, md: 0 }}>
                    <Typography
                      level="h4"
                      fontWeight="bold"
                      sx={{
                        color: "common.white",
                      }}
                    >
                      {movie.title}
                    </Typography>
                    <Typography
                      level="title-md"
                      sx={{
                        color: "common.white",
                      }}
                    >
                      {movie.releaseDate} ・ {movie.rating} ・ {movie.duration}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={4}>
                    {/* IMDb Rating */}
                    <Box display="table-column" alignItems="center" gap={1}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <StarIcon sx={{ color: "star.main" }} />
                        <Typography
                          level="h4"
                          sx={{
                            color: "common.white",
                          }}
                        >
                          {movie.rating}/10
                        </Typography>
                      </Box>
                      <Typography
                        level="body-xs"
                        sx={{
                          color: "common.white",
                        }}
                      >
                        {movie.votes} votes
                      </Typography>
                    </Box>
                    {/* Your Rating */}
                    {/* Text Button Rating */}
                    <Box>
                      <Button
                        variant="plain"
                        startDecorator={<StarBorderIcon />}
                      >
                        Rate
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ContentLayout>
          </BackgroundTrailer>
        </ContentLayout>
        {/* Movie Description */}
        <ContentLayout giveSpace>
          {/* Chip */}
          <Box
            mt={4}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1, // Jarak antar chip
            }}
          >
            {genres.map((genre: any, index: number) => (
              <Chip
                variant="outlined"
                size="lg"
                sx={{
                  color: "text.primary", // Ensure background contrast
                  borderColor: "primary.solidBg", // Border color
                  boxShadow: `0 0 1px 0.5px ${"primary.solidBg"}`, // Stronger glow effect
                  transition: "box-shadow 0.3s ease-in-out", // Smooth transition for the glow effect
                  "&:hover": {
                    boxShadow: `0 0 10px 5px ${"primary.solidBg"}`, // Even stronger glow on hover
                  },
                  // backgroundColor: theme.palette.background.paper, // Ensure background contrast
                }}
              >
                {genre.name}
              </Chip>
            ))}
          </Box>

          {/* Description */}
          <Box display={"grid"} gap={1}>
            <Typography level="title-lg">Description</Typography>
            <Typography level="body-md" gutterBottom>
              {movie.synopsis || "No description available."}
            </Typography>

            {/* Additional Info */}
            {/* Director */}
            <Box>
              <Box display={"flex"} gap={2}>
                <Typography level="title-lg">Director</Typography>
                <Typography
                  level="body-lg"
                  sx={{
                    color: "primary.solidBg",
                  }}
                >
                  {/* Roy */}
                  {director.name || "No director available."}
                </Typography>
              </Box>
              <Divider
                orientation="horizontal"
                sx={{
                  bgcolor: "primary.solidBg",
                  marginTop: 1,
                }}
              />
            </Box>

            {/* Actor */}
            <Typography level="title-lg">Actors</Typography>
            <Box
              sx={{
                display: "flex",
                overflowX: "auto", // Membuat elemen dapat di-scroll secara horizontal
                gap: 2, // Jarak antar item
                paddingBottom: 2, // Menambahkan sedikit padding di bawah untuk estetika
              }}
            >
              {/* Actor Card */}
              {actors.map((actor: any, index: number) => (
                <ActorCard
                  key={index}
                  name={actor.name}
                  photoUrl={actor.photoUrl}
                />
              ))}
            </Box>
          </Box>

          {/* Reviews */}
          <Box>
            {/* Add Reviews */}
            <Button
              variant="solid"
              startDecorator={<AddCommentIcon />}
              sx={{
                mb: 2,
              }}
            >
              Add My Review
            </Button>
            <Typography level="title-lg">Reviews</Typography>
            {/* List Reviews */}
            <List
              aria-labelledby="ellipsis-list-demo"
              sx={{ "--ListItemDecorator-size": "56px" }}
            >
              {/* List item */}
              {/* Belum ada Review */}
              <Typography level="body-md">No reviews available.</Typography>
              {/* {Array.from({ length: 10 }).map((_, index) => (
                <>
                  <ListItem
                    sx={{
                      alignItems: "flex-start",
                    }}
                  >
                    <ListItemDecorator>
                      <Avatar src="/static/images/avatar/1.jpg" />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="title-sm">Imanudin</Typography>
                      <Typography level="body-sm">
                        Madep kiee! Madep kiee! Madep kiee! Madep kiee! Madep
                        kiee! Madep kiee! Madep kiee! Madep kiee! Madep kiee!
                        Madep kiee! Madep kiee! Madep kiee! Madep kiee! Madep
                        kiee! Madep kiee! Madep kiee! Madep kiee! Madep kiee!
                        Madep kiee! Madep kiee! Madep kiee! Madep kiee! Madep
                        kiee! Madep kiee! Madep kiee! Madep kiee! Madep kiee!
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                        color="text.primary"
                      >
                        <StarIcon sx={{ color: "star.main" }} />
                        <Typography level="body-md">8.5</Typography>
                      </Box>
                    </ListItemContent>
                  </ListItem>
                  <ListDivider inset={"startContent"} />
                </>
              ))} */}
            </List>
          </Box>

          <Typography level="title-lg">Similar Film Recomendation</Typography>
          {/* Recomendation */}
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
        </ContentLayout>
      </MainLayout>
    </>
  );
}
