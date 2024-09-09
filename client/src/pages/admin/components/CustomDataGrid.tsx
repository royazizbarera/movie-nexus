import * as React from "react";
// mui components
import {
  Box,
  Button,
  Select,
  TextField,
  IconButton,
  FormControl,
  InputLabel,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  FormControlLabel,
  Switch,
  Menu,
  MenuItem,
} from "@mui/material";

// icon
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import { ColumnModel } from "../models/ColumnModel";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface Filter {
  id: number;
  column: string;
  operator: string;
  value: string;
}

interface CustomDataGridProps {
  rows: any[];
  columnModels: ColumnModel[];
}

export default function CustomDataGrid(props: CustomDataGridProps) {
  // Parameter
  const { rows, columnModels } = props;

  // Data state
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [editableRow, setEditableRow] = React.useState<number | null>(null);
  const [tempRow, setTempRow] = React.useState<any>(null); // Temporary state for storing the edited data

  // Filter state
  const [selectedColumn, setSelectedColumn] = React.useState("");
  const [selectedOperator, setSelectedOperator] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("");
  const [filters, setFilters] = React.useState<Filter[]>([]); // State to store added filters

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const operators = [
    { id: "contains", label: "contains" },
    { id: "equals", label: "equals" },
    { id: "startsWith", label: "starts with" },
    { id: "endsWith", label: "ends with" },
  ];

  // Data function
  const handleEdit = (rowIndex: number, rowData: any) => {
    setEditableRow(rowIndex); // Set row as editable
    setTempRow({ ...rowData }); // Create a copy of the row for editing
  };

  const handleCancel = () => {
    setEditableRow(null); // Exit edit mode
    setTempRow(null); // Clear temporary row data
  };

  const handleSave = () => {
    // Simulate save, e.g., send the `tempRow` to an API or update state
    console.log("Save data:", tempRow);

    // Exit edit mode
    setEditableRow(null);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () => [...rows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, page, rowsPerPage]
  );

  const handleTempRowChange = (columnId: string, value: any) => {
    setTempRow((prevRow: any) => ({
      ...prevRow,
      [columnId]: value,
    }));
  };

  const renderEditField = (column: ColumnModel, value: any) => {
    switch (column.type) {
      case "date":
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={value ? dayjs(value) : null}
              onChange={(newValue) => handleTempRowChange(column.id, newValue)}
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
        );
      case "number":
        return (
          <TextField
            size="small"
            type="number"
            value={value || ""}
            onChange={(e) => handleTempRowChange(column.id, e.target.value)}
          />
        );
      default:
        return (
          <TextField
            size="small"
            value={value || ""}
            onChange={(e) => handleTempRowChange(column.id, e.target.value)}
          />
        );
    }
  };

  // Filter function
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddFilter = () => {
    if (selectedColumn && selectedOperator && filterValue) {
      const newFilter = {
        id: filters.length + 1,
        column: selectedColumn,
        operator: selectedOperator,
        value: filterValue,
      };
      setFilters([...filters, newFilter]); // Add new filter to state
      setSelectedColumn(""); // Reset fields
      setSelectedOperator("");
      setFilterValue("");
    }
  };

  const handleFilterChange = (
    id: number,
    field: keyof Filter,
    value: string
  ) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.id === id ? { ...filter, [field]: value } : filter
      )
    );
  };

  const handleDeleteFilter = (id: number) => {
    setFilters(filters.filter((filter) => filter.id !== id)); // Hapus filter berdasarkan id
  };

  // Call back
  const memoizedColumns = React.useMemo(() => {
    return [
      ...columnModels,
      {
        id: "actions",
        disablePadding: true,
        label: "Actions",
        minWidht: 10,
        type: "string",
        align: "center",
      },
    ];
  }, [columnModels]);

  React.useEffect(() => {
    // Update filter when changes
    console.log("Filter changed:", filters);
  }, [filters]);

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Filter Section */}
      <Paper sx={{ width: "100%", mb: 2 }}>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Filter
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                m: 2,
                overflow: "auto",
              }}
            >
              {filters.map((filter) => (
                <Box key={filter.id} sx={{ display: "flex", gap: 2 }}>
                  <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel>Columns</InputLabel>
                    <Select
                      value={filter.column}
                      onChange={(e) =>
                        handleFilterChange(filter.id, "column", e.target.value)
                      }
                      label="Columns"
                    >
                      {columnModels.map((column) => (
                        <MenuItem key={column.id} value={column.id}>
                          {column.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel>Operator</InputLabel>
                    <Select
                      value={filter.operator}
                      onChange={(e) =>
                        handleFilterChange(
                          filter.id,
                          "operator",
                          e.target.value
                        )
                      }
                      label="Operator"
                    >
                      {operators.map((operator) => (
                        <MenuItem key={operator.id} value={operator.id}>
                          {operator.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl variant="standard" sx={{ minWidth: 200 }}>
                    <TextField
                      size="small"
                      label="Value"
                      value={filter.value}
                      onChange={(e) =>
                        handleFilterChange(filter.id, "value", e.target.value)
                      }
                      variant="standard"
                    />
                  </FormControl>
                  <IconButton
                    onClick={() => handleDeleteFilter(filter.id)}
                    aria-label="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}

              {/* New filter */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  <InputLabel>Columns</InputLabel>
                  <Select
                    value={selectedColumn}
                    onChange={(e) => setSelectedColumn(e.target.value)}
                    label="Columns"
                  >
                    {columnModels.map((column) => (
                      <MenuItem key={column.id} value={column.id}>
                        {column.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  <InputLabel>Operator</InputLabel>
                  <Select
                    value={selectedOperator}
                    onChange={(e) => setSelectedOperator(e.target.value)}
                    label="Operator"
                  >
                    {operators.map((operator) => (
                      <MenuItem key={operator.id} value={operator.id}>
                        {operator.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ minWidth: 200 }}>
                  <TextField
                    size="small"
                    label="Value"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    placeholder="Filter value"
                    variant="standard"
                  />
                </FormControl>
                <IconButton onClick={handleAddFilter} aria-label="Add">
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
          </Menu>
        </div>
      </Paper>
      {/* Data grid Section */}
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ maxHeight: "80vh" }}>
          <Table
            sx={{ minWidth: 750, width: "100%" }}
            // aria-labelledby="tableTitle"
            stickyHeader
            aria-label="sticky table"
            size={dense ? "small" : "medium"}
          >
            {/* Header Data */}
            <TableHead>
              <TableRow>
                {memoizedColumns.map((ColumnModel) => (
                  <TableCell
                    key={ColumnModel.id}
                    sx={{
                      textAlign: ColumnModel.align as any || "center",
                      alignContent: ColumnModel.align,
                      fontWeight: "bold",
                      backgroundColor: "#AFA6A6",
                      minWidth: ColumnModel.minWidht || 50,
                      width: ColumnModel.minWidht || 50,
                    }}
                  >
                    {ColumnModel.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row, rowIndex) => {
                const isEditing = editableRow === rowIndex; // Check if the row is being edited
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{
                      cursor: "pointer",
                      backgroundColor:
                        rowIndex % 2 === 0 ? "#AFA6A6" : "#D9D9D9",
                    }}
                  >
                    {/* Render data berdasarkan columnModels */}
                    {columnModels.map((ColumnModel) => (
                      <TableCell
                        key={ColumnModel.id}
                        align={ColumnModel.align}
                        sx={{
                          maxWidth: 600, // Batasi lebar sel menjadi 600px
                          whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                          overflow: "hidden", // Sembunyikan teks yang melebihi batas
                          textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                        }}
                      >
                        {isEditing
                          ? renderEditField(
                              ColumnModel,
                              tempRow[ColumnModel.id]
                            )
                          : ColumnModel.type === "date" && row[ColumnModel.id]
                            ? dayjs(row[ColumnModel.id]).format("YYYY-MM-DD") // Format Dayjs object to string
                            : row[ColumnModel.id]}
                      </TableCell>
                    ))}
                    <TableCell align="center">
                      {isEditing ? (
                        <Stack direction="row">
                          <IconButton onClick={handleSave}>
                            <SaveIcon />
                          </IconButton>
                          <IconButton onClick={handleCancel}>
                            <CancelIcon />
                          </IconButton>
                        </Stack>
                      ) : (
                        <Stack direction="row" justifyContent={"center"}>
                          <IconButton onClick={() => handleEdit(rowIndex, row)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => handleEdit(rowIndex, row)}>
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100, 150, 200]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
