import { Box, Container } from "@mui/joy";
import AppAppBar from "../components/AppAppBar";

export default function MainLayout({
  children,
  appBar = false,
  giveSpace = false,
  givePadding = false,
  disablePX = false,
  mb = 4, 
  pt, // 14 rata rata penggunaan dengan app bar
  sx,
}: {
  children?: React.ReactNode;
  appBar?: boolean;
  giveSpace?: boolean;
  givePadding?: boolean;
  disablePX?: boolean;
  props?: any;
  mb?: number;
  pt?: number;
  sx?: any;
}) {
  return (
    <>
      {appBar && <AppAppBar />}
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          // overflow: "hidden",
          ...(disablePX && {
            px: {
              xs: 0,
              sm: 0,
              md: 0,
              lg: 0,
              xl: 0,
            },
          }),
          ...(!giveSpace && {
            gap: {
              xs: "unset",
              sm: "unset",
              md: "unset",
              lg: "unset",
              xl: "unset",
            },
          }),
          ...((!giveSpace && !givePadding) && {
            padding: {
              xs: 0,
              sm: 0,
              md: 0,
              lg: 0,
              xl: 0,
            },
          }),
          ...(!giveSpace && {
            maxWidth: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }),
          display: "flex",
          flexDirection: "column",
          pt: pt || 0,
          mb: mb,
          ...sx,
        }}
      >
        {appBar && <Box sx={{ pb: 8 }} />}
        {children}
      </Container>
    </>
  );
}
