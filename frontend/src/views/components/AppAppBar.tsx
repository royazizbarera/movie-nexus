import * as React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  Drawer,
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  Sheet,
  Avatar,
  Typography,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
} from "@mui/joy";

import MovieNexusIcon from "./MovieNexusIcon";

import MenuIcon from "@mui/icons-material/Menu";
import ModeToggle from "./ModeTogle";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useAuthStore } from "../../contexts/authStore";

const appBarContent = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "Populars", href: "/populars" },
  { label: "Actors", href: "/actors" },
];

const buttonMenuStyle = {
  marginRight: 1,
  "&:hover": {
    color: "primary.solidHoverBg",
  },
};

export default function AppAppBar() {
  const [hidden, setHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);
  const [openSignIn, setOpenSignIn] = React.useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = React.useState<boolean>(false);

  // Use the auth context to get user information
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handlelogout = () => {
    logout();
  };

  const goToProfilePage = () => {
    navigate("/user-profile");
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHidden(scrollY > lastScrollY.current);
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="header"
      position="fixed"
      sx={{
        display: hidden ? "none" : "block",
        mt: 4,
        width: "100%",
        zIndex: 1100,
        boxShadow: "none",
        bgcolor: "transparent",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="lg">
        {/* Toolbar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: `calc(8px + 8px)`,
            border: "1px solid",
            padding: "8px 16px",
            backdropFilter: "blur(24px)",
            borderColor: "neutral.outlinedBorder",
            backgroundColor: "background.backdrop",
          }}
        >
          {/* Left Side - Menu and Navigation Buttons */}
          <MovieNexusIcon />

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
              alignItems: "center",
            }}
          >
            {appBarContent.map((content, index) => (
              <Link to={content.href} key={index}>
                <Button variant="plain" color="neutral" sx={buttonMenuStyle}>
                  {content.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Right Side - Conditional Rendering for Login/Sign Up or User Profile */}
          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
            }}
          >
            {isAuthenticated ? (
              // If user is logged in, show profile and logout button
              <>
                <Dropdown>
                  <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{
                      root: { variant: "solid", color: "neutral" },
                    }}
                    sx={{
                      borderRadius: 40,
                      mr: 2,
                    }}
                  >
                    <Avatar
                      variant="plain"
                      alt={user?.username || "User"}
                      src={user?.photoProfile}
                    />
                  </MenuButton>
                  <Menu>
                    {user?.role === "admin" ? (
                      <MenuItem
                        onClick={() => {
                          navigate("/admin");
                        }}
                      >
                        CMS
                      </MenuItem>
                    ) : null}
                    <MenuItem onClick={goToProfilePage}>Profile</MenuItem>
                    <MenuItem onClick={handlelogout}>Logout</MenuItem>
                  </Menu>
                </Dropdown>

                <ModeToggle />
              </>
            ) : (
              // If user is not logged in, show Login and Sign Up buttons
              <>
                <Button
                  onClick={() => setOpenSignIn(true)}
                  variant="solid"
                  color="primary"
                  sx={{ marginRight: 1 }}
                >
                  Login
                </Button>
                <ModeToggle />
              </>
            )}
          </Box>

          {/* Mobile Drawer */}
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <React.Fragment>
              <IconButton
                variant="outlined"
                color="neutral"
                onClick={() => setOpenSidebar(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={openSidebar} onClose={() => setOpenSidebar(false)}>
                <ModalClose />
                <DialogTitle>Menu</DialogTitle>
                <DialogContent sx={{ pb: 1 }}>
                  <List
                    size="lg"
                    component="nav"
                    sx={{
                      flex: "none",
                      fontSize: "xl",
                      justifyContent: "left",
                    }}
                  >
                    {appBarContent.map((content, index) => (
                      <Link to={content.href} key={index}>
                        <Button
                          variant="plain"
                          color="neutral"
                          sx={buttonMenuStyle}
                        >
                          {content.label}
                        </Button>
                      </Link>
                    ))}
                  </List>
                </DialogContent>

                {/* Right Side - Buttons for Login and Sign Up */}
                <Box
                  sx={{
                    flexGrow: 0,
                    display: "flex",
                    padding: 2,
                  }}
                >
                  {isAuthenticated ? (
                    <>
                      <Avatar
                        alt={user?.username || "User"}
                        src={user?.photoProfile}
                        sx={{ marginRight: 1 }}
                      />
                      <Typography level="body-md" sx={{ marginRight: 2 }}>
                        {user?.username}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="neutral"
                        sx={{ marginRight: 1 }}
                        onClick={logout}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="soft"
                        color="neutral"
                        sx={{ marginRight: 1 }}
                        onClick={() => setOpenSignIn(true)}
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => setOpenSignUp(true)}
                        variant="solid"
                        color="primary"
                        sx={{ marginRight: 1 }}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </Box>
              </Drawer>
            </React.Fragment>
          </Box>
        </Box>
      </Container>

      {/* Login and Sign Up Modals */}
      <React.Fragment>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={openSignIn}
          onClose={() => setOpenSignIn(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <LoginForm onSuccessfulLogin={() => setOpenSignIn(false)} />
          </Sheet>
        </Modal>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={openSignUp}
          onClose={() => setOpenSignUp(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <SignUpForm />
          </Sheet>
        </Modal>
      </React.Fragment>
    </Box>
  );
}
