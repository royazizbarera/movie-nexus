import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function UserCard({ user }: { user: any }) {
  console.log(user);
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: { xs: "auto", sm: "initial" },
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: "100%",
        }}
      >
        <AspectRatio
          flex
          ratio="1"
          sx={{
            minWidth: {
              xs: 120,
              sm: 120,
              md: 180,
              lg: 180,
              xl: 180,
            },
            maxHeight: {
              xs: "auto",
              sm: "auto",
              md: 180,
              lg: 180,
              xl: 180,
            },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography sx={{ fontSize: "xl", fontWeight: "lg" }}>
            {user.username}
          </Typography>
          {/* <Typography
            level="body-sm"
            textColor="text.tertiary"
            sx={{ fontWeight: "lg" }}
          >
            Software Engineer
          </Typography> */}
          <Sheet
            sx={{
              bgcolor: "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" sx={{ fontWeight: "lg" }}>
                Post
              </Typography>
              <Typography sx={{ fontWeight: "lg" }}>9</Typography>
            </div>
            <div>
              <Typography level="body-xs" sx={{ fontWeight: "lg" }}>
                Followers
              </Typography>
              <Typography sx={{ fontWeight: "lg" }}>2004</Typography>
            </div>
            <div>
              <Typography level="body-xs" sx={{ fontWeight: "lg" }}>
                Following
              </Typography>
              <Typography sx={{ fontWeight: "lg" }}>13</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          "& > button": { flex: 1 },
          pt: "1rem",
        }}
      >
        <Button variant="outlined" color="neutral">
          Share Profile
        </Button>
      </Box>
    </Box>
  );
}
