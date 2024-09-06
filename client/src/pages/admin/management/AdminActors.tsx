import { Box, Button, Stack, TextField } from "@mui/material";
import { ColumnModel } from "../models/ColumnModel";

// icon
import ActorModel from "../../../model/ActorModel";
import CountrySelect from "../components/CountrySelect";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomDataGrid from "../components/CustomDataGrid";
import dayjs from "dayjs";
import LayoutAddData from "../components/LayoutAddData";

const rows: ActorModel[] = [
  {
    id: 1,
    name: "Frozen yoghurt",
    country: "Indonesia",
    birth: dayjs(),
  },
  {
    id: 2,
    name: "Ice cream sandwich",
    country: "Indonesia",
    birth: dayjs(),
  },
  {
    id: 3,
    name: "Eclair",
    country: "Indonesia",
    birth: dayjs(),
  },
  {
    id: 4,
    name: "Cupcake",
    country: "Indonesia",
    birth: dayjs(),
  },
  ...Array.from({ length: 100 }, (_, i) => ({
    id: i + 5,
    name: "Gingerbread",
    country: "Indonesia",
    birth: dayjs(),
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
    label: "Countries",
    widht: "100%",
    minWidht: 200,
    type: "string",
    align: "left",
  },
  {
    id: "name",
    disablePadding: false,
    label: "Actor Name",
    widht: "100%",
    minWidht: 200,
    type: "string",
    align: "left",
  },
  {
    id: "birth",
    disablePadding: false,
    label: "Birth Date",
    widht: "100%",
    minWidht: "100%",
    type: "date",
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
          <TextField required id="outlined-required" label="Actor Name" />
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

export default function AdminActors() {
  return (
    <Stack direction={"column"} spacing={2}>
      {formAddData()}
      <CustomDataGrid rows={rows} columnModels={columnModels} />
    </Stack>
  );
}
