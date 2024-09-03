import { Box, Rating, Typography, useTheme, Grid } from "@mui/material";
import { MAIN_PADING } from "../../config/constants";
import CustomLabel from "../widgets/CustomLabel";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface ReviewSectionProps {
  reviews: {
    user: string;
    date: string;
    rating: number;
    comment: string;
  }[];
}

const MovieReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  const theme = useTheme();

  return (
    <Box padding={MAIN_PADING}>
      <CustomLabel title="Reviews" />

      {/* Grid Container to handle layout on different screen sizes */}
      <Grid container alignItems="center" spacing={1}>
        {/* "People think about this movie" text */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            ({reviews.length}) People think about this movie
          </Typography>
        </Grid>

        {/* "Filtered by" section with Rating */}
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          alignItems="center"
          justifyContent={{ xs: "flex-start", sm: "flex-end" }}
        >
          <Typography variant="body2" marginRight={1}>
            Filtered by:
          </Typography>
          <Rating
            value={4.5}
            precision={0.5}
            readOnly
            icon={<StarIcon sx={{ color: theme.palette.ratingColor.main }} />} // Filled star color
            emptyIcon={
              <StarBorderIcon sx={{ color: theme.palette.ratingColor.main }} />
            } // Outline color
            sx={{
              "& .MuiRating-iconFilled": {
                color: theme.palette.commonColors.onPrimary.main, // Color for filled stars
              },
              "& .MuiRating-iconEmpty": {
                color: theme.palette.commonColors.onPrimary.main, // Color for empty stars
              },
              "& .MuiRating-iconHover": {
                color: theme.palette.commonColors.onPrimary.main, // Color when hovered
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Daftar Ulasan */}
      <Box mt={2}>
        {reviews.map((review, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="flex-start"
            paddingY={1}
            borderBottom="1px solid #e0e0e0"
          >
            <Box
              component={"img"}
              src="https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_FMjpg_UY2048_.jpg"
              sx={{
                objectFit: "cover",
                width: "40px",
                height: "40px",
                bgcolor: "#941B1B",
                borderRadius: "50%",
                marginRight: 2,
              }}
            />
            <Box flex="1" textAlign={"left"}>
              <Typography variant="body2" fontWeight="bold">
                {review.user} ({review.date}) said:
              </Typography>
              <Rating value={review.rating} size="small" readOnly />
              <Typography variant="body2">{review.comment}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MovieReviewSection;
