import { useEffect, useMemo, useState } from "react";
import Field from "../models/FieldModel";
import { ResponseApiProps } from "../../../config/ResponseApi";
import { API_URL } from "../../../config/constants";
import DataTable from "../components/DataTable";

import axios from "axios";
import { Box } from "@mui/material";

export default function CountriesTable() {
  const columns = useMemo<Field[]>(
    () => [
      { name: "code", label: "Code", type: "text", isRequired: true },
      { name: "label", label: "Country", type: "text", isRequired: true },
      { name: "phone", label: "Phone", type: "text", isRequired: true },
    ],
    []
  );

  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<ResponseApiProps>(`${API_URL}/countries`);
        const data = response.data?.data;

        // Only set rows if data has changed
        if (JSON.stringify(data) !== JSON.stringify(rows)) {
          setRows(data);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchMovies();
  }, [rows]);

  const handleAddData = async (movieData: any) => {
    try {
      // Send POST request to the backend to add the new movie
      const response = await axios.post<ResponseApiProps>(
        `${API_URL}/country`,
        movieData
      );

      // Get the newly added movie from the response
      const newMovie = response.data?.data;

      // Add the new movie to the current state
      if (newMovie) {
        setRows((prevRows) => [...prevRows, newMovie]);
      }
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  return (
    <Box sx={{
      p: 0,
    }}>
      <DataTable
        title="Country"
        columns={columns}
        rows={rows}
        onAdd={handleAddData}
      />
    </Box>
  );
}
