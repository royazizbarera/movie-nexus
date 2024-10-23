import * as React from "react";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Avatar, Box } from "@mui/joy";
import { Link } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAddOutlined";

interface ActorCardProps {
  id?: number;
  name?: string;
  photoUrl?: string;
}

export default function ActorCard({ id, name, photoUrl }: ActorCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "140px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "500px",
          gap: 0,
          backgroundColor: "background.level1",
        }}
      >
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Link to={"/movie/1"}>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                zIndex: 100,
              }}
            >
              <BookmarkAddIcon />
            </IconButton>
            <AspectRatio ratio="2/3">
              {photoUrl && (
                <img
                  src={photoUrl}
                  loading="lazy"
                  alt="Actor Profile"
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              {!photoUrl && (
                // avatar
                <Avatar
                size="lg"
                  sx={{
                    width: "100%",
                    height: "auto",
                    fontSize: "0rem",
                  }}
                />
              )}
            </AspectRatio>
          </Link>
        </CardOverflow>

        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <CardContent orientation="vertical" sx={{ pt: 0 }}>
            <Typography
              level="title-md"
              sx={{
                overflow: "hidden",
              }}
            >
              {name || "Actor Name"}
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </Box>
  );
}
