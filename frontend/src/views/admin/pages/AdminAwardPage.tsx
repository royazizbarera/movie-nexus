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
import awardController from "../../../controllers/AwardController";
import {
  AwardModel,
  AwardModelTable,
  AwardParamsModel,
  convertAwardModelToTable,
} from "../../../models/AwardModel";
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
  { key: "year", label: "Year", type: "date", required: true },
  {
    key: "country",
    label: "Country",
    type: "string_autocomplete",
    required: true,
  },
];

export default function AdminAwardPage() {
  const [awards, setAwards] = React.useState<AwardModelTable[]>([]);
  const [countries, setCountries] = React.useState<string[]>([]);
  const [realCountries, setRealCountries] = React.useState<CountryModel[]>([]);

  const [pagination, setPagination] = React.useState<PaginationModel>({
    page: 1,
    pageSize: 24,
    totalItems: 0,
    totalPages: 1,
  });
  const [awardParams, setAwardParams] = React.useState<AwardParamsModel>({
    page: pagination.page,
    pageSize: pagination.pageSize,
  });

  const fetchAwards = async (awardParamsModel: AwardParamsModel) => {
    try {
      const response = await awardController.getAwards(awardParamsModel);
      const { data: awards, pagination } = response;
      setAwards(awards.map(convertAwardModelToTable));
      setPagination(pagination!);
    } catch (error) {
      console.error("Error fetching awards:", error);
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
    fetchCountries(); // Pass current page to fetchAwards
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchAwards(awardParams); // Pass current page to fetchAwards
  }, [awardParams]);

  // TODO: ADD Award
  const handleAddAward = async (newAward: AwardModelTable) => {
    try {
      const parsedAward: AwardModel = {
        id: 0,
        name: newAward.name,
        year: new Date(newAward.year),
        countryCode:
          realCountries.find((c) => c.name === newAward.country)?.code || "",
      };
      const response = await awardController.addAward(parsedAward);
      console.info("add award: ", newAward);
      fetchAwards(awardParams);
      if (response.code !== 201) {
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error adding award:", error);
      throw String(error);
    }
  };

  // TODO: UPDATE Award
  const handleEditAward = async (updatedAward: AwardModelTable) => {
    try {
      const parsedAward: AwardModel = {
        id: updatedAward.id,
        name: updatedAward.name,
        year: new Date(updatedAward.year),
        countryCode:
          realCountries.find((c) => c.name === updatedAward.country)?.code ||
          "",
      };
      const response = await awardController.updateAward(
        updatedAward.id,
        parsedAward
      );
      fetchAwards(awardParams);
      if (response.code !== 200) {
        return false;
      }
      console.info("update award: ", updatedAward);
      return true;
    } catch (error) {
      console.error("Error updating award:", error);
      throw String(error);
    }
  };

  // TODO: DELETE Award
  const handleDeleteAward = async (award: AwardModelTable) => {
    try {
      const response = await awardController.deleteAward(award.id);
      fetchAwards(awardParams);
      if (response.code !== 200) {
        return false;
      }
      console.log("Award deleted successfully:", response.message);
      console.info("delete award with id: ", award.id);
      return true;
    } catch (error) {
      console.error("Error deleting award:", error);
      throw String(error);
    }
  };

  const handlePageChange = async (newPage: number) => {
    handleFilterChange("page", newPage);
  };

  const handleFilterChange = (name: string, value: string | number) => {
    setAwardParams((prevParams) => ({
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
        <Sidebar selected="awards" />
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
                Awards
              </Typography>
            </Breadcrumbs>
          </Box>

          <GenericTable<AwardModelTable>
            title="Awards"
            data={awards}
            columns={columns}
            options={{
              country: countries,
            }}
            onAdd={handleAddAward}
            onEdit={handleEditAward}
            onDelete={handleDeleteAward}
            onPageChange={handlePageChange}
            page={pagination.page}
            pageSize={pagination.pageSize}
            totalItems={pagination.totalItems}
            totalPages={pagination.totalPages}
            filters={{
              country: countries,
              sortBy: columns.map((column) => column.key),
              sortOrder: SORT_ORDER_DROPDOWN,
              pageSize: PAGE_SIZE_DROPDOWN,
            }}
            onFilterChange={handleFilterChange}
            applySearch
            placeholderSearch="Search award..."
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
