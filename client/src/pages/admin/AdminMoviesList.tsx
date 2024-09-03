import React from "react";
import AdminManagement from "./AdminManagement";
import MoviesDatabase from "../../database/MoviesDatabase";

const movieColumns = [
  { field: "id", headerName: "Id", width: 50, editable: false },
  { field: "title", headerName: "Title", width: 200, editable: true },
  { field: "description", headerName: "Description", width: 200, editable: true },
  { field: "year", headerName: "Year", width: 100, editable: true },
  { field: "duration", headerName: "Duration", width: 150, editable: true },
  { field: "trailerUrl", headerName: "Trailer Url", width: 150, editable: true },
  { field: "posterUrl", headerName: "Poster Url", width: 150, editable: true },
  { field: "genres", headerName: "Genres", width: 150, editable: true },
  { field: "director", headerName: "Director", width: 200, editable: true },
  { field: "writers", headerName: "Writers", width: 200, editable: true },
  { field: "actors", headerName: "Actors", width: 200, editable: true },
];

const initialRows = MoviesDatabase.map((movie, index) => ({
  id: index + 1,
  title: movie.title,
  description: movie.description,
  year: movie.year,
  duration: movie.duration,
  trailerUrl: movie.trailerUrl,
  posterUrl: movie.posterUrl,
  genres: movie.genres,
  director: movie.director,
  writers: movie.writers,
}));

const emptyMovieRowTemplate = () => ({
  title: "",
  description: "",
  year: "",
  duration: "",
  trailerUrl: "",
  posterUrl: "",
  genres: "",
  director: "",
  writers: "",
  actors: "",
  isNew: true,
});

export default function AdminMoviesList() {
  return (
    <AdminManagement
      initialRows={initialRows}
      columns={movieColumns}
      emptyRowTemplate={emptyMovieRowTemplate}
    />
  );
}
