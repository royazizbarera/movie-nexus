import React, { useState, ChangeEvent } from "react";
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
}

export interface Filter {
  id: number;
  column: string;
  operator: string;
  value: string;
}

interface FilterMenuProps {
  columns: Field[];
  operators: Operator[];
  filters: Filter[];
  handleAddFilter: (filter: Filter) => void;
  handleFilterChange: (id: number, field: keyof Filter, value: string) => void;
  handleDeleteFilter: (id: number) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  columns,
  operators,
  filters,
  handleAddFilter,
  handleFilterChange,
  handleDeleteFilter,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedColumn, setSelectedColumn] = useState<string>("");
  const [selectedOperator, setSelectedOperator] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");

  const open = Boolean(anchorEl);

  const handleOpenFilter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  const handleApplyFilter = () => {
    if (selectedColumn && selectedOperator && filterValue) {
      handleAddFilter({
        id: filters.length + 1,
        column: selectedColumn,
        operator: selectedOperator,
        value: filterValue,
      });
      setSelectedColumn("");
      setSelectedOperator("");
      setFilterValue("");
    }
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpenFilter}
        sx={{ width: "auto" }}
      >
        Filter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseFilter}
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
                  {columns.map((column) => (
                    <MenuItem key={column.label} value={column.label}>
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
                    handleFilterChange(filter.id, "operator", e.target.value)
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
                {columns.map((column) => (
                  <MenuItem key={column.label} value={column.label}>
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
            <IconButton onClick={handleApplyFilter} aria-label="Add">
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default FilterMenu;