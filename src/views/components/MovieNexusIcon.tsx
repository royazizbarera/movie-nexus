import React from "react";
import { Box, Typography } from "@mui/joy";

const Logo: React.FC = () => {
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
        <Typography
        fontSize={16}
          sx={{
            pb: {
              xs: "2px",
              sm: "2px",
              md: "4px",
              lg: "4px",
              xl: "4px",
            },
            color: "primary.solidBg",
            fontWeight: "bold",
            userSelect: "none",
            mr: 1,
          }}
        >
          Movie Nexus
        </Typography>
      </a>
    </Box>
  );
};

export default Logo;
