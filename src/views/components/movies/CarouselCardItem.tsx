
import { AspectRatio, Box, Skeleton } from "@mui/joy";

interface CarouselCardItemProps {
  movie?: {
    id: number;
    posterUrl: string;
    title: string;
  };
  focusVisible?: boolean;
}

export default function CarouselCardItem({
  movie,
  focusVisible = false,
}: CarouselCardItemProps) {
  return (
    <AspectRatio
      key={movie ? movie.id : "loading"}
      ratio="16/9"
      sx={{
        minWidth: 120,
        borderRadius: "8px",
        border: "2px solid",
        borderColor: focusVisible ? "focusVisible" : "transparent",
      }}
    >
      <Skeleton loading={!movie}>
        <Box
          component="img"
          src={movie ? movie.posterUrl : ""} // URL gambar poster dari prop
          alt={`${movie ? movie.title : "Movie"} Poster`}
          width="100%"
          height="100%" // Menetapkan tinggi penuh agar sejajar dengan trailer
          // borderRadius="8px"
          sx={{
            objectFit: "cover",
            aspectRatio: "16/9", // Misalnya, 2:3 untuk poster film di layar besar dan 3:4 di layar kecil
          }}
        />
      </Skeleton>
    </AspectRatio>
  );
}
