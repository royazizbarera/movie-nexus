import { Box } from "@mui/joy";

interface AdminTableLayoutProps {
  children: React.ReactNode;
}

export const AdminTableLayout = ({ children }: AdminTableLayoutProps) => {
  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        height: "140dvh",
        gap: 1,
      }}
    >
      {children}
    </Box>
  );
};
