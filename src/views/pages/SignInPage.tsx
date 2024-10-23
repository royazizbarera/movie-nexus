import { Box } from "@mui/joy";
import AppAppBar from "../components/AppAppBar";
import MainLayout from "../layouts/MainLayout";
import LoginForm from "../components/LoginForm";

export default function SignInPage() {
  return (
    <>
      <AppAppBar />
      <MainLayout giveSpace pt={12}>
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <LoginForm />
        </Box>
      </MainLayout>
    </>
  );
}
