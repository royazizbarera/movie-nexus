import MoviesDatabase from "../../../database/MoviesDatabase";
import AdminManagement, { HeadCell } from "./AdminManagement";

const rows = () => {
  const mappedRows = MoviesDatabase.map((movie, index) => ({
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
  
  return mappedRows;
};

const headCells: HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "Id",
  },
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  },
  {
    id: "year",
    numeric: true,
    disablePadding: false,
    label: "Year",
  },
  {
    id: "duration",
    numeric: false,
    disablePadding: false,
    label: "Duration",
  },
  {
    id: "genres",
    numeric: false,
    disablePadding: false,
    label: "Genres",
  },
  {
    id: "description",  // Tambahan baru
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "trailerUrl",   // Tambahan baru
    numeric: false,
    disablePadding: false,
    label: "Trailer URL",
  },
  {
    id: "posterUrl",    // Tambahan baru
    numeric: false,
    disablePadding: false,
    label: "Poster URL",
  },
  {
    id: "director",     // Tambahan baru
    numeric: false,
    disablePadding: false,
    label: "Director",
  },
  {
    id: "writers",      // Tambahan baru
    numeric: false,
    disablePadding: false,
    label: "Writers",
  },
];


export default function AdminMovies() {
  return (
    <AdminManagement title="Movies" rows={rows()} headCells={headCells} />
  );
}