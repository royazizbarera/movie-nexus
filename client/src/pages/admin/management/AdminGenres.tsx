import { Box, Button, Stack, TextField } from "@mui/material";
import { ColumnModel } from "../models/ColumnModel";

// icon
import CustomDataGrid from "../components/CustomDataGrid";
import LayoutAddData from "../components/LayoutAddData";
import GenreModel from "../../../model/GenreModel";

function random<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Historical",
  "Horror",
  "Mystery",
  "Philosophical",
  "Political",
  "Romance",
  "Science fiction",
  "Thriller",
  "Urban",
  "Western",
];

const rows: GenreModel[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    genre: random(genres),
  })),
];

const columnModels: ColumnModel[] = [
  {
    id: "id",
    disablePadding: false,
    label: "id",
    widht: 100,
    type: "number",
    align: "left",
  },
  {
    id: "genre",
    disablePadding: false,
    label: "Genres",
    widht: 500,
    minWidht: "80%",
    type: "string",
    align: "left",
  },
];

function formAddData() {
  return (
    <LayoutAddData>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            gap: 1,
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Genre"
            sx={{
              width: "100%",
              minWidth: {
                xs: "100%",
                sm: "100%",
                md: 200,
                lg: 600,
                xl: 600,
              }
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            gap: 1,
          }}
        >
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </LayoutAddData>
  );
}

export default function AdminAwards() {
  return (
    <Stack direction={"column"} spacing={2}>
      {formAddData()}
      <CustomDataGrid rows={rows} columnModels={columnModels} />
    </Stack>
  );
}
