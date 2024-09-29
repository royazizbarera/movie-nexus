// Component
import {
  Box,
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TablePagination,
} from "@mui/material";
import Field from "../models/FieldModel";
import AddDataDialog from "./AddDataDialog";
import FilterMenu, { Filter } from "./FilterMenu";

// icon
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// System
import { memo, useEffect, useState } from "react";
import { ResponseApiProps } from "../../../config/ResponseApi";
import axios from "axios";

interface DataTableProps {
  columns: Field[];
  // fetchDataApi: (param: any) => Promise<any>;
  urlApi: string;
  onAdd: (data: any) => void;
  title: string;
  // handleEditRow: (row: any) => void;
  // page: number;
  // rowsPerPage: number;
  // handleChangePage: (event: unknown, newPage: number) => void;
  // handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DataTable = memo(function DataTable({
  columns,
  // fetchDataApi,
  urlApi,
  onAdd,
  title,
}: DataTableProps) {
  const [rows, setRows] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [filters, setFilters] = useState<Filter[]>([]);
  // Tambahkan handler untuk mengubah filter
  // const handleFilterApply = (appliedFilters: Filter[]) => {
  //   setFilters(appliedFilters);
  //   setPage(0);
  // };
  const handleFilterApply = (appliedFilters: Filter[]) => {
    // Only reset the page to 0 if filters are newly applied
    const filtersChanged =
      JSON.stringify(appliedFilters) !== JSON.stringify(filters);
    if (filtersChanged) {
      setPage(0);
    }
    setFilters(appliedFilters);
  };

  // Fetch data

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      const filtersObj = filters.map(({ columnKey, operator, value }) => ({
        columnKey,
        operator,
        value,
      }));

      const response = await axios.get<ResponseApiProps>(`${urlApi}`, {
        params: {
          filters: filtersObj,
          page: page + 1, // Adjust for 0-based index
          pageSize: rowsPerPage,
        },
      });

      const data = response.data;
      setRows(data.data || []);
      setTotalItems(data.pagination?.totalItems || 0);
    };
    fetchData();
  }, [filters, page, rowsPerPage, urlApi]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Add dialog
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  return (
    // Layout
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Filter Section */}
      <Paper elevation={2} sx={{ m: 1 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            p: 1,
          }}
        >
          <Stack direction={"row"}>
            <FilterMenu columns={columns} onApply={handleFilterApply} />
          </Stack>
          <Stack direction={"row"}>
            <Button
              variant="contained"
              sx={{
                widht: "auto",
                textTransform: "none",
              }}
              onClick={handleOpenAddDialog}
            >
              Add {title}
            </Button>
          </Stack>
        </Stack>
      </Paper>
      {/* Data grid Section */}
      <Paper sx={{ m: 1 }}>
        <TableContainer sx={{ maxHeight: "79vh" }}>
          <Table stickyHeader aria-label="sticky table" size={"medium"}>
            {/* Header column */}
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    py: 1,
                    px: 2,
                    backgroundColor: "#AFA6A6",
                    fontWeight: "bold",
                    width: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  Action
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    sx={{
                      py: 1,
                      px: 2,
                      backgroundColor: "#AFA6A6",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {/* Body */}
            <TableBody>
              {rows.map((row, rowIndex) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <TableCell align="center" padding="none">
                      <Stack direction="row" justifyContent={"center"}>
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </TableCell>
                    {columns.map((column) => {
                      switch (column.type) {
                        // case "multiselect":
                        case "number":
                        case "text":
                          return (
                            <TableCell
                              key={column.name}
                              align={"left"}
                              sx={{
                                maxWidth: 600, // Batasi lebar sel menjadi 600px
                                whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                                overflow: "hidden", // Sembunyikan teks yang melebihi batas
                                textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                              }}
                            >
                              {row[column.name]}
                            </TableCell>
                          );
                        case "date":
                          return (
                            <TableCell key={column.name}>
                              {new Date(row[column.name]).getFullYear()}
                            </TableCell>
                          );
                        case "boolean":
                          const columnOption = column.options?.find(
                            (option) => option.value === row[column.name]
                          );
                          return (
                            <TableCell key={column.name}>
                              <Chip
                                label={columnOption?.label || "null"}
                                color={
                                  columnOption?.value ? "primary" : "secondary"
                                }
                              />
                            </TableCell>
                          );
                        case "select":
                          return (
                            <TableCell
                              key={column.name}
                              align={"left"}
                              sx={{
                                maxWidth: 600, // Batasi lebar sel menjadi 600px
                                whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                                overflow: "hidden", // Sembunyikan teks yang melebihi batas
                                textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                              }}
                            >
                              {/* {column.options?.find(
                                (option) => option.value === row[column.name]
                              )?.label || ""} */}
                              {row[column.name].name || "null"}
                              {console.info(row[column.name])}
                            </TableCell>
                          );
                        case "multiselect":
                          return (
                            <TableCell
                              key={column.name}
                              sx={{
                                overflow: "hidden",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  overflowX: "auto", // Scroll secara horizontal
                                  // maxWidth: 600,
                                  scrollbarWidth: "thin", // Untuk Firefox, membuat scrollbar lebih tipis
                                }}
                              >
                                <Stack direction="row" spacing={1}>
                                  {row[column.name].map(
                                    (item: any, index: number) => (
                                      <Chip key={index} label={item.name} />
                                    )
                                  )}
                                </Stack>
                              </Box>
                            </TableCell>
                          );
                        default:
                          return null;
                      }
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100, 150, 200]}
          component="div"
          count={totalItems}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <AddDataDialog
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        onAdd={onAdd}
        fields={columns}
        title={"Add " + title}
      />
    </Box>
  );
});

export default DataTable;
