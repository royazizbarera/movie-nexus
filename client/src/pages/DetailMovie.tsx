import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  Grid,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import { MAIN_PADING } from "../config/constants";

const DetailCard: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        borderRadius: "8px",
      }}
    >
      {/* Title, Poster, and Trailer with Glassmorphism Background */}
      <HeroSection />

      {/* Movie Description */}
      <Box paddingX={MAIN_PADING}>
        <Box mt={4}>
          <Stack direction="row" spacing={1} marginBottom={2}>
            <Chip label="Superhero" variant="outlined" color="primary" />
            <Chip label="Urban Adventure" variant="outlined" color="primary" />
            <Chip label="Action" variant="outlined" color="primary" />
            <Chip label="Adventure" variant="outlined" color="primary" />
            <Chip label="Sci-Fi" variant="outlined" color="primary" />
          </Stack>

          <Typography variant="body1" gutterBottom>
            After Peter Parker is bitten by a genetically altered spider, he
            gains newfound, spider-like powers and ventures out to save the city
            from the machinations of a mysterious reptilian foe.
          </Typography>

          {/* Additional Info */}
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap={2}
            mt={2}
          >
            <Box>
              <Typography variant="body2">Director:</Typography>
              <Typography variant="body2">Marc Webb</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Writers:</Typography>
              <Typography variant="body2">
                James Vanderbilt ・ Alvin Sargent ・ Steve Kloves
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Side Buttons */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt={3}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button variant="outlined" startIcon={<PlayArrowIcon />} fullWidth>
              37 VIDEOS
            </Button>
            <Button variant="outlined" startIcon={<PlayArrowIcon />} fullWidth>
              99+ PHOTOS
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              fullWidth
            >
              Add to Watchlist
            </Button>
            <Button variant="contained" color="primary" fullWidth>
              Streaming on Prime Video
            </Button>
          </Box>
        </Box>
      </Box>
      <ActorList />
      <ReviewSection />
    </Box>
  );
};

/* Title, Poster, and Trailer with Glassmorphism Background */
const HeroSection = () => {
  return (
    <Box
        sx={{
          backgroundImage: `url('https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg')`, // Gambar poster sebagai background
          backgroundSize: "cover",
          backgroundPosition: "center",
          // borderRadius: "16px",
          backdropFilter: "blur(10px)", // Blur untuk efek glass
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Bayangan halus
          // border: "1px solid rgba(255, 255, 255, 0.3)", // Border semi-transparan
          padding: MAIN_PADING,
          marginBottom: "2rem",
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
            px={2}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold">
                The Amazing Spider-Man
              </Typography>
              <Typography variant="subtitle1">
                2012 ・ PG-13 ・ 2h 16m
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={4}>
              {/* IMDb Rating */}
              <Box display="flex" alignItems="center" gap={1}>
                <StarIcon sx={{ color: "#f5c518" }} />
                <Typography variant="h6">6.9/10</Typography>
                <Typography variant="body2">712K</Typography>
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
                src="https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg" // URL gambar poster
                alt="The Amazing Spider-Man Poster"
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
                    src="https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1724989031&Signature=LoB5kV6k2unILP~mDfqUbkz2~l~tqMg2biObfCsu7eVLNf5HxOjAeGuGNA6o7dYJU2lWiqhd9at6yXS5rqMdaj3GCj88poXziQ7PcouDDlLmgUuosWgwAI8dCqXyp5rKLs~c6DFgPUt8cwubRbpSX1qQjzj1Abn22cSzp4heIQZ0XaOPLnsY~2EIK152OnyaqLx-xkN83KxtAVdiIQ5jQozeAOiQroY7bdux8VbsArIk6bplUErGJsz73hx-PXvqDvat5wXNS9RxbSBbHnJI10yhWpZE6747PWiPZ1E2VhDPGJN7jAsP~gw-RoYpH4C0U0qv4uZBB2CajTFrBaoymg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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
}



const ActorList = () => {
  const actors = [
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
    "Andrew Garfield",
    "Emma Stone",
  ];

  return (
    <Box
      padding={MAIN_PADING}
      sx={{
        display: "flex",
        overflowX: "scroll",
        // padding: "1rem",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none", // For Firefox
      }}
    >
      <Stack direction="row" spacing={2}>
        {actors.map((actor, index) => (
          <Box key={index} textAlign="center">
            <Box
              component={"img"}
              src={
                actor === "Emma Stone"
                  ? "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_FMjpg_UY2048_.jpg"
                  : "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UY414_CR1,0,280,414_.jpg"
              }
              sx={{
                width: "100px",
                height: "auto",
                aspectRatio: "2/3", // 2:3 aspect ratio for better image fit
                borderRadius: "8px",
                objectFit: "cover", // Ensure the image covers the box properly
                mb: 1,
              }}
            />
            <Typography variant="body2">{actor}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const ReviewSection = () => {
  const reviews = [
    {
      user: "Nara",
      date: "4/4/2014",
      rating: 5,
      comment: "It is a wonderful drama! I Love it so much!!!!",
    },
    {
      user: "Nara",
      date: "4/4/2014",
      rating: 5,
      comment: "It is a wonderful drama! I Love it so much!!!!",
    },
    {
      user: "Nara",
      date: "4/4/2014",
      rating: 4,
      comment: "It is a wonderful drama! I Love it so much!!!!",
    },
    {
      user: "Nara",
      date: "4/4/2014",
      rating: 5,
      comment: "It is a wonderful drama! I Love it so much!!!!",
    },
  ];

  return (
    <Box padding={MAIN_PADING}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">
          ({reviews.length}) People think about this drama
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

export default DetailCard;
