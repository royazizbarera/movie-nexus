import React from "react";
import { Box, Typography } from "@mui/joy";

import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Link
        to="/"
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
      </Link>
    </Box>
  );
};

export default Logo;
