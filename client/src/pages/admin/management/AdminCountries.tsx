import { Box, Button, Stack, TextField } from "@mui/material";
import { ColumnModel } from "../models/ColumnModel";

// icon
import CustomDataGrid from "../components/CustomDataGrid";
import LayoutAddData from "../components/LayoutAddData";
import { countries } from "../components/CountrySelect";

const columnModels: ColumnModel[] = [
  {
    id: "code",
    disablePadding: false,
    label: "code",
    widht: "100%",
    minWidht: 10,
    type: "number",
    align: "left",
  },
  {
    id: "label",
    disablePadding: false,
    label: "Country",
    widht: "100%",
    minWidht: "100%",
    type: "string",
    align: "left",
  },
  {
    id: "phone",
    disablePadding: false,
    label: "Phone",
    widht: "100%",
    minWidht: 200,
    type: "string",
    align: "left",
  },
  {
    id: "suggested",
    disablePadding: false,
    label: "Suggested",
    widht: 200,
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
          <TextField required id="outlined-required" label="Code" />
          <TextField required id="outlined-required" label="Countrie Name" />
          <TextField required id="outlined-required" label="Phone" />
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

export default function AdminCountries() {
  return (
    <Stack direction={"column"} spacing={2}>
      {formAddData()}
      <CustomDataGrid rows={countries} columnModels={columnModels} />
    </Stack>
  );
}
