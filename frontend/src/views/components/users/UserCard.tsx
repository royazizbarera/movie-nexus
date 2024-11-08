import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useAuthStore } from "../../../contexts/authStore";

export default function UserCard() {
  const { user } = useAuthStore();
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
          {!user!.photoProfile ? (
            <Typography>{user!.username.charAt(0)}</Typography>
          ) : (
            <img src={user!.photoProfile || ""} loading="lazy" alt="" />
          )}
        </AspectRatio>
        <CardContent>
          <Typography sx={{ fontSize: "xl", fontWeight: "lg" }}>
            {user!.username}
          </Typography>
          <Sheet
            sx={{
              justifyContent: "space-between",
              flexDirection: "row",
              bgcolor: "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 },
            }}
          >
            <Box>
              <Typography level="body-sm">Email</Typography>
              <Typography level="body-sm">{user!.email}</Typography>
            </Box>
            <Box>
              <Typography level="body-sm">Role</Typography>
              <Typography level="body-sm">{user!.role}</Typography>
            </Box>
          </Sheet>
        </CardContent>
      </Card>
    </Box>
  );
}
