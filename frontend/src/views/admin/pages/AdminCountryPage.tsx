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
import countryController from "../../../controllers/CountryController";
import {
  convertCountryModelToTable,
  convertCountryTableToModel,
  CountryModel,
  CountryModelTable,
  CountryParamsModel,
} from "../../../models/CountryModel";
import { PaginationModel } from "../../../models/PaginationModel";
import {
  PAGE_SIZE_DROPDOWN,
  SORT_ORDER_DROPDOWN,
} from "../../../configs/constants";

const columns: any[] = [
  {
    key: "code",
    label: "Code",
    type: "string",
    width: 70,
    required: true,
    placeholder: "e.g., US",
  },
  {
    key: "name",
    label: "Country",
    type: "string",
    width: "100%",
    required: true,
    placeholder: "e.g., United States",
  },
];

export default function AdminCountryPage() {
  const [countries, setCountries] = React.useState<CountryModelTable[]>([]);
  const [pagination, setPagination] = React.useState<PaginationModel>({
    page: 1,
    pageSize: 24,
    totalItems: 0,
    totalPages: 1,
  });
  const [countryParams, setCountryParams] = React.useState<CountryParamsModel>({
    page: pagination.page,
    pageSize: pagination.pageSize,
  });

  const fetchCountries = async (countryParamsModel: CountryParamsModel) => {
    try {
      const response = await countryController.getCountries(countryParamsModel);
      const { data: countries, pagination } = response;

      setCountries(countries.map(convertCountryModelToTable));
      setPagination(pagination!);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  React.useEffect(() => {
    fetchCountries(countryParams); // Pass current countryParams to fetchCountries
  }, [countryParams]);

  // TODO: ADD country
  const handleAddCountry = async (newCountry: CountryModelTable) => {
    try {
      const parsedCountry: CountryModel = {
        code: newCountry.code,
        name: newCountry.name,
      };
      const response = await countryController.addCountry(parsedCountry);
      fetchCountries(countryParams);
      if (response.code !== 201) {
        console.error("Error adding country:", response.message);
        return false;
      }
      console.log("Country added successfully:", response.message);
      console.info("add country: ", newCountry);
      return true;
    } catch (error) {
      console.error("Error adding country:", error);
      throw String(error);
    }
  };

  // TODO: UPDATE country
  const handleEditCountry = async (updatedCountry: CountryModelTable) => {
    try {
      const response = await countryController.updateCountry(
        updatedCountry.code,
        convertCountryTableToModel(updatedCountry)
      );
      fetchCountries(countryParams);
      if (response.code !== 200) {
        return false;
      }
      console.info("update country: ", updatedCountry);
      return true;
    } catch (error) {
      console.error("Error updating country:", error);
      throw String(error);
    }
  };

  // TODO: DELETE country
  const handleDeleteCountry = async (country: CountryModelTable) => {
    try {
      const response = await countryController.deleteCountry(country.code);
      fetchCountries(countryParams);
      if (response.code !== 200) return false;
      console.log("Country deleted successfully:", response.message);
      console.info("delete country with code: ", country.code);
      return true;
    } catch (error) {
      console.error("Error deleting country:", error);
      throw String(error);
    }
  };

  const handlePageChange = async (newPage: number) => {
    handleFilterChange("page", newPage);
  };

  const handleFilterChange = (name: string, value: string | number) => {
    setCountryParams((prevParams) => ({
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
          <GenericTable<CountryModelTable>
            widthAction={100}
            simpleAddItem
            title="Countries"
            titleSolo="Country"
            data={countries}
            columns={columns}
            onAdd={handleAddCountry}
            onEdit={handleEditCountry}
            onDelete={handleDeleteCountry}
            onPageChange={handlePageChange}
            page={pagination.page}
            pageSize={pagination.pageSize}
            totalItems={pagination.totalItems}
            totalPages={pagination.totalPages}
            //
            filters={{
              sortBy: columns.map((column) => column.key),
              sortOrder: SORT_ORDER_DROPDOWN,
              pageSize: PAGE_SIZE_DROPDOWN,
            }}
            onFilterChange={handleFilterChange}
            applySearch
            placeholderSearch="Search country..."
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
