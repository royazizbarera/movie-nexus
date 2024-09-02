import { AuthProvider, AppProvider, SignInPage } from "@toolpad/core";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Toolbar } from "@mui/material";

// logo
import logo from "../../../assets/logo.png";
import Logo from "../../../components/elements/Logo";
import { Navigation } from "@mui/icons-material";
import SearchBar from "../../../components/elements/SearchBar";
import ProfileMenu from "../../../components/widgets/ProfileMenu";

const providers = [
  { id: "credentials", name: "Email and Password" },
  { id: "github", name: "GitHub" },
  { id: "google", name: "Google" },
];

const signIn: (provider: AuthProvider, formData: FormData) => void = async (
  provider,
  formData
) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      alert(
        `Signing in with "${provider.name}" and credentials: ${formData.get("email")}, ${formData.get("password")}`
      );
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

function header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        padding: "0 0.5rem",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Logo />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <Logo />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <SearchBar />
          <ProfileMenu />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default function AdminSignin() {
  const theme = useTheme();
  return (
    // preview-start
    <AppProvider
      theme={theme}
      branding={{
        logo: <img src={logo} alt="MUI logo" style={{ height: 56 }} />,
        title: "Movie Nexus",
      }}
    >
      <Box>
        {header()}
        <Box
          sx={{
            backgroundColor: "background.paper",
            // color: "background.paper",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <SignInPage signIn={signIn} providers={providers} />
        </Box>
      </Box>
    </AppProvider>
  );
}
