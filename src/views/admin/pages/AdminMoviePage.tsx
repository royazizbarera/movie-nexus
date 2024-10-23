import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import BreadcrumbsHome from "../components/BreadcrumbsHome";
import BreadcrumbsDashboard from "../components/BreadcrumbsDashboard";
import { AdminTableLayout } from "../layouts/AdminTableLayout";
import GenericTable from "../components/GenericTable";
import { MovieModel } from "../../../models/MovieModel";
import movieController from "../../../controllers/MovieControllerDua";
import genreController from "../../../controllers/GenreController";
import { GenreModel } from "../../../models/GenreModel";

interface MovieModelTable {
  id: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  backdropUrl: string;
  videoUrl: string;
  releaseDate: string;
  approvalStatus: boolean;
  rating: number;
  director: string;
  genres: string[];
  actors: string[];
  awards: string[];
  reviews: string[];
}

const availableGenres = [
  "Action",
  "Drama",
  "Sci-Fi",
  "Thriller",
  "Adventure",
  "Crime",
  "Comedy",
  "Fantasy",
];

function convertMovieModelToTable(movie: MovieModel): MovieModelTable {
  return {
    id: movie.id,
    title: movie.title,
    synopsis: movie.synopsis,
    posterUrl: movie.posterUrl,
    backdropUrl: movie.backdropUrl,
    videoUrl: movie.videoUrl ?? "", // If videoUrl is null, return empty string
    releaseDate: movie.releaseDate, // Assuming releaseDate is already an ISO string
    approvalStatus: movie.approvalStatus, // Assuming true is "approved", false is "pending"
    rating: movie.rating ?? 0, // If rating is null, default to 0
    director: movie.director ? movie.director.name : "Unknown", // Default to "Unknown" if director is null
    genres: movie.genres.map((g) => g.genre.name), // Extract genre names from genres array
    actors: movie.actors.map((a) => a.actor.name), // Extract actor names from actors array
    awards: movie.awards.map((a) => a.award.name), // Extract award names from awards array
    reviews: movie.reviews ? movie.reviews.map((r) => r.review.content) : [], // Extract review content from reviews array or empty array if reviews is null
  };
}

export default function AdminMoviePage() {
  const [movies, setMovies] = React.useState<MovieModelTable[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalItems, setTotalItems] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(24);
  const [totalPages, setTotalPages] = React.useState(1);
  const [genres, setGenres] = React.useState<string[]>([]);

  const fetchMovies = async (page: number) => {
    try {
      const response = await movieController.getMovies(page);
      const { data: movies, pagination } = response;

      setMovies(movies.map(convertMovieModelToTable));
      setTotalItems(pagination!.totalItems);
      setPageSize(pagination!.pageSize);
      setTotalPages(pagination!.totalPages);
      setPage(pagination!.page); // Set current page explicitly
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const getGenres = async () => {
    try {
      const response = await genreController.getGenres();
      const data = response.data;
      setGenres(
        data.map((genre: GenreModel) => {
          return genre.name;
        })
      );
    } catch (error) {}
  };

  React.useEffect(() => {
    getGenres();
  }, []);

  React.useEffect(() => {
    fetchMovies(page); // Pass current page to fetchMovies
  }, [page]);

  const handleEditMovie = async (updatedMovie: MovieModelTable) => {
    try {
      // Kirim data yang telah diubah ke endpoint tertentu
      // const response = await axios.put(`http://localhost:3001/movie/${updatedMovie.id}`, updatedMovie);
      // console.log('Movie updated successfully:', response.data);
      console.info("update movie: ", updatedMovie);
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const handleDeleteMovie = async (movie: MovieModelTable) => {
    try {
      const response = await movieController.deleteMovie(movie.id);
      setMovies((prevMovies) => prevMovies.filter((m) => m.id !== movie.id));
      setTotalItems((prevTotal) => prevTotal - 1); // Mengurangi total items
      console.log("Movie deleted successfully:", response.message);
      console.info("delete movie with id: ", movie.id);
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  const handlePageChange = async (newPage: number) => {
    setPage(newPage);
  };

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        <Sidebar selected="movies" />
        <AdminTableLayout>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<ChevronRightRoundedIcon fontSize="small" />}
              sx={{ pl: 0 }}
            >
              <BreadcrumbsHome />
              <BreadcrumbsDashboard />
              <Typography
                color="primary"
                sx={{ fontWeight: 500, fontSize: 12 }}
              >
                Movies
              </Typography>
            </Breadcrumbs>
          </Box>
          <Box
            sx={{
              display: "flex",
              mb: 1,
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography level="h2" component="h1">
              Movies
            </Typography>
            <Button
              color="primary"
              startDecorator={<DownloadRoundedIcon />}
              size="sm"
            >
              Download PDF
            </Button>
          </Box>
          <GenericTable<MovieModelTable>
            data={movies}
            columns={[
              {
                key: "id",
                label: "ID",
                type: "number",
                readonly: true,
                width: 50,
              },
              { key: "title", label: "Title", type: "string" },
              { key: "synopsis", label: "Synopsis", type: "string" },
              { key: "posterUrl", label: "Poster", type: "string" },
              { key: "backdropUrl", label: "Backdrop", type: "string" },
              { key: "videoUrl", label: "Video", type: "string" },
              { key: "releaseDate", label: "Release Date", type: "date" },
              {
                key: "approvalStatus",
                label: "Approval Status",
                type: "boolean",
              },
              { key: "rating", label: "Rating", type: "number" },
              { key: "director", label: "Director", type: "string" },
              { key: "genres", label: "Genres", type: "string[]" },
              { key: "actors", label: "Actors", type: "string[]" },
              { key: "awards", label: "Awards", type: "string[]" },
              { key: "reviews", label: "Reviews", type: "string[]" },
            ]}
            options={{
              genres: genres, // Opsi untuk genres
            }}
            onEdit={handleEditMovie}
            onDelete={handleDeleteMovie}
            onPageChange={handlePageChange}
            page={page}
            pageSize={pageSize}
            totalItems={totalItems}
            totalPages={totalPages}
          />

          {/* <OrderList /> */}
        </AdminTableLayout>
      </Box>
    </CssVarsProvider>
  );
}
