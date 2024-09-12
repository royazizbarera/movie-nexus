import { Box, Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { ColumnModel } from "../models/ColumnModel";
import MovieModel from "../../../model/MovieModel";
import CountrySelect from "../components/CountrySelect";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomDataGrid from "../components/CustomDataGrid";
import LayoutAddData from "../components/LayoutAddData";
import { API_URL } from "../../../config/constants";

// Kolom yang digunakan di tabel
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
    id: "releaseDate",
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

// Fungsi Form untuk menambah data
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

// Komponen Utama AdminMovies
export default function AdminMovies() {
  // State untuk menyimpan data movie
  const [rows, setRows] = useState<MovieModel[]>([]);

  // Fetch data movie dari API ketika komponen dimuat
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Memanggil API untuk mendapatkan data movie
        const response = await fetch(`${API_URL}/movies`); // Ganti URL sesuai API Anda
        const body = await response.json();

        // Memperbarui state rows dengan body yang diambil dari API
        setRows(body.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
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
