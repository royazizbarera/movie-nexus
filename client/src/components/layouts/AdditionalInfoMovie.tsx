import React from "react";
import { Box, Typography, Divider, useTheme } from "@mui/material";

// Define the prop types
interface AdditionalInfoProps {
  title: string;
  info: string[]; // Assuming the movie object is passed to access the director's name
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ title, info }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="body2">
        <strong>{title}</strong>{" "}
        <Box
          component="span"
          color={theme.palette.commonColors.commonBlue.main}
        >
          {/* Looping info */}
          {info.map((item, index) => (
            <span key={index}>{item}
            {index < info.length - 1 && " • "}
            </span>
          ))}
        </Box>
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          bgcolor: theme.palette.primary.main,
          marginTop: 1,
        }}
      />
    </Box>
  );
};

export default AdditionalInfo;
