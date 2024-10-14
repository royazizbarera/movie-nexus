import * as React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  Drawer,
  Autocomplete,
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
  { label: "Genres", href: "/genres" },
];

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

const buttonMenuStyle = {
  marginRight: 1,
  "&:hover": {
    color: "primary.solidHoverBg",
  },
};

export default function AppAppBar() {
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

  return (
    <Box
      component="header"
      position="fixed"
      sx={{
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
                    <MenuItem onClick={goToProfilePage}>Profile</MenuItem>
                    <MenuItem>Watch List</MenuItem>
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
                  <Autocomplete
                    placeholder="Search"
                    options={top100Films}
                    sx={{ width: 300 }}
                  />
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
            <LoginForm />
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
