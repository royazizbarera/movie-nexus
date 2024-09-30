import React from "react";
import {Box, Typography, Grid, Button} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MovieModel from "../../models/MovieModel";
import {useTheme} from "@mui/material/styles";

/* Title, Poster, and Trailer with Glassmorphism Background */
interface MovieHeroSectionProps {
    movie: MovieModel;
}

const MovieHeroSection: React.FC<MovieHeroSectionProps> = ({movie}) => {
    const theme = useTheme();

    const extractYouTubeVideoId = (url: string) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${movie.posterUrl})`, // Menggunakan prop posterUrl sebagai background
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)", // Blur untuk efek glass
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Bayangan halus
                paddingX: {xs: 2, md: 4}, // Padding responsif
                paddingBottom: {xs: 2, md: 4},
                paddingTop: 10,
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
                    justifyContent={{xs: "center", md: "space-between"}}
                    alignItems="center"
                    flexDirection={{xs: "column", md: "row"}}
                    mb={2}
                    textAlign={{xs: "center", md: "left"}}
                >
                    <Box mb={{xs: 2, md: 0}}>
                        <Typography variant="h4" fontWeight="bold">
                            {movie.title}
                        </Typography>
                        <Typography variant="subtitle1">
                            {new Date(movie.releaseDate).getFullYear()} ・ {movie.rating.toFixed(2)}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={4}>
                        {/* IMDb Rating */}
                        <Box display="flex" alignItems="center" gap={1}>
                            <StarIcon sx={{color: theme.palette.ratingColor.main}}/>
                            <Typography variant="h6">{movie.rating.toFixed(2)}/10</Typography>
                        </Box>
                        {/* Your Rating */}
                        {/* Text Button Rating */}
                        <Box>
                            <Button
                                color="secondary"
                                variant="text"
                                startIcon={<StarBorderIcon/>}
                            >
                                Rate
                            </Button>
                        </Box>
                        {/* Popularity */}
                        <Box display="flex" alignItems="center" gap={1}>
                            <TrendingUpIcon sx={{color: "#0F9D58"}}/>
                            <Typography variant="h6">666</Typography>
                            <Typography variant="body2">+232</Typography>
                        </Box>
                    </Box>
                </Box>
                {/* Poster and Trailer */}
                <Grid
                    container
                    spacing={2}
                    alignItems="stretch"
                    direction={{xs: "column", md: "row"}}
                >
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
                                aspectRatio: {xs: "3/4", md: "2/3"}, // Misalnya, 2:3 untuk poster film di layar besar dan 3:4 di layar kecil
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
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${extractYouTubeVideoId(movie.videoUrl)}?autoplay=1&mute=0&controls=1`}
                                allow="autoplay; encrypted-media; fullscreen"
                                allowFullScreen
                                style={{
                                    borderRadius: "8px",
                                    objectFit: "cover", // Ensuring the video fits well
                                    border: "none",     // Removing border for a cleaner look
                                }}
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default MovieHeroSection;
