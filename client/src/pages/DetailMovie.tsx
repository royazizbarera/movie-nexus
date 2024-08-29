import React from "react";
import {
  Box,
  Typography,
  Rating,
} from "@mui/material";
import { MAIN_PADING } from "../config/constants";
import MovieModel from "../model/MovieModel";
import MovieHeroSection from "../components/MovieHeroSection";
import MovieDescriptionSection from "../components/MovieDescriptionSection";
import ActorListSection from "../components/ActorListSection";

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
      {/* Title, Poster, and Trailer with Glassmorphism Background */}
      <MovieHeroSection movie={movie}/>

      {/* Movie Description */}
      <MovieDescriptionSection movie={movie} />
      
      {/* Actor List Section */}
      <ActorListSection actors={movie.actors} />

      {/* Review Section */}
      <ReviewSection reviews={movie.reviews} />
    </Box>
  );
};





interface ReviewSectionProps {
  reviews: {
    user: string;
    date: string;
    rating: number;
    comment: string;
  }[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <Box padding={MAIN_PADING}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">
          ({reviews.length}) People think about this movie
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" marginRight={1}>
            Filtered by:
          </Typography>
          <Rating value={4.5} precision={0.5} readOnly />
        </Box>
      </Box>

      {/* Daftar Ulasan */}
      <Box mt={2}>
        {reviews.map((review, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="flex-start"
            paddingY={1}
            borderBottom="1px solid #e0e0e0"
          >
            <Box
              component={"img"}
              src="https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_FMjpg_UY2048_.jpg"
              sx={{
                objectFit: "cover",
                width: "40px",
                height: "40px",
                bgcolor: "#941B1B",
                borderRadius: "50%",
                marginRight: 2,
              }}
            />
            <Box flex="1" textAlign={"left"}>
              <Typography variant="body2" fontWeight="bold">
                {review.user} ({review.date}) said:
              </Typography>
              <Rating value={review.rating} size="small" readOnly />
              <Typography variant="body2">{review.comment}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DetailMovie;
