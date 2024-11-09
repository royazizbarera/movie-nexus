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
import GenericTable, { Column } from "../components/GenericTable";
import userController from "../../../controllers/UserController";
import {
  convertUserModelToTable,
  UserModelTable,
  UserParamsModel,
} from "../../../models/UserModel";
import countryController from "../../../controllers/CountryController";
import { PaginationModel } from "../../../models/PaginationModel";
import {
  PAGE_SIZE_DROPDOWN,
  SORT_ORDER_DROPDOWN,
} from "../../../configs/constants";
import { Button } from "@mui/joy";
import SnackBarMessage, {
  SnackBarMessageProps,
} from "../../components/SnackbarMessage";

const columns: Column<UserModelTable>[] = [
  {
    key: "id",
    label: "ID",
    type: "number",
    readonly: true,
    width: 70,
  },
  {
    key: "isSuspended",
    label: "Is Suspended",
    type: "boolean",
    width: 120,
  },
  { key: "username", label: "Username", type: "string", required: true },
  { key: "email", label: "Email", type: "string", required: true },
  { key: "photoProfile", label: "Photo Profile", type: "string" },
  { key: "provider", label: "Provider", type: "string" },
  { key: "role", label: "Role", type: "string_autocomplete", required: true },
  { key: "isVerified", label: "Is Verified", type: "boolean" },
  {
    key: "verificationCode",
    label: "Verification Code",
    type: "string",
  },
  {
    key: "verificationCodeExpired",
    label: "Verification Code Expired",
    type: "string",
  },
  {
    key: "verificationRequestDate",
    label: "Verification Request Date",
    type: "string",
  },
];

export default function AdminUserPage() {
  const [users, setUsers] = React.useState<UserModelTable[]>([]);
  const [countries, setCountries] = React.useState<string[]>([]);

  const [pagination, setPagination] = React.useState<PaginationModel>({
    page: 1,
    pageSize: 24,
    totalItems: 0,
    totalPages: 1,
  });

  const [userParams, setUserParams] = React.useState<UserParamsModel>({
    page: pagination.page,
    pageSize: pagination.pageSize,
  });

  const [snackbar, setSnackbar] = React.useState<SnackBarMessageProps>({
    key: "admin-user",
    open: false,
    message: "",
    variant: "danger",
  });

  const fetchUsers = async (userParamsModel: UserParamsModel) => {
    try {
      const response = await userController.getUsers(userParamsModel);
      const { data: users, pagination } = response;

      setUsers(users.map(convertUserModelToTable));
      setPagination(pagination!); // Set current page explicitly
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await countryController.getCountries();
      const data = response.data;
      setCountries(data.map((country) => country.name));
    } catch (error) {
      console.error("Error fetching countrys:", error);
    }
  };

  React.useEffect(() => {
    fetchCountries(); // Pass current page to fetchUsers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchUsers(userParams); // Pass current userParams to fetchUsers
  }, [userParams]);

  // TODO: ADD user

  // TODO: UPDATE user
  const handleEditUser = async (updatedUser: UserModelTable) => {
    try {
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // TODO: DELETE user
  const handleDeleteUser = async (user: UserModelTable) => {
    try {
      const response = await userController.deleteUser(user.id);
      fetchUsers(userParams); // Fetch users again after delete
      console.log("User deleted successfully:", response.message);
      console.info("delete user with id: ", user.id);
      return true;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw String(error);
    }
  };

  // TODO (DONE): SUSPEND user
  const handleSuspendUser = async (user: UserModelTable) => {
    try {
      const response = await userController.suspendUser(user.id);
      fetchUsers(userParams); // Fetch users again after suspend
      console.log("User suspended successfully:", response.message);
      console.info("suspend user with id: ", user.id);
      // show success message snackbar
      setSnackbar({
        key: "success-suspend-user",
        open: true,
        message: "User suspended successfully",
        variant: "warning",
      });
    } catch (error) {
      console.error("Error suspending user:", error);
      setSnackbar({
        key: "error-suspend-user",
        open: true,
        message: String(error),
        variant: "danger",
      });
    }
  };

  // TODO (DONE): UNSUSPEND user
  const handleUnsuspendUser = async (user: UserModelTable) => {
    try {
      const response = await userController.unsuspendUser(user.id);
      fetchUsers(userParams); // Fetch users again after unsuspend
      console.log("User unsuspended successfully:", response.message);
      console.info("unsuspend user with id: ", user.id);
      // show success message snackbar
      setSnackbar({
        key: "success-unsuspend-user",
        open: true,
        message: "User unsuspended successfully",
        variant: "warning",
      });
    } catch (error) {
      console.error("Error unsuspending user:", error);
      setSnackbar({
        key: "error-unsuspend-user",
        open: true,
        message: String(error),
        variant: "danger",
      });
    }
  };

  const handlePageChange = async (newPage: number) => {
    handleFilterChange("page", newPage);
  };

  const handleFilterChange = (name: string, value: string | number) => {
    setUserParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        <Sidebar selected="users" />
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
                Users
              </Typography>
            </Breadcrumbs>
          </Box>

          <GenericTable<UserModelTable>
            actionInFront
            title="Users"
            data={users}
            columns={columns}
            options={{
              country: countries,
              role: ["admin", "writer"],
            }}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
            onPageChange={handlePageChange}
            page={pagination.page}
            pageSize={pagination.pageSize}
            totalItems={pagination.totalItems}
            totalPages={pagination.totalPages}
            // filters
            filters={{
              role: ["admin", "writer"],
              provider: ["email", "google"],
              isVerified: [true, false],
              country: countries,
              sortBy: columns.map((column) => column.key),
              sortOrder: SORT_ORDER_DROPDOWN,
              pageSize: PAGE_SIZE_DROPDOWN,
            }}
            onFilterChange={handleFilterChange}
            applySearch
            realtimeSearch
            placeholderSearch="Search user..."
            onSearchApply={(searchTerm) =>
              handleFilterChange("searchTerm", searchTerm)
            }
            renderRowActions={(user) => {
              return (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="outlined"
                    color="warning"
                    size="sm"
                    onClick={() => handleSuspendUser(user)}
                  >
                    Suspend
                  </Button>
                  <Button
                    variant="outlined"
                    color="success"
                    size="sm"
                    onClick={() => handleUnsuspendUser(user)}
                  >
                    Unsuspend
                  </Button>
                </Box>
              );
            }}
          />

          {/* <OrderList /> */}
        </AdminTableLayout>
      </Box>
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        {/* Your existing components here */}
        {snackbar.open && (
          <SnackBarMessage
            key={snackbar.key}
            open={snackbar.open}
            message={snackbar.message}
            variant={snackbar.variant}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
          />
        )}
      </Box>
    </CssVarsProvider>
  );
}
