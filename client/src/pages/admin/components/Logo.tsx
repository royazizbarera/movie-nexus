import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import NetflixLogo from "../../../assets/logo.png";

const Logo: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <a
        href="/"
        draggable
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <img
          src={NetflixLogo}
          alt="Movie Nexus"
          style={{ height: 33.5, pointerEvents: "none" }}
        />
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
            userSelect: "none",
          }}
        >
          Movie Nexus
        </Typography>
      </a>
    </Box>
  );
};

export default Logo;
