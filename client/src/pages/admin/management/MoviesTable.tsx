import { useEffect, useMemo, useState } from "react";
import Field from "../models/FieldModel";
import { ResponseApiProps } from "../../../config/ResponseApi";
import { API_URL } from "../../../config/constants";
import DataTable from "../components/DataTable";

import axios from "axios";
import { Box } from "@mui/material";
import DataTableMovies from "../components/DataTableMovies";
import { Filter } from "../components/FilterButton";

export default function MoviesTable() {
  const columnModels = useMemo<Field[]>(
    () => [
      { name: "title", label: "Title", type: "text", isRequired: true },
      { name: "synopsis", label: "Synopsis", type: "text", isRequired: true },
      {
        name: "posterUrl",
        label: "Poster URL",
        type: "text",
        isRequired: true,
      },
      {
        name: "releaseDate",
        label: "Release Date",
        type: "date",
        isRequired: true,
      },
      {
        name: "approvalStatus",
        label: "Approval Status",
        type: "boolean",
        options: [
          { value: true, label: "Approved" },
          { value: false, label: "Not Approved" },
        ],
      },
      { name: "rating", label: "Rating", type: "number", isRequired: true },
      {
        name: "countryCode",
        label: "Country",
        type: "select",
        options: [
          { value: "US", label: "United States" },
          { value: "CA", label: "Canada" },
          { value: "FR", label: "France" },
        ],
        isRequired: true,
      },
      {
        name: "directorId",
        label: "Directors",
        type: "select",
        options: [
          { value: 1, label: "Tom Hanks" },
          { value: 2, label: "Brad Pitt" },
          { value: 3, label: "Natalie Portman" },
        ],
      },
      {
        name: "actors",
        label: "Actors",
        type: "multiselect",
        options: [
          { value: 1, label: "Leonardo DiCaprio" },
          { value: 2, label: "Brad Pitt" },
          { value: 3, label: "Natalie Portman" },
        ],
      },
      {
        name: "genres",
        label: "Genres",
        type: "multiselect",
        options: [
          { value: 1, label: "Action" },
          { value: 2, label: "Drama" },
          { value: 3, label: "Comedy" },
        ],
      },
      {
        name: "awards",
        label: "Awards",
        type: "multiselect",
        options: [
          { value: 1, label: "Oscar" },
          { value: 2, label: "Golden Globe" },
          { value: 3, label: "BAFTA" },
        ],
      },
    ],
    []
  );

  const fetchDataApi = async (params: any) => {
    try {
      const response = await axios.get<ResponseApiProps>(`${API_URL}/movies`, {
        params: params,
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return {};
    }
  };

  const handleAddData = async (movieData: any) => {
    try {
      // Send POST request to the backend to add the new movie
      const response = await axios.post<ResponseApiProps>(
        `${API_URL}/movies`,
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
    <Box
      sx={{
        p: 0,
      }}
    >
      <DataTableMovies
        title="Movie"
        columns={columnModels}
        // fetchDataApi={fetchDataApi}
        urlApi={`${API_URL}/movies`}
        onAdd={handleAddData}
      />
    </Box>
  );
}
