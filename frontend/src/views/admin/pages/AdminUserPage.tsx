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
import userController from "../../../controllers/UserController";
import {
  UserModel,
  UserModelTable,
  UserParamsModel,
} from "../../../models/UserModel";
import countryController from "../../../controllers/CountryController";
import { PaginationModel } from "../../../models/PaginationModel";
import {
  PAGE_SIZE_DROPDOWN,
  SORT_ORDER_DROPDOWN,
} from "../../../configs/constants";

function convertUserModelToTable(user: UserModel): UserModelTable {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    photoProfile: user.photoProfile,
    provider: user.provider,
    role: user.role?.toString(),
    isVerified: user.isVerified,
    verificationCode: user.verificationCode,
    verificationCodeExpired: user.verificationCodeExpired,
    verificationRequestDate: user.verificationRequestDate,
    isSuspened: user.isSuspened,
  };
}
const columns: any[] = [
  {
    key: "id",
    label: "ID",
    type: "number",
    readonly: true,
    width: 70,
  },
  { key: "username", label: "Username", type: "string", required: true },
  { key: "email", label: "Email", type: "string", required: true },
  { key: "password", label: "Password", type: "string", required: true },
  { key: "photoProfile", label: "Photo Profile", type: "string" },
  { key: "provider", label: "Provider", type: "string" },
  { key: "role", label: "Role", type: "string", required: true },
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
      // Kirim data yang telah diubah ke endpoint tertentu
      // const response = await axios.put(`http://localhost:3001/user/${updatedUser.id}`, updatedUser);
      // console.log('User updated successfully:', response.data);
      console.info("update user: ", updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // TODO: DELETE user
  const handleDeleteUser = async (user: UserModelTable) => {
    try {
      const response = await userController.deleteUser(user.id);
      setUsers((prevUsers) => prevUsers.filter((m) => m.id !== user.id));
      setPagination((prevPagination) => ({
        ...prevPagination,
        totalItems: prevPagination.totalItems - 1,
      }));
      console.log("User deleted successfully:", response.message);
      console.info("delete user with id: ", user.id);
    } catch (error) {
      console.error("Error deleting user:", error);
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
            title="Users"
            data={users}
            columns={columns}
            options={{
              country: countries,
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
          />

          {/* <OrderList /> */}
        </AdminTableLayout>
      </Box>
    </CssVarsProvider>
  );
}
