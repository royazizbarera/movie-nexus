import { Box, Stack, Typography } from "@mui/material";
import { MAIN_PADING } from "../../config/constants";
import ActorModel from "../../models/temp/ActorModel";
import CustomLabel from "../widgets/CustomLabel";

interface ActorListSectionProps {
  actors: ActorModel[];
}

const ActorListSection: React.FC<ActorListSectionProps> = ({ actors }) => {
  return (
    <Box padding={MAIN_PADING}>
      {/* Title placed outside the scrollable area */}
      <CustomLabel title="Actors" />
      <Box
        sx={{
          display: "flex",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none", // For Firefox
        }}
      >
        <Stack direction="row" spacing={2}>
          {actors.map((actor, index) => (
            <Box key={index} textAlign="center">
              <Box
                component={"img"}
                src={
                  actor.personalDetail.name === "Emma Stone"
                    ? "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_FMjpg_UY2048_.jpg"
                    : "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UY414_CR1,0,280,414_.jpg"
                }
                sx={{
                  width: "100px",
                  height: "auto",
                  aspectRatio: "2/3", // 2:3 aspect ratio for better image fit
                  borderRadius: "8px",
                  objectFit: "cover", // Ensure the image covers the box properly
                  mb: 1,
                }}
              />
              <Typography variant="body2">
                {actor.personalDetail.name}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ActorListSection;
