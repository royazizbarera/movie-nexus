import { Paper } from "@mui/material";

import React, { ReactNode } from "react";

// Mendefinisikan tipe untuk props termasuk children
interface CustomContainerProps {
  children: ReactNode; // ReactNode memungkinkan berbagai tipe elemen React
}

const LayoutAddData: React.FC<CustomContainerProps> = ({ children }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#D5C4EF",
        borderRadius: 1,
      }}
    >
      {children}
    </Paper>
  );
};

export default LayoutAddData;