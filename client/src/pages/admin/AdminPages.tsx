import { AppProvider, DashboardLayout } from "@toolpad/core";
import type { Navigation, Router, Session } from "@toolpad/core";
import React from "react";
import theme from "../../config/theme";
import { Box, Chip } from "@mui/material";

// Icon
import MovieIcon from "@mui/icons-material/Movie";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddTaskIcon from "@mui/icons-material/AddTask";
import RateReviewIcon from "@mui/icons-material/RateReview";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";

// logo
import logo from "../../assets/logo.png";
import AdminMoviesList from "./AdminMoviesList";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Management",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "movies",
    title: "Movies",
    icon: <MovieIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Reviews",
  },
  {
    segment: "approvement",
    title: "Approvement",
    icon: <AddTaskIcon />,
    action: <Chip label={10} color="primary" size="small" />,
    children: [
      {
        segment: "approvement-movies",
        title: "Movies Approvement",
        icon: <MovieFilterIcon />,
        action: <Chip label={7} color="primary" size="small" />,
      },
      {
        segment: "approvement-rating",
        title: "Rating Approvement",
        icon: <RateReviewIcon />,
        action: <Chip label={3} color="primary" size="small" />,
      },
    ],
  },
];

function AdminPages() {
  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: "Roy Aziz Barera",
      email: "royazizbarera@gmail.com",
      image: "https://avatars.githubusercontent.com/u/126170803?v=4",
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Roy Aziz Barera",
            email: "royazizbarera@gmail.com",
            image: "https://avatars.githubusercontent.com/u/126170803?v=4",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const [pathname, setPathname] = React.useState("/dashboard");

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={theme}
      branding={{
        logo: <img src={logo} alt="MUI logo" />,
        title: "Movie Nexus",
      }}
    >
      <DashboardLayout>
        <Box
          sx={{
            backgroundColor: "background.paper", // Menggunakan warna dari tema
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <AdminMoviesList />
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}

export default AdminPages;
