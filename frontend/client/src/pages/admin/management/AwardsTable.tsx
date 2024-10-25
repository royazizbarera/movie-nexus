import { useMemo } from "react";
import Field from "../models/FieldModel";
import { ResponseApiProps } from "../../../config/ResponseApi";
import { API_URL } from "../../../config/constants";
import DataTable from "../components/DataTable";

import axios from "axios";
import { Box } from "@mui/material";

export default function AwardsTable() {
  const columnModels = useMemo<Field[]>(
    () => [
      { name: "name", label: "Award", type: "text", isRequired: true },
      { name: "year", label: "Year", type: "date", isRequired: true },
      { name: "country", label: "Country", type: "select", isRequired: true },
    ],
    []
  );


  const handleAddData = async (movieData: any) => {
    try {
      // Send POST request to the backend to add the new movie
      const response = await axios.post<ResponseApiProps>(
        `${API_URL}/awards`,
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
        urlApi={`${API_URL}/awards`}
        onAdd={handleAddData}
      />
    </Box>
  );
}
