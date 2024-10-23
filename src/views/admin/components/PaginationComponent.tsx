import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/joy";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { iconButtonClasses } from "@mui/joy/IconButton";

interface PaginationProps {
  handlePageChange: (page: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  page: number; // Current page
  pageSize: number; // Items per page
  totalItems: number; // Total items
  totalPages: number; // Total page
}

const PaginationComponent = ({
  page,
  totalPages,
  totalItems,
  pageSize,
  handlePageChange,
  handleNextPage,
  handlePrevPage,
}: PaginationProps) => {
  const renderPageNumbers = () => {
    const pages = [];

    if (page > 2) {
      // Always show the first page
      pages.push(
        <IconButton
          key={1}
          size="sm"
          variant={page === 1 ? "solid" : "outlined"}
          onClick={() => handlePageChange(1)}
        >
          1
        </IconButton>
      );
      if (page > 3) {
        pages.push(<Typography key="ellipsis-left">…</Typography>); // Ellipsis before current page range
      }
    }

    // Show two pages before the current page
    if (page > 1) {
      pages.push(
        <IconButton
          key={page - 1}
          size="sm"
          variant="outlined"
          onClick={() => handlePageChange(page - 1)}
        >
          {page - 1}
        </IconButton>
      );
    }

    // Show current page
    pages.push(
      <IconButton
        key={page}
        size="sm"
        variant="solid"
        color="primary"
        onClick={() => handlePageChange(page)}
      >
        {page}
      </IconButton>
    );

    // Show two pages after the current page
    if (page < totalPages) {
      if (page < totalPages - 1) {
        pages.push(
          <IconButton
            key={page + 1}
            size="sm"
            variant="outlined"
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </IconButton>
        );
      }
    }

    if (page < totalPages - 2) {
      pages.push(<Typography key="ellipsis-right">…</Typography>); // Ellipsis after current page range
    }

    if (page < totalPages) {
      // Always show the last page
      // pages.push(
      //   <IconButton
      //     key={totalPages - 1}
      //     size="sm"
      //     variant={page === totalPages - 1 ? "solid" : "outlined"}
      //     onClick={() => handlePageChange(totalPages - 1)}
      //   >
      //     {totalPages - 1}
      //   </IconButton>
      // );
      pages.push(
        <IconButton
          key={totalPages}
          size="sm"
          variant={page === totalPages ? "solid" : "outlined"}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </IconButton>
      );
    }

    return pages;
  };

  return (
    <Box
      className="Pagination-laptopUp"
      sx={{
        [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        mt: 2,
      }}
    >
      {/* Tombol Previous */}
      <Button
        size="sm"
        variant="outlined"
        color="neutral"
        startDecorator={<KeyboardArrowLeftIcon />}
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        Previous
      </Button>
      <Box sx={{ flex: 1 }} />
      {/* Rendering Page Numbers */}
      {renderPageNumbers()}
      <Box sx={{ flex: 1 }} />
      {/* Tombol Next */}
      <Button
        size="sm"
        variant="outlined"
        color="neutral"
        endDecorator={<KeyboardArrowRightIcon />}
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        Next
      </Button>
    </Box>
  );
};

export default PaginationComponent;
