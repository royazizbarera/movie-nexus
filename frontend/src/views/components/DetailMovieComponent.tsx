import {
  Box,
  Button,
  Chip,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemDecorator,
  Avatar,
  ListItemContent,
  DialogTitle,
  ModalDialog,
  Modal,
  Divider,
  DialogContent,
  DialogActions,
  Select,
  Option,
  Input,
} from "@mui/joy";

// icon
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddCommentIcon from "@mui/icons-material/AddComment";

import MainLayout from "../layouts/MainLayout";
import ContentLayout from "../layouts/ContentLayout";
import BackgroundTrailer from "./movies/BackgroundTrailer";
import VideoTrailer from "./movies/VideoTrailer";
import ActorCard from "./ActorCard";
import React from "react";
import { MovieModel } from "../../models/MovieModel";
import { GenreModel } from "../../models/GenreModel";
import { ActorModel } from "../../models/ActorModel";
import { DirectorModel } from "../../models/DirectorModel";
import { ReviewModel } from "../../models/ReviewModel";
import { ReviewsRounded } from "@mui/icons-material";
import reviewController from "../../controllers/ReviewController";
import { useAuthStore } from "../../contexts/authStore";

interface DetailMovieComponentProps {
  movie: MovieModel;
}

export default function DetailMovieComponent({
  movie = {} as MovieModel,
}: DetailMovieComponentProps) {
  const { user } = useAuthStore();
  // modal untuk rating
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState<number | null>(null);
  const [reviewContent, setReviewContent] = React.useState<string>("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReview = () => {
    const submitReview = async () => {
      try {
        const newReview: ReviewModel = {
          id: 0,
          movieId: movie.id,
          content: reviewContent,
          rating: rating || 0,
        };
        const response = await reviewController.addReview(newReview);
        console.log(response);
        handleClose();
        // reload page
        window.location.reload();
      } catch (error) {
        console.error("Failed to add review: ", error);
      }
    };
    submitReview();
  };

  const [genres, setGenres] = React.useState<GenreModel[]>([]);
  const [actors, setActors] = React.useState<ActorModel[]>([]);
  const [director, setDirector] = React.useState<DirectorModel | null>(null);
  const [reviews, setReviews] = React.useState<ReviewModel[] | []>([]);

  React.useEffect(() => {
    console.info("DetailMovieComponents: ", movie);
    console.info("DetailMovieComponents genres: ", movie?.genres);
    console.info("DetailMovieComponents actors: ", movie?.actors);
    // console.info("DetailMovieComponents genres 1: ", movie?.genres[0].genre);
    if (movie && movie.genres && movie.actors) {
      setGenres(movie.genres || []);
      setDirector(movie.director || null);
      setActors(movie.actors || []);
      setReviews(movie.reviews || []);
    }
    // setReviews(movie.reviews);
  }, [movie]);

  return (
    <React.Fragment>
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
                  mt={2}
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
                      {new Date(movie.releaseDate).getFullYear()} ・{" "}
                      {movie.rating}
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
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1, // Jarak antar chip
            }}
          >
            {genres?.map((genreObj: GenreModel, index: number) => (
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
                {String(genreObj?.name)}
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
                  {director?.name || "No director available."}
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
              {actors?.map((actor: any, index: number) => (
                <ActorCard
                  key={index}
                  id={actor.id}
                  name={actor.name}
                  photoUrl={actor.photoUrl}
                />
              ))}
            </Box>
          </Box>

          {/* Reviews */}
          <Box>
            {/* Add Reviews */}
            {user && (user.role === "writer" || user.role === "admin") && (
              <Button
                variant="solid"
                startDecorator={<AddCommentIcon />}
                onClick={handleOpen}
                sx={{
                  mb: 2,
                }}
              >
                Add My Review
              </Button>
            )}

            <Typography level="title-lg">Reviews</Typography>
            {/* List Reviews */}
            <List
              aria-labelledby="ellipsis-list-demo"
              sx={{ "--ListItemDecorator-size": "56px" }}
            >
              {/* List item */}
              {/* Belum ada Review */}
              {!reviews && (
                <Typography level="body-md">No reviews available.</Typography>
              )}
              {/* Looping from reviews */}
              {reviews &&
                reviews.length > 0 &&
                reviews.map((review: ReviewModel, index: number) => (
                  <ListItem
                    sx={{
                      alignItems: "flex-start",
                    }}
                  >
                    <ListItemDecorator>
                      <Avatar src={"/static/images/avatar/1.jpg"} />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="title-sm">{review.id}</Typography>
                      <Typography level="body-sm">{review.content}</Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                        color="text.primary"
                      >
                        <StarIcon sx={{ color: "star.main" }} />
                        <Typography level="body-md">{review.rating}</Typography>
                      </Box>
                    </ListItemContent>
                  </ListItem>
                ))}
            </List>

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
          </Box>
        </ContentLayout>
      </MainLayout>
      {/* Review Modal */}
      <Modal open={open} onClose={handleClose}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <ReviewsRounded />
            Review Movie
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Typography level="title-md">Add your review</Typography>
          </DialogContent>
          {/* Rating Dropdown */}
          <Box sx={{ mt: 2 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>
              Rating (1 - 10)
            </Typography>
            <Select
              placeholder="Select rating"
              value={rating}
              onChange={(event, newValue) => setRating(Number(newValue))}
              sx={{
                width: "auto",
                maxWidth: "100%",
                zIndex: 30000,
              }}
            >
              {Array.from({ length: 10 }, (_, index) => (
                <Option value={index + 1}>{index + 1}</Option>
              ))}
            </Select>
          </Box>

          {/* Content Input*/}
          <Box sx={{ mt: 2 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>
              Review
            </Typography>
            <Input
              value={reviewContent}
              onChange={(event) => setReviewContent(event.target.value)}
              placeholder="Write your review here..."
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
            />
          </Box>

          <DialogActions>
            <Button variant="solid" color="warning" onClick={handleReview}>
              Review
            </Button>
            <Button variant="plain" color="neutral" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
