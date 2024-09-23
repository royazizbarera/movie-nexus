import { useMemo } from "react";
import Field from "../models/FieldModel";
import { ResponseApiProps } from "../../../config/ResponseApi";
import { API_URL } from "../../../config/constants";
import DataTable from "../components/DataTable";

import axios from "axios";
import { Box } from "@mui/material";

export default function CountriesTable() {
  const columnModels = useMemo<Field[]>(
    () => [
      { name: "code", label: "Code", type: "text", isRequired: true },
      { name: "name", label: "Country", type: "text", isRequired: true },
      { name: "phone", label: "Phone", type: "text", isRequired: true },
    ],
    []
  );
  const handleAddData = async (movieData: any) => {
    try {
      // Send POST request to the backend to add the new movie
      const response = await axios.post<ResponseApiProps>(
        `${API_URL}/country`,
        movieData
      );

      // Get the newly added movie from the response
      const newMovie = response.data?.data;
      return newMovie;
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  return (
    <Box
      sx={{
        p: 0,
      }}
    >
      <DataTable
        title="Movie"
        columns={columnModels}
        // fetchDataApi={fetchDataApi}
        urlApi={`${API_URL}/countries`}
        onAdd={handleAddData}
      />
    </Box>
  );
}
