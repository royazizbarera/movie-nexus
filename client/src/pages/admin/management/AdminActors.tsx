import { Box, Button, TextField } from "@mui/material";
import AdminToolbar from "../components/AdminToolbar";
import { ColumnModel } from "../models/ColumnModel";

// icon
import ActorModel from "../../../model/ActorModel";
import CountrySelect from "../components/CountrySelect";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomDataGrid from "../components/CustomDataGrid";

const rows: ActorModel[] = [
  {
    id: 1,
    name: "Frozen yoghurt",
    country: "Indonesia",
    birth: "19 July 1996",
  },
  {
    id: 2,
    name: "Ice cream sandwich",
    country: "Indonesia",
    birth: "19 July 1996",
  },
  {
    id: 3,
    name: "Eclair",
    country: "Indonesia",
    birth: "19 July 1996",
  },
  {
    id: 4,
    name: "Cupcake",
    country: "Indonesia",
    birth: "19 July 1996",
  },
  ...Array.from({ length: 100 }, (_, i) => ({
    id: i + 5,
    name: "Gingerbread",
    country: "Indonesia",
    birth: "19 July 1996",
  })),
];

const columnModels: ColumnModel[] = [
  {
    id: "id",
    disablePadding: false,
    label: "id",
    minWidht: 50,
    type: "number",
    align: "left",
  },
  {
    id: "country",
    disablePadding: false,
    label: "Countries",
    minWidht: 50,
    type: "string",
    align: "left",
  },
  {
    id: "name",
    disablePadding: false,
    label: "Actor Name",
    minWidht: 50,
    type: "string",
    align: "left",
  },
  {
    id: "birth",
    disablePadding: false,
    label: "Birth Date",
    minWidht: 50,
    type: "date",
    align: "left",
  },
];

function toolbarAction() {
  return <AdminToolbar title="Actors" />;
}

function formAddData() {
  return (
    <Box
      component="form"
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#D5C4EF",
      }}
    >
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
    </Box>
  );
}

export default function AdminActors() {
  return (
    <CustomDataGrid
      // formAddData={formAddData()}
      // toolbarAction={toolbarAction()}
      rows={rows}
      columnModels={columnModels}
    />
  );
}
