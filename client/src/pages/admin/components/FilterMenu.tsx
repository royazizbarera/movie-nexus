import React, { useState, ChangeEvent, useMemo, useEffect } from "react";
import {
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Menu,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Field from "../models/FieldModel";
import { on } from "events";

export interface Operator {
  id: string;
  label: string;
  typeFor: string[];
}

export interface Filter {
  id: number;
  columnKey: string;
  column: string;
  operator: string;
  value: string;
}

interface FilterMenuProps {
  columns: Field[];
  onApply: (filters: Filter[]) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ columns, onApply }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [addFilterCondition, setAddFilterCondition] = useState<boolean>(true); // Defaultnya false
  const [newFilter, setNewFilter] = useState<Filter>({
    id: 0,
    columnKey: "",
    column: "",
    operator: "",
    value: "",
  });

  const open = Boolean(anchorEl);

  const operators = useMemo(
    () => [
      { id: "contains", label: "Contains", typeFor: ["text"] },
      { id: "eq", label: "Equals", typeFor: ["text", "number", "boolean"] },
      {
        id: "neq",
        label: "Not Equals",
        typeFor: ["text", "number", "boolean"],
      },
      { id: "gt", label: "Greater Than", typeFor: ["number"] },
      { id: "lt", label: "Less Than", typeFor: ["number"] },
      { id: "gte", label: "Greater Than or Equals", typeFor: ["number"] },
      { id: "lte", label: "Less Than or Equals", typeFor: ["number"] },
    ],
    []
  );


  // hook filter
  useEffect(() => {
    onApply(filters);
  }, [filters, onApply]);

  // Fungsi untuk menambahkan filter baru
  const handleAddFilter = () => {
    if (newFilter.column && newFilter.operator && newFilter.value) {
      setFilters((prev) => [...prev, { ...newFilter, id: prev.length + 1 }]);
      setNewFilter({ id: 0, columnKey: "", column: "", operator: "", value: "" }); // Reset filter setelah ditambahkan
      // setAddFilterCondition(false); // Sembunyikan form input filter baru
    } else if (!addFilterCondition) {
      handleShowAddFilter();
    }
  };

  // Fungsi untuk memunculkan form input filter baru
  const handleShowAddFilter = () => {
    setAddFilterCondition(true);
  };
  // untu menutup form input filter baru
  const handleHideAddFilter = () => {
    setAddFilterCondition(false);
  };
  // Fungsi untuk mengubah filter yang sudah ada
  const handleChangeFilter = (
    id: number,
    field: keyof Filter,
    value: string
  ) => {
    setFilters((prev) =>
      prev.map((filter) =>
        filter.id === id ? { ...filter, [field]: value } : filter
      )
    );
  };

  // Menghapus filter
  const handleDeleteFilter = (id: number) => {
    setFilters(filters.filter((filter) => filter.id !== id));
  };

  // Membuka menu filter
  const handleOpenFilter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Menutup menu filter
  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  // Menonaktifkan tombol Apply jika tidak ada filter valid
  const isApplyButtonDisabled = () => {
    // Tombol disabled jika semua filter kosong atau filter yang ada tidak lengkap
    return (
      filters.length === 0 && // Tidak ada filter yang valid
      (!newFilter.column || !newFilter.operator || !newFilter.value) // Filter baru belum lengkap
    );
  };

  // Menerapkan filter
  const handleApplyFilter = () => {
    // Jika ada filter yang baru ditambahkan, tambahkan ke dalam list filters
    if (newFilter.column && newFilter.operator && newFilter.value) {
      handleAddFilter();
      setAddFilterCondition(false);
    }
    onApply(filters);
    handleCloseFilter();
    // Lakukan sesuatu dengan filters yang sudah ada
    console.log("Filters applied:", filters);
  };

  return (
    <>
      <Button onClick={handleOpenFilter} sx={{ width: "auto" }}>
        Filter
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseFilter}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            m: 2,
            overflow: "auto",
          }}
        >
          {/* Filter yang sudah ada */}
          {filters.map((filter) => (
            <Box
              key={filter.id}
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: {
                  xs: "wrap",
                  sm: "wrap",
                  md: "nowrap",
                },
              }}
            >
              <FormControl
                variant="standard"
                sx={{
                  width: {
                    xs: "100%", // Full width on extra small screens
                    sm: "45%", // 45% width on small screens
                    // md: "30%", // 30% width on medium screens and above
                  },
                  minWidth: {
                    md: 90,
                  },
                }}
              >
                <InputLabel>Columns</InputLabel>
                <Select
                  value={filter.column}
                  onChange={(e) =>
                    handleChangeFilter(filter.id, "column", e.target.value)
                  }
                  label="Columns"
                >
                  {columns.map((column) => (
                    <MenuItem key={column.label} value={column.label}>
                      {column.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="standard"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "45%",
                    // md: "30%",
                  },
                  minWidth: {
                    md: 90,
                  },
                }}
              >
                <InputLabel>Operator</InputLabel>
                <Select
                  value={filter.operator}
                  onChange={(e) =>
                    handleChangeFilter(filter.id, "operator", e.target.value)
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

              <FormControl
                variant="standard"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    // md: "30%",
                  },
                  minWidth: {
                    md: 90,
                  },
                }}
              >
                <TextField
                  size="small"
                  label="Value"
                  value={filter.value}
                  onChange={(e) =>
                    handleChangeFilter(filter.id, "value", e.target.value)
                  }
                  variant="standard"
                />
              </FormControl>

              <IconButton
                onClick={() => handleDeleteFilter(filter.id)}
                sx={{
                  alignSelf: "center",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}

          {/* Input filter baru hanya jika addFilterCondition true */}
          {addFilterCondition && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: {
                  xs: "wrap",
                  sm: "wrap",
                  md: "nowrap",
                },
              }}
            >
              <FormControl
                variant="standard"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "45%",
                    // md: "30%",
                  },
                  minWidth: {
                    md: 90,
                  },
                }}
              >
                <InputLabel>Columns</InputLabel>
                <Select
                  value={newFilter.column}
                  onChange={(e) => {
                    const selectedColumn = columns.find((col) => col.label === e.target.value);
                    if (selectedColumn) {
                      setNewFilter({
                        ...newFilter,
                        columnKey: selectedColumn.name, // Store columnKey
                        column: selectedColumn.label,  // Store column label
                      });
                    }
                  }}
                  label="Columns"
                >
                  {columns.map((column) => (
                    <MenuItem key={column.label} value={column.label}>
                      {column.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="standard"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "45%",
                    // md: "30%",
                  },
                  minWidth: {
                    md: 90,
                  },
                }}
              >
                <InputLabel>Operator</InputLabel>
                <Select
                  value={newFilter.operator}
                  onChange={(e) =>
                    setNewFilter({ ...newFilter, operator: e.target.value })
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

              <FormControl
                variant="standard"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    // md: "30%",
                  },
                }}
              >
                <TextField
                  size="small"
                  label="Value"
                  value={newFilter.value}
                  onChange={(e) =>
                    setNewFilter({ ...newFilter, value: e.target.value })
                  }
                  placeholder="Filter value"
                  variant="standard"
                />
              </FormControl>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <IconButton
              onClick={handleAddFilter}
              sx={{
                alignSelf: "center",
              }}
            >
              <AddIcon />
            </IconButton>
            {addFilterCondition && (
              <IconButton
                onClick={handleHideAddFilter}
                sx={{
                  alignSelf: "center",
                }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Box>

          <Button
            variant="contained"
            onClick={handleApplyFilter}
            // disabled={isApplyButtonDisabled()}
          >
            Apply
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default FilterMenu;
