import {
  Box,
  Button,
  FormControl,
  Input,
  Sheet,
  Typography,
  Snackbar,
  IconButton,
} from "@mui/joy";

import React from "react";
import { useAuthStore } from "../../../contexts/authStore";

// icon
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface ResetPasswordFormProps {
  code: string;
  email: string;
  onSubmit?: () => void;
}

export default function ResetPasswordForm({
  code,
  email,
  onSubmit,
}: ResetPasswordFormProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const { updatePassword, isLoading, message, error } = useAuthStore();
  const [openSnackbar, setOpenSnackbar] = React.useState<{
    status: boolean;
    variant: "success" | "danger";
    message?: string;
  }>({
    status: false,
    variant: "danger",
    message: "",
  });

  // verify password is same
  const verifyPassword = (password: string, rePassword: string) => {
    return password === rePassword;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const password = formData.get("pwd-1") as string;
      const rePassword = formData.get("pwd-2") as string;

      // check if password is empty
      if (!password || !rePassword) {
        setOpenSnackbar({
          status: true,
          variant: "danger",
          message: "Password is required",
        });
        return;
      }

      if (!verifyPassword(password, rePassword)) {
        setOpenSnackbar({
          status: true,
          variant: "danger",
          message: "Password does not match",
        });
        return;
      }
      // if length is less than 6
      if (password.length < 6) {
        setOpenSnackbar({
          status: true,
          variant: "danger",
          message: "Password must be at least 6 characters",
        });
        return;
      }
      await updatePassword({
        email,
        newPassword: password,
        verificationCode: code,
      });
      setOpenSnackbar({ status: true, variant: "success", message: message });
      onSubmit && onSubmit();
    } catch (err) {
      setOpenSnackbar({
        status: true,
        variant: "danger",
        message: String(error),
      });
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
        <LockIcon
          sx={{
            width: 60,
            height: 60,
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
            Enter new password
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <FormControl key={"pwd-1"}>
              <Input
                name={"pwd-1"}
                type={showPassword ? "text" : "password"}
                placeholder={"Enter your new password"}
                required
                endDecorator={
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                }
              />
            </FormControl>
            <FormControl key={"pwd-2"}>
              <Input
                name={"pwd-2"}
                type={showPassword ? "text" : "password"}
                placeholder={"Re-Enter your new password"}
                required
                endDecorator={
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                }
              />
            </FormControl>
            <Button type="submit" variant="solid" color="primary">
              {isLoading ? "Updating password..." : "Update Password"}
            </Button>
          </form>
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
        {error ? String(error) : openSnackbar.message}
      </Snackbar>
    </React.Fragment>
  );
}
