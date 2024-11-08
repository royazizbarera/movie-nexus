import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import BreadcrumbsHome from "../components/BreadcrumbsHome";
import BreadcrumbsDashboard from "../components/BreadcrumbsDashboard";
import { AdminTableLayout } from "../layouts/AdminTableLayout";
import GenericTable from "../components/GenericTable";
import directorController from "../../../controllers/DirectorController";
import {
  convertDirectorModelToTable,
  DirectorModel,
  DirectorModelTable,
  DirectorParamsModel,
} from "../../../models/DirectorModel";
import countryController from "../../../controllers/CountryController";
import { PaginationModel } from "../../../models/PaginationModel";
import {
  PAGE_SIZE_DROPDOWN,
  SORT_ORDER_DROPDOWN,
} from "../../../configs/constants";
import { CountryModel } from "../../../models/CountryModel";

const columns: any[] = [
  {
    key: "id",
    label: "ID",
    type: "number",
    readonly: true,
    width: 70,
  },
  { key: "name", label: "Name", type: "string", required: true },
  { key: "birthDate", label: "Birth Date", type: "date", required: true },
  { key: "photoUrl", label: "Photo Url", type: "string" },
  {
    key: "country",
    label: "Country",
    type: "string_autocomplete",
    required: true,
  },
];

export default function AdminDirectorPage() {
  const [directors, setDirectors] = React.useState<DirectorModelTable[]>([]);
  const [countries, setCountries] = React.useState<string[]>([]);
  const [realCountries, setRealCountries] = React.useState<CountryModel[]>([]);

  const [pagination, setPagination] = React.useState<PaginationModel>({
    page: 1,
    pageSize: 24,
    totalItems: 0,
    totalPages: 1,
  });
  const [directorParams, setDirectorParams] =
    React.useState<DirectorParamsModel>({
      page: pagination.page,
      pageSize: pagination.pageSize,
    });

  const fetchDirectors = async (directorParamsModel: DirectorParamsModel) => {
    try {
      const response = await directorController.getDirectors(
        directorParamsModel
      );
      const { data: directors, pagination } = response;

      setDirectors(directors.map(convertDirectorModelToTable));
      setPagination(pagination!);
    } catch (error) {
      console.error("Error fetching directors:", error);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await countryController.getCountries();
      const data = response.data;

      setRealCountries(data);
      setCountries(data.map((country) => country.name));
    } catch (error) {
      console.error("Error fetching countrys:", error);
    }
  };

  React.useEffect(() => {
    fetchCountries(); // Pass current page to fetchDirectors
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchDirectors(directorParams); // Pass current directorParams to fetchDirectors
  }, [directorParams]);

  // TODO: Implement add director
  const handleAddDirector = async (newDirector: DirectorModelTable) => {
    try {
      const parsedDirector: DirectorModel = {
        id: newDirector.id,
        name: newDirector.name,
        birthDate: newDirector.birthDate,
        photoUrl: newDirector.photoUrl,
        countryCode:
          realCountries.find((c) => c.name === newDirector.country)?.code || "",
      };
      const response = await directorController.addDirector(parsedDirector);
      console.info("add director: ", parsedDirector);
      fetchDirectors(directorParams);
      if (response.code !== 201) {
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error adding director:", error);
      throw String(error);
    }
  };

  // TODO: Implement edit director
  const handleEditDirector = async (updatedDirector: DirectorModelTable) => {
    try {
      const parsedDirector: DirectorModel = {
        id: updatedDirector.id,
        name: updatedDirector.name,
        birthDate: new Date(updatedDirector.birthDate).toISOString(),
        photoUrl: updatedDirector.photoUrl,
        countryCode:
          realCountries.find((c) => c.name === updatedDirector.country)?.code ||
          "",
      };
      const response = await directorController.updateDirector(
        updatedDirector.id,
        parsedDirector
      );
      fetchDirectors(directorParams);
      if (response.code !== 200) {
        return false;
      }
      console.info("edit director: ", parsedDirector);
      return true;
    } catch (error) {
      console.error("Error updating director:", error);
      throw String(error);
    }
  };

  // TODO: Implement delete director
  const handleDeleteDirector = async (director: DirectorModelTable) => {
    try {
      const response = await directorController.deleteDirector(director.id);
      fetchDirectors(directorParams);
      if (response.code !== 200) {
        return false;
      }
      console.log("Director deleted successfully:", response.message);
      console.info("delete director with id: ", director.id);
      return true;
    } catch (error) {
      console.error("Error deleting director:", error);
      throw String(error);
    }
  };

  const handlePageChange = async (newPage: number) => {
    handleFilterChange("page", newPage);
  };

  const handleFilterChange = (name: string, value: string | number) => {
    setDirectorParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
    console.info("Filter change: ", name, value);
  };

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        <Sidebar selected="directors" />
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
                Directors
              </Typography>
            </Breadcrumbs>
          </Box>
          <GenericTable<DirectorModelTable>
            title="Directors"
            data={directors}
            columns={columns}
            options={{
              country: countries,
            }}
            onAdd={handleAddDirector}
            onEdit={handleEditDirector}
            onDelete={handleDeleteDirector}
            onPageChange={handlePageChange}
            page={pagination.page}
            pageSize={pagination.pageSize}
            totalItems={pagination.totalItems}
            totalPages={pagination.totalPages}
            // filters
            filters={{
              country: countries,
              sortBy: columns.map((column) => column.key),
              sortOrder: SORT_ORDER_DROPDOWN,
              pageSize: PAGE_SIZE_DROPDOWN,
            }}
            onFilterChange={handleFilterChange}
            applySearch
            placeholderSearch="Search director..."
            onSearchApply={(searchTerm) =>
              handleFilterChange("searchTerm", searchTerm)
            }
          />

          {/* <OrderList /> */}
        </AdminTableLayout>
      </Box>
    </CssVarsProvider>
  );
}
