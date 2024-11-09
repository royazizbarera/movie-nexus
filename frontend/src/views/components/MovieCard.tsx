import * as React from "react";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import StarIcon from "@mui/icons-material/Star";
import { Box, Skeleton } from "@mui/joy";
import { Link } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";

interface MovieCardProps {
  id?: number;
  title?: string;
  posterUrl?: string;
  rating?: number;
  year?: number;
  loading?: boolean;
  canClick?: boolean;
}

export default function MovieCard({
  id,
  title,
  posterUrl,
  rating,
  year,
  loading,
  canClick = true,
}: MovieCardProps) {
  return (
    <Box sx={{ display: "flex", maxWidth: "200px", width: "100%" }}>
      <Card
        variant="outlined"
        sx={{
          width: "100%", // Width otomatis sesuai dengan parent
          gap: 0,
          ":hover": {
            borderColor: "primary.solidBg",
          },
        }}
      >
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Link to={canClick ? `/movie/${id}` : "/"}>
            <AspectRatio ratio="2/3">
              <Skeleton loading={!posterUrl}>
                <img
                  src={posterUrl}
                  loading="lazy"
                  alt="Movie Poster"
                  style={{ width: "100%", height: "auto" }}
                />
              </Skeleton>
            </AspectRatio>
          </Link>
        </CardOverflow>

        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <CardContent orientation="vertical" sx={{ pt: 0 }}>
            {/* Rating */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {rating == null ? (
                <Skeleton
                  variant="circular"
                  width={24}
                  height={24}
                  sx={{
                    mt: 0.5,
                  }}
                />
              ) : (
                <StarIcon sx={{ color: "star.main" }} />
              )}
              <Typography level="body-md">
                <Skeleton loading={rating == null}>{rating || 0}</Skeleton>
              </Typography>
            </Box>

            <Typography
              level="title-md"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                // width: "100%",
              }}
            >
              <Skeleton loading={!title}>{title || "Title movie"}</Skeleton>
            </Typography>
            <Typography level="body-xs">
              <Skeleton loading={!year}>
                {new Date(year!).getFullYear() || 2024}
              </Skeleton>
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </Box>
  );
}
