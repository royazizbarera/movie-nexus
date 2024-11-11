import {
  Box,
  Breadcrumbs,
  CssBaseline,
  CssVarsProvider,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
  Grid,
  CircularProgress,
} from "@mui/joy";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import BreadcrumbsHome from "../components/BreadcrumbsHome";
import BreadcrumbsDashboard from "../components/BreadcrumbsDashboard";
import React from "react";

// Icon
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";

import SportsMartialArtsRoundedIcon from "@mui/icons-material/SportsMartialArtsRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import { useNavigate } from "react-router-dom";
import movieController from "../../../controllers/MovieController";
import actorController from "../../../controllers/ActorController";
import genreController from "../../../controllers/GenreController";
import countryController from "../../../controllers/CountryController";
import awardController from "../../../controllers/AwardController";
import directorController from "../../../controllers/DirectorController";
import userController from "../../../controllers/UserController";
import reviewController from "../../../controllers/ReviewController";

const iconStyle = {
  width: 40,
  height: 40,
};

interface CardTotalItemsProps {
  totalItems: number;
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

function CardTotalItems({
  totalItems,
  title,
  icon,
  onClick,
}: CardTotalItemsProps) {
  return (
    <Card variant="solid" color="primary" invertedColors>
      <CardContent orientation="horizontal">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
          }}
        >
          {icon}
        </Box>
        <CardContent>
          <Typography level="title-md">{title}</Typography>
          {totalItems < 0 ? (
            <CircularProgress />
          ) : (
            <Typography level="h2" color="success">
              {totalItems >= 0 ? totalItems : "Loading..."}
            </Typography>
          )}
        </CardContent>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} variant="solid" size="sm">
          View table
        </Button>
      </CardActions>
    </Card>
  );
}

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [totalItems, setTotalItems] = React.useState({
    movies: -1,
    actors: -1,
    genres: -1,
    countries: -1,
    awards: -1,
    directors: -1,
    users: -1,
    reviews: -1,
  });

  React.useEffect(() => {
    const fetchTotalItems = async () => {
      try {
        const movies = await movieController.totalMovies();
        const actors = await actorController.totalActors();
        const genres = await genreController.totalGenres();
        const countries = await countryController.totalCountries();
        const awards = await awardController.totalAwards();
        const directors = await directorController.totalDirectors();
        const users = await userController.totalUsers();
        const reviews = await reviewController.totalReviews();

        setTotalItems({
          movies: movies.data,
          actors: actors.data,
          genres: genres.data,
          countries: countries.data,
          awards: awards.data,
          directors: directors.data,
          users: users.data,
          reviews: reviews.data,
        });
      } catch (error) {
        setTotalItems({
          movies: -1,
          actors: -1,
          genres: -1,
          countries: -1,
          awards: -1,
          directors: -1,
          users: -1,
          reviews: -1,
        });
      }
    };
    fetchTotalItems();
  }, []);

  const itemData = [
    {
      totalItems: totalItems.movies,
      title: "Movies",
      icon: <MovieRoundedIcon sx={iconStyle} />,
      onClick: () => navigate("/admin/movies"),
    },
    {
      totalItems: totalItems.actors,
      title: "Actors",
      icon: <SportsMartialArtsRoundedIcon sx={iconStyle} />,
      onClick: () => navigate("/admin/actors"),
    },
    {
      totalItems: totalItems.genres,
      title: "Genres",
      icon: <AutoAwesomeMotionRoundedIcon sx={iconStyle} />,
      onClick: () => navigate("/admin/genres"),
    },
    {
      totalItems: totalItems.countries,
      title: "Countries",
      icon: <PublicRoundedIcon sx={iconStyle} />,
      onClick: () => navigate("/admin/countries"),
    },
    {
      totalItems: totalItems.awards,
      title: "Awards",
      icon: <EmojiEventsRoundedIcon sx={iconStyle} />,
      onClick: () => navigate("/admin/awards"),
    },
    {
      totalItems: totalItems.directors,
      title: "Directors",
      icon: <TaskAltRoundedIcon sx={iconStyle} />,
      onClick: () => navigate("/admin/directors"),
    },
    {
      totalItems: totalItems.users,
      title: "Users",
      icon: <AccountCircleRoundedIcon sx={iconStyle} />,
      onClick: () => navigate("/admin/users"),
    },
    {
      totalItems: totalItems.reviews,
      title: "Reviews",
      icon: <RateReviewRoundedIcon sx={iconStyle} />,
      onClick: () => navigate("/admin/reviews"),
    },
  ];

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Header />
        <Sidebar selected="dashboard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 3, mx: 6 }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="small" />}
          sx={{ pl: 0 }}
        >
          <BreadcrumbsHome />
          <BreadcrumbsDashboard />
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            mb: 1,
            gap: 1,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            flexWrap: "wrap",
            justifyContent: "space-between",
            mx: 6,
          }}
        >
          <Grid container spacing={2}>
            {itemData.map((item, index) => (
              <Grid xs={12} sm={6} md={4} lg={3} key={index}>
                <CardTotalItems
                  totalItems={item.totalItems}
                  title={item.title}
                  icon={item.icon}
                  onClick={item.onClick}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
