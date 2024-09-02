import { AppProvider, DashboardLayout } from "@toolpad/core";
import type { Navigation, Router, Session } from "@toolpad/core";
import React from "react";
import theme from "../../config/theme";
import { Box, Chip } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";

// Icons
import MovieIcon from "@mui/icons-material/Movie";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddTaskIcon from "@mui/icons-material/AddTask";
import RateReviewIcon from "@mui/icons-material/RateReview";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";

// logo
import logo from "../../assets/logo.png";

const rootSegment = "admin/";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Management",
  },
  {
    segment: rootSegment + "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: rootSegment + "movies",
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
    segment: rootSegment.split("/")[0],
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

  const navigate = useNavigate();

  const [pathname, setPathname] = React.useState("admin/dashboard");

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        setPathname(String(path));
        navigate(path); // Use React Router's navigate function
      },
    };
  }, [pathname, navigate]);

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
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Outlet />
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}

export default AdminPages;
