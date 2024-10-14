import { Box } from "@mui/joy";
import AppAppBar from "../components/AppAppBar";
import MainLayout from "../layouts/MainLayout";
import VerificationCodeForm from "../components/VerificationCodeForm";

export default function VerifyEmailPage() {
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
          <VerificationCodeForm />
        </Box>
      </MainLayout>
    </>
  );
}
