import { Card, CardCover, Skeleton } from "@mui/joy";
import { extractYouTubeVideoId } from "../../../helpers/extractYouTubeVideoId";
import { SxProps } from "@mui/joy/styles/types";

interface VideoTrailerProps {
  videoUrl: string;
  sx?: SxProps;
  autoPlay?: boolean;
}
/**
 * Home page hero video trailer component
 * height: 78vh
 * width: undefined
 * aspect ratio: 16:9
 * @param {string} videoUrl - YouTube video URL
 * @param {SxProps} sx - Custom style
 */

export default function VideoTrailer({
  videoUrl,
  sx,
  autoPlay = false,
}: VideoTrailerProps) {
  const autoplayParam = autoPlay ? "1" : "0"; // Tentukan apakah autoplay akan diaktifkan atau tidak

  return (
    <Card
      variant="plain"
      component="li"
      sx={{
        flexGrow: 1,
        aspectRatio: "16/9",
        border: "none",
        height: {
          md: "auto",
          lg: "auto",
          xl: "auto",
        },
        width: "100%",
        ...sx,
      }}
    >
      <Skeleton loading={!videoUrl}>
        <CardCover>
          <iframe
            src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
              videoUrl
            )}?autoplay=${autoplayParam}&mute=0&controls=1`} // Sesuaikan autoplay sesuai dengan prop autoPlay
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{
              border: "none",
            }}
          />
        </CardCover>
      </Skeleton>
    </Card>
  );
}
