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
  Menu,
  MenuItem,
  Chip,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Slide,
  Switch,
} from "@mui/material";

// icon
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

//
import { useEffect, useMemo, useState } from "react";
import { API_URL } from "../../../config/constants";
import GenreModel from "../../../models/GenreModel";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import axios from "axios";
import { ResponseApiProps } from "../../../config/ResponseApi";
import AwardModel from "../../../models/AwardModel";
import ActorModel from "../../../models/ActorModel";
import AddMovieDialog from "../components/AddMovie";
import AddDataDialog from "../components/AddMovie";

interface Filter {
  id: number;
  column: string;
  operator: string;
  value: string;
}

export default function MoviesTable() {
  const columnModels = useMemo(
    () => [
      {
        id: "id",
        disablePadding: false,
        label: "ID",
        widht: 100,
        type: "number",
        align: "left",
      },
      {
        id: "title",
        disablePadding: false,
        label: "Title",
        widht: 500,
        minWidht: "80%",
        type: "string",
        align: "left",
      },
      {
        id: "synopsis",
        disablePadding: false,
        label: "Synopsis",
        widht: 300,
        minWidht: "80%",
        type: "string",
        align: "left",
      },
      {
        id: "posterUrl",
        disablePadding: false,
        label: "Poster Url",
        widht: 300,
        minWidht: "80%",
        type: "string",
        align: "left",
      },
      {
        id: "releaseDate",
        disablePadding: false,
        label: "Release Date",
        widht: 200,
        minWidht: "10%",
        type: "number",
        align: "left",
      },
      {
        id: "approvalStatus",
        disablePadding: false,
        label: "Approval Status",
        widht: 200,
        minWidht: "10%",
        type: "boolean",
        align: "left",
      },
      {
        id: "rating",
        disablePadding: false,
        label: "Rating",
        widht: 200,
        minWidht: "10%",
        type: "number",
        align: "left",
      },
      {
        id: "country",
        disablePadding: false,
        label: "Country",
        widht: 200,
        minWidht: "10%",
        type: "string",
        align: "left",
      },
      {
        id: "director",
        disablePadding: false,
        label: "Director",
        widht: 200,
        minWidht: "10%",
        type: "string",
        align: "left",
      },
      {
        id: "genres",
        disablePadding: false,
        label: "Genres",
        widht: 200,
        minWidht: "10%",
        type: "string",
        align: "left",
      },
      {
        id: "actors",
        disablePadding: false,
        label: "Actors",
        widht: 200,
        minWidht: "10%",
        type: "string",
        align: "left",
      },
      {
        id: "awards",
        disablePadding: false,
        label: "Awards",
        widht: 200,
        minWidht: "10%",
        type: "string",
        align: "left",
      },
    ],
    []
  );

  const memoizedColumns = useMemo(() => {
    return [
      {
        id: "actions",
        disablePadding: true,
        label: "Actions",
        minWidht: 10,
        type: "string",
        align: "center",
      },
      ...columnModels,
    ];
  }, [columnModels]);

  // State untuk menyimpan data movie
  const [rows, setRows] = useState<any[]>([]);

  // Fetch data movie dari API ketika komponen dimuat
  useEffect(() => {
    const fetchMovies = async () => {
      // Memanggil API untuk mendapatkan data movie
      await axios
        .get<ResponseApiProps>(`${API_URL}/movies`)
        .then((res) => {
          setRows(res.data?.data);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
        });
    };
    fetchMovies();
  }, []);

  // Data state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [tempRow, setTempRow] = useState<any>(null); // Temporary state for storing the edited data

  // Filter state
  const [selectedColumn, setSelectedColumn] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filters, setFilters] = useState<Filter[]>([]); // State to store added filters

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Add dialog
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  // Function to handle adding a new movie
  const handleAddData = async (movieData: any) => {
    try {
      // Send POST request to the backend to add the new movie
      const response = await axios.post<ResponseApiProps>(`${API_URL}/movies`, movieData);

      // Get the newly added movie from the response
      const newMovie = response.data?.data;

      // Add the new movie to the current state
      if (newMovie) {
        setRows((prevRows) => [...prevRows, newMovie]);
      }
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  // State untuk mengatur dialog
  const [openDialog, setOpenDialog] = useState(false);

  const operators = [
    { id: "contains", label: "contains" },
    { id: "equals", label: "equals" },
    { id: "startsWith", label: "starts with" },
    { id: "endsWith", label: "ends with" },
  ];

  // Data function
  const handleEditRow = (rowData: any) => {
    setTempRow({ ...rowData }); // Create a copy of the row for editing
  };

  // const handleCancelEdit = () => {
  //   setTempRow(null); // Clear temporary row data
  // };

  // const handleTempRowChange = (columnId: string, value: any) => {
  //   setTempRow((prevRow: any) => ({
  //     ...prevRow,
  //     [columnId]: value,
  //   }));
  // };
  // const handleSaveEdit = async () => {
  //   // Simulate save, e.g., send the `tempRow` to an API or update state
  //   console.log("Save data:", tempRow);
  //   const updatedMovie = await updateMovie(tempRow); // Simpan perubahan ke API
  //   if (updatedMovie) {
  //     const updatedRows = rows.map((row) =>
  //       row.id === updatedMovie.id ? updatedMovie : row
  //     ); // Update row yang sesuai di state
  //     setRows(updatedRows);
  //     handleCloseAddDialog(); // Tutup dialog setelah menyimpan
  //   }
  // };

  // const updateMovie = async (movieData: any) => {
  //   try {
  //     const res = await axios.put<ResponseApiProps>(
  //       `${API_URL}/movies/${movieData.id}`,
  //       movieData
  //     );
  //     return res.data?.data; // Kembalikan data movie yang telah diperbarui
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  // Page function
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = useMemo(
    () => [...rows].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, page, rowsPerPage]
  );


  // Filter function
  const handleOpenFilter = (event: React.MouseEvent<HTMLElement>) => {
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

  return (
    <Box sx={{ width: "100%", overflow: "hidden", m: 1 }}>
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
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleOpenFilter}
              sx={{
                widht: "auto",
              }}
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
                          handleFilterChange(
                            filter.id,
                            "column",
                            e.target.value
                          )
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
          </Stack>
          <Stack direction={"row"}>
            <Button
              variant="contained"
              onClick={handleOpenAddDialog}
              sx={{
                widht: "auto",
                textTransform: "none",
              }}
            >
              Add Movie
            </Button>
          </Stack>
        </Stack>
      </Paper>
      {/* Data grid Section */}
      <Paper sx={{ m: 1 }}>
        <TableContainer sx={{ maxHeight: "80vh" }}>
          <Table
            sx={{ minWidth: 750, width: "100%" }}
            // aria-labelledby="tableTitle"
            stickyHeader
            aria-label="sticky table"
            size={"medium"}
          >
            {/* Header column */}
            <TableHead>
              <TableRow>
                {memoizedColumns.map((ColumnModel) => (
                  <TableCell
                    key={ColumnModel.id}
                    sx={{
                      textAlign: (ColumnModel.align as any) || "center",
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

            {/* Body */}
            <TableBody>
              {visibleRows.map((row, rowIndex) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    {/* Action */}
                    <TableCell align="center">
                      <Stack direction="row" justifyContent={"center"}>
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleEditRow(row)}>
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </TableCell>
                    <TableCell
                      key={"id"}
                      align={"left"}
                      sx={{
                        maxWidth: 600, // Batasi lebar sel menjadi 600px
                        whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                        overflow: "hidden", // Sembunyikan teks yang melebihi batas
                        textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                      }}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      key={"title"}
                      align={"left"}
                      sx={{
                        maxWidth: 600, // Batasi lebar sel menjadi 600px
                        whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                        overflow: "hidden", // Sembunyikan teks yang melebihi batas
                        textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                      }}
                    >
                      {row.title}
                    </TableCell>
                    <TableCell
                      key={"synopsis"}
                      align={"left"}
                      sx={{
                        maxWidth: 600, // Batasi lebar sel menjadi 600px
                        whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                        overflow: "hidden", // Sembunyikan teks yang melebihi batas
                        textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                      }}
                    >
                      {row.synopsis}
                    </TableCell>
                    <TableCell
                      key={"posterUrl"}
                      align={"left"}
                      sx={{
                        maxWidth: 600, // Batasi lebar sel menjadi 600px
                        whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                        overflow: "hidden", // Sembunyikan teks yang melebihi batas
                        textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                      }}
                    >
                      {row.posterUrl}
                    </TableCell>
                    <TableCell
                      key={"releaseDate"}
                      align={"left"}
                      sx={{
                        maxWidth: 600, // Batasi lebar sel menjadi 600px
                        whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                        overflow: "hidden", // Sembunyikan teks yang melebihi batas
                        textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                      }}
                    >
                      {new Date(row["releaseDate"]).getFullYear()}
                    </TableCell>
                    <TableCell
                      key={"approvalStatus"}
                      align={"left"}
                      sx={{
                        maxWidth: 600, // Batasi lebar sel menjadi 600px
                        whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                        overflow: "hidden", // Sembunyikan teks yang melebihi batas
                        textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                      }}
                    >
                      {/* Switch Component */}
                      <Switch
                        checked={row.approvalStatus}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </TableCell>
                    <TableCell
                      key={"rating"}
                      align={"left"}
                      sx={{
                        maxWidth: 600, // Batasi lebar sel menjadi 600px
                        whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                        overflow: "hidden", // Sembunyikan teks yang melebihi batas
                        textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                      }}
                    >
                      {row.rating}
                    </TableCell>
                    <TableCell
                      key={"country"}
                      align={"left"}
                      sx={{
                        maxWidth: 600, // Batasi lebar sel menjadi 600px
                        whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                        overflow: "hidden", // Sembunyikan teks yang melebihi batas
                        textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                      }}
                    >
                      {row.country?.label}
                    </TableCell>
                    <TableCell
                      key={"director"}
                      align={"left"}
                      sx={{
                        maxWidth: 600, // Batasi lebar sel menjadi 600px
                        whiteSpace: "nowrap", // Pastikan hanya menampilkan satu baris
                        overflow: "hidden", // Sembunyikan teks yang melebihi batas
                        textOverflow: "ellipsis", // Tambahkan "..." jika teks dipotong
                      }}
                    >
                      {row.director?.name}
                    </TableCell>
                    <TableCell
                      key={"genres"}
                      sx={{
                        // maxWidth: 900,
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
                          {row.genres.map(
                            (genre: GenreModel, index: number) => (
                              <Chip key={index} label={genre.name} />
                            )
                          )}
                        </Stack>
                      </Box>
                    </TableCell>
                    <TableCell
                      key={"actors"}
                      sx={{
                        // maxWidth: 900,
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
                          {row.actors.map(
                            (actor: ActorModel, index: number) => (
                              <Chip key={index} label={actor.name} />
                            )
                          )}
                        </Stack>
                      </Box>
                    </TableCell>
                    <TableCell
                      key={"awards"}
                      sx={{
                        // maxWidth: 900,
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
                          {row.awards.map(
                            (award: AwardModel, index: number) => (
                              <Chip key={index} label={award.name} />
                            )
                          )}
                        </Stack>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
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

      {/* Dialog Add Movie */}

      {/* Dialog edit */}
      {/* Fullscreen Dialog */}

      <AddDataDialog
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        onAdd={handleAddData}
        fields={[
          { name: "title", label: "Title", type: "text", isRequired: true },
          { name: "synopsis", label: "Synopsis", type: "text", isRequired: true },
          { name: "posterUrl", label: "Poster URL", type: "text", isRequired: true },
          { name: "releaseDate", label: "Release Date", type: "date", isRequired: true },
          { name: "approvalStatus", label: "Approval Status", type: "boolean" },
          { name: "rating", label: "Rating", type: "number", isRequired: true },
          {
            name: "countryCode",
            label: "Country",
            type: "select",
            options: [
              { value: "US", label: "United States" },
              { value: "CA", label: "Canada" },
              { value: "FR", label: "France" },
            ],
            isRequired: true,
          },
          {
            name: "directorId",
            label: "Directors",
            type: "select",
            options: [
              { value: 1, label: "Tom Hanks" },
              { value: 2, label: "Brad Pitt" },
              { value: 3, label: "Natalie Portman" },
            ],
          },
          {
            name: "actors",
            label: "Actors",
            type: "multiselect",
            options: [
              { value: 1, label: "Leonardo DiCaprio" },
              { value: 2, label: "Brad Pitt" },
              { value: 3, label: "Natalie Portman" },
            ],
          },
          {
            name: "genres",
            label: "Genres",
            type: "multiselect",
            options: [
              { value: 1, label: "Action" },
              { value: 2, label: "Drama" },
              { value: 3, label: "Comedy" },
            ],
          },
          {
            name: "awards",
            label: "Awards",
            type: "multiselect",
            options: [
              { value: 1, label: "Oscar" },
              { value: 2, label: "Golden Globe" },
              { value: 3, label: "BAFTA" },
            ],
          },
        ]}
        title="Add Movie"
      />
    </Box>
  );
}