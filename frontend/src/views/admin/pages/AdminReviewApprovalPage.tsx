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
import reviewController from "../../../controllers/ReviewController";
import {
  convertReviewModelToTable,
  ReviewModel,
  ReviewModelTable,
  ReviewParamsModel,
} from "../../../models/ReviewModel";
import { PaginationModel } from "../../../models/PaginationModel";
import {
  PAGE_SIZE_DROPDOWN,
  SORT_ORDER_DROPDOWN,
} from "../../../configs/constants";
import { HttpStatusCode } from "axios";
import { useApprovalStore } from "../../../contexts/approvalStore";
import SnackBarMessage, {
  SnackBarMessageProps,
} from "../../components/SnackbarMessage";
import { Button } from "@mui/joy";

const columns: any[] = [
  {
    key: "approvalStatus",
    label: "Approval Status",
    type: "boolean",
  },
  {
    key: "content",
    label: "Content",
    type: "string",
    width: 300,
  },
  {
    key: "rating",
    label: "Rating",
    type: "number",
    width: 100,
  },
  {
    key: "movieId",
    label: "Movie ID",
    type: "number",
    width: 100,
  },
  {
    key: "userId",
    label: "User ID",
    type: "number",
    width: 100,
  },
];

export default function AdminReviewApprovalPage() {
  const [snackbar, setSnackbar] = React.useState<SnackBarMessageProps>({
    key: "admin-user",
    open: false,
    message: "",
    variant: "danger",
  });

  const { decrementTotalUnapprovedReviews } = useApprovalStore();
  const [reviews, setReviews] = React.useState<ReviewModelTable[]>([]);
  const [pagination, setPagination] = React.useState<PaginationModel>({
    page: 1,
    pageSize: 24,
    totalItems: 0,
    totalPages: 1,
  });
  const [reviewParams, setReviewParams] = React.useState<ReviewParamsModel>({
    page: pagination.page,
    pageSize: pagination.pageSize,
  });

  React.useEffect(() => {
    fetchReviews(reviewParams); // Pass current page to fetchReviews
  }, [reviewParams]);

  // TODO (DONE): Review CRUD operations
  const fetchReviews = async (reviewParamsModel: ReviewParamsModel) => {
    try {
      const response = await reviewController.getUnapprovedReviews(
        reviewParamsModel
      );
      const { data: reviews, pagination } = response;

      setReviews(reviews.map(convertReviewModelToTable));
      setPagination(pagination!);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };


  // TODO (DONE): EDIT Review
  const handleEditReview = async (updatedReview: ReviewModelTable) => {
    try {
      const parsedReview: ReviewModel =
        convertReviewModelToTable(updatedReview);
      const response = await reviewController.updateReview(
        updatedReview.id,
        parsedReview
      );
      if (response.code !== HttpStatusCode.Ok) {
        console.error("Error updating review:", response.message);
        return false;
      }
      fetchReviews(reviewParams);
      console.log("Review updated successfully:", response.message);
      console.info("update review: ", updatedReview);
      return true;
    } catch (error) {
      console.error("Error updating review:", error);
      return false;
    }
  };

  // TODO (DONE): DELETE Review
  const handleDeleteReview = async (review: ReviewModelTable) => {
    try {
      const response = await reviewController.deleteReview(review.id);
      if (response.code === HttpStatusCode.Ok) {
        fetchReviews(reviewParams);
        console.log("Review deleted successfully:", response.message);
        console.info("delete review: ", review);
        return true;
      } else {
        console.error("Error deleting review:", response.message);
        return false;
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      return false;
    }
  };

  const handlePageChange = async (newPage: number) => {
    handleFilterChange("page", newPage);
  };

  const handleFilterChange = (name: string, value: string | number) => {
    setReviewParams((prevParams) => ({
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
        <Sidebar selected="reviews-approval" />
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
                Reviews Approval
              </Typography>
            </Breadcrumbs>
          </Box>

          <GenericTable<ReviewModelTable>
            title="Reviews Approval"
            data={reviews}
            columns={columns}
            // onAdd={handleAddReview}
            onEdit={handleEditReview}
            onDelete={handleDeleteReview}
            onPageChange={handlePageChange}
            page={pagination.page}
            pageSize={pagination.pageSize}
            totalItems={pagination.totalItems}
            totalPages={pagination.totalPages}
            filters={{
              sortBy: columns.map((column) => column.key),
              sortOrder: SORT_ORDER_DROPDOWN,
              pageSize: PAGE_SIZE_DROPDOWN,
            }}
            onFilterChange={handleFilterChange}
            applySearch
            realtimeSearch
            placeholderSearch="Search review..."
            onSearchApply={(searchTerm) =>
              handleFilterChange("searchTerm", searchTerm)
            }
            renderRowActions={(movie) => {
              // accept and un accept
              return (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="outlined"
                    color="warning"
                    size="sm"
                    onClick={async () => {
                      try {
                        await handleEditReview({
                          ...movie,
                          approvalStatus: true,
                        });
                        decrementTotalUnapprovedReviews();
                        setSnackbar({
                          key: "admin-review",
                          open: true,
                          message: "Review accepted successfully!",
                          variant: "success",
                        });
                      } catch (error) {
                        console.error("Error accepting movie:", error);
                        setSnackbar({
                          key: "admin-review",
                          open: true,
                          message: "Error accepting movie!",
                          variant: "danger",
                        });
                      }
                    }}
                  >
                    Accept Review
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
