import * as React from "react";

import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

// Icon
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import SportsMartialArtsRoundedIcon from "@mui/icons-material/SportsMartialArtsRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";

import ColorSchemeToggle from "./ColorSchemeToggle";
import { closeSidebar } from "../utils";
import MovieNexusLogo from "./MovieNexusLogo";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../contexts/authStore";
import { Skeleton } from "@mui/joy";
import { useApprovalStore } from "../../../contexts/approvalStore";

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: "grid",
            transition: "0.2s ease",
            "& > *": {
              overflow: "hidden",
            },
          },
          open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

// list of endpoints name and path
export const menu = {
  home: { name: "home", path: "home" },
  dashboard: { name: "dashboard", path: "dashboard" },
  movies: { name: "movies", path: "movies" },
  actors: { name: "actors", path: "actors" },
  genres: { name: "genres", path: "genres" },
  countries: { name: "countries", path: "countries" },
  awards: { name: "awards", path: "awards" },
  directors: { name: "directors", path: "directors" },
  users: { name: "users", path: "users" },
  reviews: { name: "reviews", path: "reviews" },
  movies_approval: { name: "movies-approval", path: "movies-approval" },
  reviews_approval: { name: "reviews-approval", path: "reviews-approval" },
};

// selected menu
type SidebarProps = {
  selected?:
    | "dashboard"
    | "movies"
    | "actors"
    | "genres"
    | "countries"
    | "awards"
    | "directors"
    | "users"
    | "reviews"
    | "movies-approval"
    | "reviews-approval";
};

export default function Sidebar({ selected }: SidebarProps) {
  const { user, logout } = useAuthStore();

  const {
    totalUnapprovedMovies,
    totalUnapprovedReviews,
    fetchTotalUnapprovedMovies,
    fetchTotalUnapprovedReviews,
  } = useApprovalStore();

  React.useEffect(() => {
    const fetchData = async () => {
      await fetchTotalUnapprovedMovies();
      await fetchTotalUnapprovedReviews();
    };
    fetchData();
  }, [fetchTotalUnapprovedMovies, fetchTotalUnapprovedReviews]);

  const isSelected = (item: string) => selected === item;
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate("/admin/" + path);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Sheet
      className="Sidebar"
      sx={{
        display: "flex",
        position: { xs: "fixed", md: "fixed" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          // md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            // lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <MovieNexusLogo />
        <Typography level="title-lg">Movie Nexus</Typography>
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton
              onClick={() => navigateTo(menu.dashboard.path)}
              selected={isSelected(menu.dashboard.name)}
            >
              <DashboardRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => navigateTo(menu.movies.path)}
              selected={isSelected(menu.movies.name)}
            >
              <MovieRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Movies</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => navigateTo(menu.actors.path)}
              selected={isSelected(menu.actors.name)}
            >
              <SportsMartialArtsRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Actors</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => navigateTo(menu.genres.path)}
              selected={isSelected(menu.genres.name)}
            >
              <AutoAwesomeMotionRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Genres</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => navigateTo(menu.countries.path)}
              selected={isSelected(menu.countries.name)}
            >
              <PublicRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Countries</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => navigateTo(menu.awards.path)}
              selected={isSelected(menu.awards.name)}
            >
              <EmojiEventsRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Awards</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => navigateTo(menu.directors.path)}
              selected={isSelected(menu.directors.name)}
            >
              <HailRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Directors</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => navigateTo(menu.users.path)}
              selected={isSelected(menu.users.name)}
            >
              <AccountCircleRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Users</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              onClick={() => navigateTo(menu.reviews.path)}
              selected={isSelected(menu.reviews.name)}
            >
              <RateReviewRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Reviews</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <TaskAltRoundedIcon />

                  <ListItemContent>
                    <Typography level="title-sm">Approval</Typography>
                  </ListItemContent>
                  <Chip size="sm" color="primary" variant="solid">
                    {totalUnapprovedMovies + totalUnapprovedReviews}
                  </Chip>
                  <KeyboardArrowDownIcon
                    sx={[
                      open
                        ? {
                            transform: "rotate(180deg)",
                          }
                        : {
                            transform: "none",
                          },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => navigateTo(menu.movies_approval.path)}
                    selected={isSelected(menu.movies_approval.name)}
                  >
                    <ListItemContent>
                      <Typography level="title-sm">Movies Approval</Typography>
                    </ListItemContent>
                    <Chip size="sm" color="primary" variant="solid">
                      {totalUnapprovedMovies}
                    </Chip>
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    onClick={() => navigateTo(menu.reviews_approval.path)}
                    selected={isSelected(menu.reviews_approval.name)}
                  >
                    <ListItemContent>
                      <Typography level="title-sm">Reviews Approval</Typography>
                    </ListItemContent>
                    <Chip size="sm" color="primary" variant="solid">
                      {totalUnapprovedReviews}
                    </Chip>
                  </ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Avatar
          variant="outlined"
          size="sm"
          src={
            user!.photoProfile ||
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          }
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">
            <Skeleton loading={!user!.username} width="100%">
              {user!.username || "Admin 1"}
            </Skeleton>
          </Typography>
          <Typography level="body-xs">
            <Skeleton loading={!user!.email} width="100%">
              {user!.email || "admin@movienexus.com"}
            </Skeleton>
          </Typography>
        </Box>
        <IconButton
          size="sm"
          variant="plain"
          color="neutral"
          onClick={handleLogout}
        >
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}
