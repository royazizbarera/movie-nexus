// Mui
import { Box, Button, Stack, TextField } from "@mui/material";

// react
import { useEffect, useState } from "react";

// model
import { ColumnModel } from "../models/ColumnModel";
import ActorModel from "../../../model/ActorModel";

import CountrySelect from "../components/CountrySelect";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomDataGrid from "../components/CustomDataGrid";
import LayoutAddData from "../components/LayoutAddData";
import { API_URL } from "../../../config/constants";

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
    id: "name",
    disablePadding: false,
    label: "Actor Name",
    widht: "100%",
    minWidht: 200,
    type: "string",
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
    id: "birthdate",
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
  const [rows, setRows] = useState<ActorModel[]>([]);

  // Fetch data movie dari API ketika komponen dimuat
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Memanggil API untuk mendapatkan data movie
        const response = await fetch(`${API_URL}/actors`); // Ganti URL sesuai API Anda
        const body = await response.json();

        // Memperbarui state rows dengan body yang diambil dari API
        setRows(body.data);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <Stack direction={"column"} spacing={2}>
      {formAddData()}
      <CustomDataGrid rows={rows} columnModels={columnModels} />
    </Stack>
  );
}
