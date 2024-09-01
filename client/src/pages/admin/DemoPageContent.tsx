import { Box, Typography } from "@mui/material";

export default function DemoPageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%', // Mengisi tinggi penuh
        width: '100%', // Mengisi lebar penuh
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}
