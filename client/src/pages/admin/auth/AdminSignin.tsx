import { AuthProvider, AppProvider, SignInPage } from "@toolpad/core";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// logo
import logo from "../../../assets/logo.png";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <SignInPage signIn={signIn} providers={providers} />
      </Box>
    </AppProvider>
  );
}
