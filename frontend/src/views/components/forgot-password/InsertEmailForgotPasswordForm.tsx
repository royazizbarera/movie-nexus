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

// icon
import LockResetIcon from "@mui/icons-material/LockReset";
import React from "react";
import { useAuthStore } from "../../../contexts/authStore";

import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import { useNavigate } from "react-router-dom";

interface InsertEmailForgotPasswordFormProps {
  onSubmit?: (email: string) => void;
}

export default function InsertEmailForgotPasswordForm({
  onSubmit,
}: InsertEmailForgotPasswordFormProps) {
   const navigate = useNavigate();
  const { forgotPassword, isLoading, message, error } = useAuthStore();
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
      const email = formData.get("email") as string;
      await forgotPassword(email);
      setOpenSnackbar({ status: true, variant: "success" });
      onSubmit && onSubmit(email);
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
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <LockResetIcon
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
            Trouble logging in?
          </Typography>
          <Typography
            level="body-sm"
            sx={{
              textAlign: "center",
            }}
          >
            Enter your email and we'll send you a code to get reset your
            passsword.
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <FormControl key={"email"}>
              <Input name={"email"} placeholder={"Email"} />
            </FormControl>
            <Button type="submit" variant="solid" color="primary">
              {isLoading ? "Sending..." : "Send Code"}
            </Button>
          </form>

          {/* Divider Or then bellow is 'Create Account' */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Divider orientation="horizontal" sx={{ flex: 1 }}>
              OR
            </Divider>
            {/* Button Create Account */}
            <Link
              component="button"
              textColor={"primary.plainColor"}
              onClick={() => {
                navigate('/sign-up');
              }}
              sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
            >
              Create Account
            </Link>
          </Box>
        </Box>
      </Sheet>
      <Snackbar
        key={"error-forgot-password"}
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
