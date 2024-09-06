import { Box, Button, Stack, TextField } from "@mui/material";
import { ColumnModel } from "../models/ColumnModel";

// icon
import CustomDataGrid from "../components/CustomDataGrid";
import LayoutAddData from "../components/LayoutAddData";
import CountrySelect, { countries } from "../components/CountrySelect";
import AwardModel from "../../../model/AwardModel";

function random<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

const rows: AwardModel[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    year: 2021,
    award: random([
      "Japanese Awards WOw",
      "Korean Awards",
      "Chinese Awards",
      "Hollywood Awards",
      "Bollywood Awards",
    ]),
    country: random(countries).label,
  })),
];

const columnModels: ColumnModel[] = [
  {
    id: "id",
    disablePadding: false,
    label: "id",
    widht: "100%",
    minWidht: 10,
    type: "number",
    align: "left",
  },
  {
    id: "country",
    disablePadding: false,
    label: "Country",
    widht: "100%",
    minWidht: "100%",
    type: "string",
    align: "left",
  },
  {
    id: "year",
    disablePadding: false,
    label: "year",
    widht: "100%",
    minWidht: 200,
    type: "number",
    align: "left",
  },
  {
    id: "awards",
    disablePadding: false,
    label: "Awards",
    widht: 200,
    minWidht: "100%",
    type: "number",
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
          <TextField required id="outlined-required" label="Year" />
          <TextField
            required
            id="outlined-required"
            label="Award"
            sx={{
              width: "100%",
              minWidth: {
                xs: "100%",
                sm: "100%",
                md: 200,
                lg: 400,
                xl: 400,
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
