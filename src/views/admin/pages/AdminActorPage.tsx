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
import actorController from "../../../controllers/ActorController";
import { ActorModel } from "../../../models/ActorModel";
import countryController from "../../../controllers/CountryController";

interface ActorModelTable {
  id: number;
  name: string;
  birthDate: string;
  photoUrl: string;
  country: string;
}

function convertActorModelToTable(actor: ActorModel): ActorModelTable {
  return {
    id: actor.id,
    name: actor.name,
    birthDate: actor.birthDate.toString(),
    photoUrl: actor.photoUrl,
    country: actor.country.name,
  };
}

export default function AdminActorPage() {
  const [actors, setActors] = React.useState<ActorModelTable[]>([]);
  const [countries, setCountries] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalItems, setTotalItems] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(24);
  const [totalPages, setTotalPages] = React.useState(1);

  const fetchActors = async (page: number) => {
    try {
      const response = await actorController.getActors(page);
      const { data: actors, pagination } = response;

      setActors(actors.map(convertActorModelToTable));
      setTotalItems(pagination!.totalItems);
      setPageSize(pagination!.pageSize);
      setTotalPages(pagination!.totalPages);
      setPage(pagination!.page); // Set current page explicitly
    } catch (error) {
      console.error("Error fetching actors:", error);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await countryController.getCountries(
        undefined,
        undefined
      );
      const data = response.data;
      setCountries(data.map((country) => country.name));
    } catch (error) {
      console.error("Error fetching countrys:", error);
    }
  };

  React.useEffect(() => {
    fetchCountries(); // Pass current page to fetchActors
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchActors(page); // Pass current page to fetchActors
  }, [page]);

  const handleEditActor = async (updatedActor: ActorModelTable) => {
    try {
      // Kirim data yang telah diubah ke endpoint tertentu
      // const response = await axios.put(`http://localhost:3001/actor/${updatedActor.id}`, updatedActor);
      // console.log('Actor updated successfully:', response.data);
      console.info("update actor: ", updatedActor);
    } catch (error) {
      console.error("Error updating actor:", error);
    }
  };

  const handleDeleteActor = async (actor: ActorModelTable) => {
    try {
      const response = await actorController.deleteActor(actor.id);
      setActors((prevActors) => prevActors.filter((m) => m.id !== actor.id));
      setTotalItems((prevTotal) => prevTotal - 1); // Mengurangi total items
      console.log("Actor deleted successfully:", response.message);
      console.info("delete actor with id: ", actor.id);
    } catch (error) {
      console.error("Error deleting actor:", error);
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
        <Sidebar selected="actors" />
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
                Actors
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
              Actors
            </Typography>
            <Button
              color="primary"
              startDecorator={<DownloadRoundedIcon />}
              size="sm"
            >
              Download PDF
            </Button>
          </Box>
          <GenericTable<ActorModelTable>
            data={actors}
            columns={[
              {
                key: "id",
                label: "ID",
                type: "number",
                readonly: true,
                width: 50,
              },
              { key: "name", label: "Name", type: "string" },
              { key: "birthDate", label: "Birth Date", type: "date" },
              { key: "photoUrl", label: "Photo Url", type: "string" },
              { key: "country", label: "Country", type: "string_autocomplete" },
            ]}
            options={{
              country: countries,
            }}
            onEdit={handleEditActor}
            onDelete={handleDeleteActor}
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
