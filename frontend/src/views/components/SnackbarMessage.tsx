import { Snackbar } from "@mui/joy";
import React from "react";

import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

export type Variant = "success" | "danger" | "warning";

export interface SnackBarMessageProps {
  key?: string;
  open: boolean;
  message: string;
  variant?: Variant;
  onClose?: () => void;
}

export default function SnackBarMessage({
  key,
  open,
  message,
  variant = "warning",
  onClose,
}: SnackBarMessageProps) {
  return (
    <React.Fragment>
      <Snackbar
        key={key}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant={"solid"}
        size={"md"}
        color={variant}
        autoHideDuration={6000}
        onClose={onClose}
        startDecorator={
          variant === "danger" ? (
            <DangerousOutlinedIcon />
          ) : variant === "warning" ? (
            <WarningAmberOutlinedIcon />
          ) : (
            <ThumbUpAltOutlinedIcon />
          )
        }
        sx={{
          zIndex: 30000,
        }}
      >
        {message}
      </Snackbar>
    </React.Fragment>
  );
}
