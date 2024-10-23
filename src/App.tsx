import React, { useEffect } from "react";
import { Box, CircularProgress, CssBaseline, CssVarsProvider } from "@mui/joy";
import theme from "./configs/theme";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routers/RoutesApp";
// import "@fontsource/quicksand";
import "@fontsource/roboto";
import ScrollToTop from "./views/components/ScrollToTop";
import { useAuthStore } from "./contexts/authStore";
import MainLayout from "./views/layouts/MainLayout";

function App() {
  const { checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (isCheckingAuth)
    return (
      <CssVarsProvider theme={theme} defaultMode="dark" disableTransitionOnChange>
        <CssBaseline />
        <MainLayout>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <CircularProgress variant="plain" color="primary" />
          </Box>
        </MainLayout>
      </CssVarsProvider>
    );
  return (
    <BrowserRouter>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <RoutesApp />
      </CssVarsProvider>
    </BrowserRouter>
  );
}

export default App;
