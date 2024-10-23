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
import countryController from "../../../controllers/CountryController";
import { CountryModel, CountryModelTable } from "../../../models/CountryModel";

function convertCountryModelToTable(country: CountryModel): CountryModelTable {
  return {
    code: country.code,
    name: country.name,
  };
}

export default function AdminCountryPage() {
  const [countries, setCountries] = React.useState<CountryModelTable[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalItems, setTotalItems] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(24);
  const [totalPages, setTotalPages] = React.useState(1);

  const fetchCountries = async (page: number) => {
    try {
      const response = await countryController.getCountries(page, 24);
      const { data: countries, pagination } = response;

      setCountries(countries.map(convertCountryModelToTable));
      setTotalItems(pagination!.totalItems);
      setPageSize(pagination!.pageSize);
      setTotalPages(pagination!.totalPages);
      setPage(pagination!.page); // Set current page explicitly
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  React.useEffect(() => {
    fetchCountries(page); // Pass current page to fetchCountries
  }, [page]);

  const handleEditCountry = async (updatedCountry: CountryModelTable) => {
    try {
      // Kirim data yang telah diubah ke endpoint tertentu
      // const response = await axios.put(`http://localhost:3001/country/${updatedCountry.id}`, updatedCountry);
      // console.log('Country updated successfully:', response.data);
      console.info("update country: ", updatedCountry);
    } catch (error) {
      console.error("Error updating country:", error);
    }
  };

  const handleDeleteCountry = async (country: CountryModelTable) => {
    try {
      const response = await countryController.deleteCountry(country.code);
      setCountries((prevCountries) =>
        prevCountries.filter((m) => m.code !== country.code)
      );
      setTotalItems((prevTotal) => prevTotal - 1); // Mengurangi total items
      console.log("Country deleted successfully:", response.message);
      console.info("delete country with code: ", country.code);
    } catch (error) {
      console.error("Error deleting country:", error);
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
        <Sidebar selected="countries" />
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
                Countries
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
              Countries
            </Typography>
            <Button
              color="primary"
              startDecorator={<DownloadRoundedIcon />}
              size="sm"
            >
              Download PDF
            </Button>
          </Box>
          <GenericTable<CountryModelTable>
            data={countries}
            columns={[
              {
                key: "code",
                label: "Code",
                type: "number",
                readonly: true,
                width: 50,
              },
              { key: "name", label: "Name", type: "string", width: "100%" },
            ]}
            onEdit={handleEditCountry}
            onDelete={handleDeleteCountry}
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
