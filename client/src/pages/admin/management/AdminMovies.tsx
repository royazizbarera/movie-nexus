import { Box, Button, Stack, TextField } from "@mui/material";
import { ColumnModel } from "../models/ColumnModel";

// icon
import MovieModel from "../../../model/MovieModel";
import CountrySelect from "../components/CountrySelect";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomDataGrid from "../components/CustomDataGrid";
import LayoutAddData from "../components/LayoutAddData";

const rows: MovieModel[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: 1 + i,
    title: `Frozen yoghurt ${i}`,
    year: 2012,
    rating: 7,
    director: "Roy",
    genre: ["Action", "Adventure"],
    country: "Indonesia",
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
    id: "title",
    disablePadding: false,
    label: "Title",
    widht: 500,
    minWidht: "80%",
    type: "string",
    align: "left",
  },
  {
    id: "year",
    disablePadding: false,
    label: "Year",
    widht: 200,
    minWidht: "10%",
    type: "number",
    align: "left",
  },
  {
    id: "rating",
    disablePadding: false,
    label: "Rating",
    widht: 200,
    minWidht: "10%",
    type: "number",
    align: "left",
  },
  {
    id: "director",
    disablePadding: false,
    label: "Director",
    widht: 200,
    minWidht: "10%",
    type: "string",
    align: "left",
  },
  {
    id: "genre",
    disablePadding: false,
    label: "Genre",
    widht: 200,
    minWidht: "10%",
    type: "string",
    align: "left",
  },
  {
    id: "country",
    disablePadding: false,
    label: "Country",
    widht: 200,
    minWidht: "10%",
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
          <CountrySelect />
          <TextField required id="outlined-required" label="Title" />
          <CustomDatePicker />
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

export default function AdminMovies() {
  return (
    <Stack direction={"column"} spacing={2}>
      {formAddData()}
      <CustomDataGrid rows={rows} columnModels={columnModels} />
    </Stack>
  );
}
