import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Button, IconButton, Stack, TextField } from "@mui/material";

// icon
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export interface HeadCell {
  id: string;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
}
interface AdminManagementProps {
  title?: string;
  rows: any[];
  headCells: any[];
}

export default function AdminManagement(props: AdminManagementProps) {
  const { title, rows, headCells } = props;
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [editableRow, setEditableRow] = React.useState<number | null>(null);
  const [tempRow, setTempRow] = React.useState<any>(null); // Temporary state for storing the edited data

  function EnhancedTableToolbar() {
    return (
      <Toolbar
        sx={[
          {
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          },
        ]}
      >
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title ?? ""}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none", // Menjaga teks tidak dalam huruf kapital semua
            minWidth: "150px", // Berikan minWidth untuk memastikan teks tidak terpotong
            maxWidth: "auto", // Mengizinkan tombol memanjang sesuai teks
          }}
        >
          Tambahkan {title}
        </Button>
      </Toolbar>
    );
  }

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

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                  >
                    {headCell.label}
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
                    {/* Render data berdasarkan headCells */}
                    {headCells.map((headCell) => (
                      <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        sx={{
                          maxWidth: 600, // Batasi lebar sel menjadi 600px
                          whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                          overflow: "hidden", // Sembunyikan teks yang melebihi batas
                          textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                        }}
                      >
                        {isEditing ? (
                          <TextField
                            value={tempRow[headCell.id] ?? ""}
                            onChange={(e) =>
                              setTempRow({
                                ...tempRow,
                                [headCell.id]: e.target.value,
                              })
                            }
                          />
                        ) : (
                          row[headCell.id]
                        )}
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
                        <IconButton onClick={() => handleEdit(rowIndex, row)}>
                          <EditIcon />
                        </IconButton>
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
