import React from "react";
import { Grid } from "@mui/joy";

interface LayoutProps {
  children: React.ReactNode; // Child element(s)
}

export function CardGridLayout({ children }: LayoutProps) {
  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
      sx={{ flexGrow: 1, justifyContent: "left" }}
    >
      {children}
    </Grid>
  );
}

export function CardGridLayoutItem({ children }: LayoutProps) {
  return (
    <Grid
      xs={6}
      sm={4}
      md={4}
      lg={2}
      xl={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </Grid>
  );
}
