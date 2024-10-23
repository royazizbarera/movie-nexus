import { Box, Skeleton } from "@mui/joy";

interface BackgroundTrailerProps {
  backgroundUrl: string;
  children: React.ReactNode; // Child element(s)
}

export default function BackgroundTrailer({
  children,
  backgroundUrl,
}: BackgroundTrailerProps) {
  return (
    <Skeleton loading={!backgroundUrl}>
      <Box
        sx={{
          // height: "100vh",
          backgroundImage: `linear-gradient(
          to bottom, 
          rgba(0, 0, 0, 0), /* Gradasi semi-transparan di bagian atas */
          rgba(0, 0, 0, 0.1),  /* Lebih gelap di bagian bawah */
          rgba(0, 0, 0, 0.2),  /* Lebih gelap di bagian bawah */
          rgba(0, 0, 0, 0.3),  /* Lebih gelap di bagian bawah */
          rgba(0, 0, 0, 1)  /* Lebih gelap di bagian bawah */
        ), url(${backgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(10px)", // Blur untuk efek glass
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Bayangan halus
          paddingBottom: { xs: 2, md: 4 },
          paddingTop: {
            xs: 12,
            md: 14,
          },
          position: "relative",
          overflow: "hidden",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay hitam semi-transparan untuk membuat teks lebih jelas
            backdropFilter: "blur(10px)",
            backgroundSize: "cover",
            zIndex: -1,
          },
        }}
      >
        {children}
      </Box>
    </Skeleton>
  );
}
