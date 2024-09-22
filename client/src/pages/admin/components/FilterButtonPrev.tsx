import React, { useState, ChangeEvent, useMemo } from "react";
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

export interface Operator {
  id: string;
  label: string;
  typeFor: string[];
}

export interface Filter {
  id: number;
  column: string;
  operator: string;
  value: string;
}

interface FilterMenuProps {
  columns: Field[];
}

const FilterMenu: React.FC<FilterMenuProps> = ({ columns }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLogicalOperator, setSelectedLogicalOperator] =
    useState<string>("and");
  const [filters, setFilters] = useState<Filter[]>([]);
  const [newFilter, setNewFilter] = useState<Filter>({
    id: 0,
    column: "",
    operator: "",
    value: "",
  });

  const open = Boolean(anchorEl);

  const operators = useMemo(
    () => [
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
      { id: "contains", label: "Contains", typeFor: ["text"] },
      { id: "ncontains", label: "Not Contains", typeFor: ["text"] },
    ],
    []
  );

  const handleAddFilter = () => {
    if (newFilter.column && newFilter.operator && newFilter.value) {
      setFilters((prev) => [...prev, { ...newFilter, id: prev.length + 1 }]);
      setNewFilter({ id: 0, column: "", operator: "", value: "" }); // Reset filter
    }
  };

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

  const handleDeleteFilter = (id: number) => {
    setFilters(filters.filter((filter) => filter.id !== id));
  };

  const handleOpenFilter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  const isApplyButtonDisabled = () => {
    return (
      filters.length === 0 ||
      filters.some(
        (filter) => !filter.column || !filter.operator || !filter.value
      )
    );
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
          <FormControl variant="standard">
            <InputLabel>Logical Operator</InputLabel>
            <Select
              value={selectedLogicalOperator}
              onChange={(e) => setSelectedLogicalOperator(e.target.value)}
              label="Logical Operator"
            >
              <MenuItem value="and">AND</MenuItem>
              <MenuItem value="or">OR</MenuItem>
            </Select>
          </FormControl>

          {filters.map((filter) => (
            <Box key={filter.id} sx={{ display: "flex", gap: 2 }}>
              <FormControl variant="standard">
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
              <FormControl variant="standard">
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
              <FormControl variant="standard">
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
              <IconButton onClick={() => handleDeleteFilter(filter.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FormControl variant="standard" sx={{ minWidth: 90 }}>
              <InputLabel>Columns</InputLabel>
              <Select
                value={newFilter.column}
                onChange={(e) =>
                  setNewFilter({ ...newFilter, column: e.target.value })
                }
                label="Columns"
                fullWidth
              >
                {columns.map((column) => (
                  <MenuItem key={column.label} value={column.label}>
                    {column.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ minWidth: 90 }}>
              <InputLabel>Operator</InputLabel>
              <Select
                value={newFilter.operator}
                onChange={(e) =>
                  setNewFilter({ ...newFilter, operator: e.target.value })
                }
                label="Operator"
                fullWidth
              >
                {operators.map((operator) => (
                  <MenuItem key={operator.id} value={operator.id}>
                    {operator.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard">
              <TextField
                size="small"
                label="Value"
                value={newFilter.value}
                onChange={(e) =>
                  setNewFilter({ ...newFilter, value: e.target.value })
                }
                placeholder="Filter value"
                variant="standard"
                fullWidth
              />
            </FormControl>
            <IconButton onClick={handleAddFilter}>
              <AddIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            onClick={handleCloseFilter}
            disabled={isApplyButtonDisabled()}
          >
            Apply
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default FilterMenu;
