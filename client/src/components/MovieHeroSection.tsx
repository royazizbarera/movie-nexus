import React from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import MovieModel from "../model/MovieModel";
import { MAIN_PADING } from "../config/constants";
import MovieModel from "../model/MovieModel";

/* Title, Poster, and Trailer with Glassmorphism Background */
interface MovieHeroSectionProps {
  movie: MovieModel;
}

const MovieHeroSection: React.FC<MovieHeroSectionProps> = ({ movie }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${movie.posterUrl})`, // Menggunakan prop posterUrl sebagai background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(10px)", // Blur untuk efek glass
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Bayangan halus
        padding: MAIN_PADING,
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay hitam semi-transparan untuk membuat teks lebih jelas
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Box position="relative" zIndex={1}>
        {/* Title and Info with Ratings */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {movie.title}
            </Typography>
            <Typography variant="subtitle1">
              {movie.year} ・ {movie.rating} ・ {movie.duration}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={4}>
            {/* IMDb Rating */}
            <Box display="flex" alignItems="center" gap={1}>
              <StarIcon sx={{ color: "#f5c518" }} />
              <Typography variant="h6">{movie.rating}/10</Typography>
              <Typography variant="body2">{movie.votes}</Typography>
            </Box>
            {/* Your Rating */}
            <Box display="flex" alignItems="center" gap={1}>
              <StarBorderIcon sx={{ color: "#fff" }} />
              <Typography variant="h6" color="#fff">
                Rate
              </Typography>
            </Box>
            {/* Popularity */}
            <Box display="flex" alignItems="center" gap={1}>
              <TrendingUpIcon sx={{ color: "#0F9D58" }} />
              <Typography variant="h6">666</Typography>
              <Typography variant="body2" color="textSecondary">
                +232
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Poster and Trailer */}
        <Grid container spacing={2} alignItems="stretch">
          {/* Poster Image */}
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              src={movie.posterUrl} // URL gambar poster dari prop
              alt={`${movie.title} Poster`}
              width="100%"
              height="100%" // Menetapkan tinggi penuh agar sejajar dengan trailer
              borderRadius="8px"
              sx={{
                objectFit: "cover",
                aspectRatio: "2/3", // Misalnya, 2:3 untuk poster film
              }}
            />
          </Grid>

          {/* Trailer */}
          <Grid item xs={12} md={9}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%" // Menetapkan tinggi penuh agar sejajar dengan poster
              borderRadius="8px"
              overflow="hidden"
              bgcolor="#333"
            >
              <video
                width="100%"
                height="100%"
                controls
                autoPlay
                muted
                style={{
                  borderRadius: "8px",
                  objectFit: "cover", // Menyesuaikan video agar mengisi area dengan baik
                }}
              >
                <source
                  src={movie.trailerUrl}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};


export default MovieHeroSection;