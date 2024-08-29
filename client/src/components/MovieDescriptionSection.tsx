import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import MovieModel from "../model/MovieModel";
import { MAIN_PADING } from "../config/constants";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface MovieDescriptionSectionProps {
  movie: MovieModel;
}

const MovieDescriptionSection: React.FC<MovieDescriptionSectionProps> = ({ movie }) => {
  return (
    <>
      {/* Movie Description */}
      <Box paddingX={MAIN_PADING}>
        <Box mt={4}>
          <Stack direction="row" spacing={1}>
            {movie.genres.map((genre, index) => (
              <Chip key={index} label={genre} variant="outlined" color="primary" />
            ))}
          </Stack>

          <Typography variant="body1" marginTop={"2rem"} gutterBottom>
            {movie.description || "No description available."}
          </Typography>

          {/* Additional Info */}
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap={2}
            mt={2}
          >
            <Box>
              <Typography variant="body2">Director:</Typography>
              <Typography variant="body2">{movie.director}</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Writers:</Typography>
              <Typography variant="body2">
                {movie.writers.join(" ・ ")}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Side Buttons */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt={3}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button variant="outlined" startIcon={<PlayArrowIcon />} fullWidth>
              37 VIDEOS
            </Button>
            <Button variant="outlined" startIcon={<PlayArrowIcon />} fullWidth>
              99+ PHOTOS
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              fullWidth
            >
              Add to Watchlist
            </Button>
            <Button variant="contained" color="primary" fullWidth>
              Streaming on Prime Video
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};


export default MovieDescriptionSection;