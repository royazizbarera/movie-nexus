import { useMemo } from "react";
import Field from "../models/FieldModel";
import { ResponseApiProps } from "../../../config/ResponseApi";
import { API_URL } from "../../../config/constants";
import DataTable from "../components/DataTable";

import axios from "axios";
import { Box } from "@mui/material";

export default function DirectorsTable() {
  const columnModels = useMemo<Field[]>(
    () => [
      { name: "name", label: "Award", type: "text", isRequired: true },
      { name: "birthDate", label: "Birth Date", type: "date", isRequired: true },
      { name: "countryCode", label: "Country", type: "text", isRequired: true },

    ],
    []
  );

  const handleAddData = async (movieData: any) => {
    try {
      // Send POST request to the backend to add the new movie
      const response = await axios.post<ResponseApiProps>(
        `${API_URL}/directors`,
        movieData
      );

      // Get the newly added movie from the response
      const newMovie = response.data?.data;
return newMovie;
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  return (
    <Box sx={{
      p: 0,
    }}>
      <DataTable
        title="Movie"
        columns={columnModels}
        // fetchDataApi={fetchDataApi}
        urlApi={`${API_URL}/directors`}
        onAdd={handleAddData}
      />
    </Box>
  );
}
