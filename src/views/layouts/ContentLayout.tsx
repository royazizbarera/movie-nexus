import { Container } from "@mui/joy";

export default function ContentLayout({
  children,
  giveSpace = false,
}: {
  children: React.ReactNode;
  giveSpace?: boolean;
}) {
  return (
    <Container
      component={"span"}
      sx={{
        ...(!giveSpace && {
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
        // my: giveSpace ? 4 : 0,
        gap: 4,
      }}
    >
      {children}
    </Container>
  );
}
