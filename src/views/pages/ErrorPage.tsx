import React from "react";
import { Box, Button, Container, Typography } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="soft">404</Typography>
            <Typography variant="soft">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Link to="/">
              <Button variant="soft">Back Home</Button>
            </Link>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
