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
import OrderTable from "../components/OrderTable";
import OrderList from "../components/OrderList";
import Header from "../components/Header";
import BreadcrumbsHome from "../components/BreadcrumbsHome";
import BreadcrumbsDashboard from "../components/BreadcrumbsDashboard";
import { AdminTableLayout } from "../layouts/AdminTableLayout";
import GenericTable from "../components/GenericTable";
import genreController from "../../../controllers/GenreController";
import { GenreModel, GenreModelTable } from "../../../models/GenreModel";



function convertGenreModelToTable(genre: GenreModel): GenreModelTable {
  return {
    id: genre.id,
    name: genre.name,
  };
}

export default function AdminGenrePage() {
  const [genres, setGenres] = React.useState<GenreModelTable[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalItems, setTotalItems] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(24);
  const [totalPages, setTotalPages] = React.useState(1);

  const fetchGenres = async (page: number) => {
    try {
      const response = await genreController.getGenres(page);
      const { data: genres, pagination } = response;

      setGenres(genres.map(convertGenreModelToTable));
      setTotalItems(pagination!.totalItems);
      setPageSize(pagination!.pageSize);
      setTotalPages(pagination!.totalPages);
      setPage(pagination!.page); // Set current page explicitly
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  React.useEffect(() => {
    fetchGenres(page); // Pass current page to fetchGenres
  }, [page]);

  const handleEditGenre = async (updatedGenre: GenreModelTable) => {
    try {
      // Kirim data yang telah diubah ke endpoint tertentu
      // const response = await axios.put(`http://localhost:3001/genre/${updatedGenre.id}`, updatedGenre);
      // console.log('Genre updated successfully:', response.data);
      console.info("update genre: ", updatedGenre);
    } catch (error) {
      console.error("Error updating genre:", error);
    }
  };

  const handleDeleteGenre = async (genre: GenreModelTable) => {
    try {
      const response = await genreController.deleteGenre(genre.id);
      setGenres((prevGenres) => prevGenres.filter((m) => m.id !== genre.id));
      setTotalItems((prevTotal) => prevTotal - 1); // Mengurangi total items
      console.log("Genre deleted successfully:", response.message);
      console.info("delete genre with id: ", genre.id);
    } catch (error) {
      console.error("Error deleting genre:", error);
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
        <Sidebar selected="genres" />
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
                Genres
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
              Genres
            </Typography>
            <Button
              color="primary"
              startDecorator={<DownloadRoundedIcon />}
              size="sm"
            >
              Download PDF
            </Button>
          </Box>
          <GenericTable<GenreModelTable>
            data={genres}
            columns={[
              {
                key: "id",
                label: "ID",
                type: "number",
                readonly: true,
                width: 50,
              },
              { key: "name", label: "Name", type: "string", width: "100%" },
            ]}
            onEdit={handleEditGenre}
            onDelete={handleDeleteGenre}
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
