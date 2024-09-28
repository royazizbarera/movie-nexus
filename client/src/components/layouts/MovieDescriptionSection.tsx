import { Box, Button, Chip, Typography, useTheme } from "@mui/material";
import MovieModel from "../../models/temp/MovieModel";
import { MAIN_PADING } from "../../config/constants";
import AddIcon from "@mui/icons-material/Add";
import AdditionalInfo from "./AdditionalInfoMovie";

interface MovieDescriptionSectionProps {
  movie: MovieModel;
}

const MovieDescriptionSection: React.FC<MovieDescriptionSectionProps> = ({
  movie,
}) => {
  const theme = useTheme();

  return (
    <>
      {/* Movie Description */}
      <Box paddingX={MAIN_PADING}>
        <Box mt={4}>
          {/* Chip */}
          <Box
            mt={2}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1, // Jarak antar chip
            }}
          >
            {movie.genres.map((genre, index) => (
              <Chip
                key={index}
                label={genre}
                variant="outlined"
                sx={{
                  color: theme.palette.background.paper, // Ensure background contrast
                  borderColor: theme.palette.primary.light, // Border color
                  boxShadow: `0 0 1px 0.5px ${theme.palette.primary.light}`, // Stronger glow effect
                  transition: "box-shadow 0.3s ease-in-out", // Smooth transition for the glow effect
                  "&:hover": {
                    boxShadow: `0 0 10px 5px ${theme.palette.primary.main}`, // Even stronger glow on hover
                  },
                  // backgroundColor: theme.palette.background.paper, // Ensure background contrast
                }}
              />
            ))}
          </Box>

          {/* Description */}
          <Typography variant="body1" marginTop={"2rem"} gutterBottom>
            {movie.description || "No description available."}
          </Typography>

          {/* Additional Info */}
          <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            gap={2}
            mt={2}
          >
            <AdditionalInfo title="Director" info={[movie.director]} />
            <AdditionalInfo title="Writers" info={movie.writers} />
          </Box>
        </Box>

        {/* Side Buttons */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt={3}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              fullWidth
            >
              Add to Watchlist
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MovieDescriptionSection;
