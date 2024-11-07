import {
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  Link,
  Sheet,
  Typography,
  Snackbar,
} from "@mui/joy";

import React from "react";
import { useAuthStore } from "../../../contexts/authStore";

// icon
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

interface VerificationResetPasswordCodeProps {
  onSubmit?: (code: string) => void;
  onBack?: () => void;
  email: string;
}

export default function VerificationResetPasswordCode({
  onSubmit,
  onBack,
  email,
}: VerificationResetPasswordCodeProps) {
  const {
    verificationResetPasswordCode,
    forgotPassword,
    isLoading,
    message,
    error,
  } = useAuthStore();
  const [openSnackbar, setOpenSnackbar] = React.useState<{
    status: boolean;
    variant: "success" | "danger";
  }>({
    status: false,
    variant: "danger",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const code = formData.get("code") as string;
      await verificationResetPasswordCode(code);
      setOpenSnackbar({ status: true, variant: "success" });
      onSubmit && onSubmit(code);
    } catch (error) {
      setOpenSnackbar({ status: true, variant: "danger" });
    }
  };

  return (
    <React.Fragment>
      <Sheet
        sx={{
          width: 300,
          mx: "auto", // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 1,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        {/* Button back to email */}
        <Box>
          <Button
            onClick={() => {
              onBack && onBack();
            }}
            variant="outlined"
            color="primary"
          >
            Back
          </Button>
        </Box>
        <VpnKeyIcon
          sx={{
            width: 100,
            height: 100,
            color: "primary",
            mx: "auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            level="title-md"
            sx={{
              textAlign: "center",
            }}
          >
            Verification Reset Password
          </Typography>
          <Typography
            level="body-sm"
            sx={{
              textAlign: "center",
            }}
          >
            Insert your password reset code.
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <FormControl key={"reset-code"}>
              <Input name={"code"} placeholder={"Input 6 digit code..."} />
            </FormControl>
            <Button type="submit" variant="solid" color="primary">
              {isLoading ? "Verifying..." : "Verifiy Code"}
            </Button>
          </form>
        </Box>

        {/* No  receive code, resend */}
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
            },
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            level="body-sm"
            sx={{
              textAlign: "center",
            }}
          >
            Didn't receive the code?
          </Typography>
          <Link
            component="button"
            textColor={"primary.plainColor"}
            onClick={async () => {
              try {
                await forgotPassword(email);
                setOpenSnackbar({ status: true, variant: "success" });
              } catch (error) {
                setOpenSnackbar({ status: true, variant: "danger" });
              }
            }}
            sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
          >
            Resend Code
          </Link>
        </Box>
      </Sheet>
      <Snackbar
        key={"verification-reset-password"}
        open={openSnackbar.status}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant={"solid"}
        size={"md"}
        color={openSnackbar.variant}
        autoHideDuration={6000}
        onClose={() => {
          setOpenSnackbar({ status: false, variant: "danger" });
        }}
        startDecorator={<DangerousOutlinedIcon />}
        sx={{
          zIndex: 30000,
        }}
      >
        {openSnackbar.variant === "success" ? message : error}
      </Snackbar>
    </React.Fragment>
  );
}
