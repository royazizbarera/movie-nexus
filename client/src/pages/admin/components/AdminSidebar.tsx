import * as React from "react";
import { Link } from "react-router-dom";

// mui
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Collapse } from "@mui/material";
// import Logo from "../../../assets/logo.png";

// icon
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MovieIcon from "@mui/icons-material/Movie";
import HailIcon from "@mui/icons-material/Hail";
import PublicIcon from "@mui/icons-material/Public";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Logo from "./Logo";

// Constants for Drawer width
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

interface NavigationItem {
  path: string;
  title: string;
  icon: JSX.Element;
  children?: NavigationItem[];
}

// Navigation structure
const topNavigation: NavigationItem[] = [
  {
    path: "actors",
    title: "Actors",
    icon: <HailIcon />,
  },
  {
    path: "movies",
    title: "Movies",
    icon: <MovieIcon />,
  },
  {
    path: "countries",
    title: "Countries",
    icon: <PublicIcon />,
  },
  {
    path: "awards",
    title: "Awards",
    icon: <EmojiEventsIcon />,
  },
  {
    path: "genres",
    title: "Genres",
    icon: <AutoAwesomeMotionIcon />,
  },
  {
    path: "approvement",
    title: "Approvements",
    icon: <TaskAltIcon/>,
    children: [
      {
        path: "movie-approval",
        title: "Movies Approval",
        icon: <VideoCallIcon/>,
      },
      {
        path: "comments-approval",
        title: "Comments Approval",
        icon: <RateReviewIcon/>,
      },
    ]
  }
];

export default function AdminSidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("Actors");
  const [openMoviesMenu, setOpenMoviesMenu] = React.useState(false); // State to manage Movies submenu

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleMoviesClick = () => {
    setOpenMoviesMenu(!openMoviesMenu); // Toggle open/close state for Movies submenu
  };

  return (
    <Box>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <DrawerHeader>
          {open && <Logo />}
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {theme.direction === "rtl" ? (
              open ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )
            ) : !open ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {topNavigation.map((item, index) => (
            <React.Fragment key={item.title}>
              {item.children ? (
                <>
                  {/* Parent ListItem for Movies */}
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      onClick={handleMoviesClick} // Handle click to expand/collapse submenu
                      sx={[
                        { minHeight: 48, px: 2.5 },
                        open
                          ? { justifyContent: "initial" }
                          : { justifyContent: "center" },
                        selectedItem === item.title && {
                          backgroundColor: theme.palette.action.selected,
                        },
                      ]}
                    >
                      <ListItemIcon
                        sx={[
                          { minWidth: 0, justifyContent: "center" },
                          open ? { mr: 3 } : { mr: "auto" },
                        ]}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                      />
                      {openMoviesMenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>

                  {/* Submenu Items for Movies */}
                  <Collapse in={openMoviesMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((subItem) => (
                        <ListItemButton
                          key={subItem.title}
                          component={Link}
                          to={subItem.path}
                          sx={{ pl: 4 }} // Padding to indent submenu
                          onClick={() => handleListItemClick(subItem.title)}
                        >
                          <ListItemIcon>{subItem.icon}</ListItemIcon>
                          <ListItemText primary={subItem.title} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    sx={[
                      { minHeight: 48, px: 2.5 },
                      open
                        ? { justifyContent: "initial" }
                        : { justifyContent: "center" },
                      selectedItem === item.title && {
                        backgroundColor: theme.palette.action.selected,
                      },
                    ]}
                    onClick={() => handleListItemClick(item.title)}
                  >
                    <ListItemIcon
                      sx={[
                        { minWidth: 0, justifyContent: "center" },
                        open ? { mr: 3 } : { mr: "auto" },
                      ]}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                    />
                  </ListItemButton>
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
