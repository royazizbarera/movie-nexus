import React from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import MovieModel from "../../models/temp/MovieModel";
import { Link } from "react-router-dom";

interface BannerContentProps {
  movie: MovieModel;
}

const BannerContent: React.FC<BannerContentProps> = ({ movie }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "3%",
        left: "5vw",
        width: "100%",
        height: "100%",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: "2rem",
      }}
    >
      <Box sx={{ flexShrink: 0, mr: 3 }}>
        <CardMedia
          component="img"
          image={movie.posterUrl}
          alt={movie.title}
          sx={{
            width: { xs: "100px", md: "150px" },
            borderRadius: "8px",
          }}
        />
      </Box>
      <Box sx={{ maxWidth: "600px" }}>
        <Typography variant="h4" sx={{ color: "white", mb: 1 }}>
          {movie.title}
        </Typography>
        <Typography variant="body1" sx={{ color: "white", mb: 1 }}>
          {movie.year}
        </Typography>
        <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
          {movie.description}
        </Typography>
        <Link to="detail-movie">
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontSize: "1.2rem",
              padding: "10px 20px",
            }}
          >
            Selengkapnya
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default BannerContent;
