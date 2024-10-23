import { Box } from "@mui/joy";
import AppAppBar from "../components/AppAppBar";
import MainLayout from "../layouts/MainLayout";
import SignUpForm from "../components/SignUpForm";

export default function SignUpPage() {
  return (
    <>
      <AppAppBar />
      <MainLayout giveSpace pt={10}>
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <SignUpForm />
        </Box>
      </MainLayout>
    </>
  );
}
