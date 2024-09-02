import React from "react";
import { Box } from "@mui/material";
import {
  GridRowModes,
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRowModesModel,
  GridRowId,
  GridActionsCellItem,
  GridRowModel,
  GridEventListener,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";

import MoviesDatabase from "../../database/MoviesDatabase";
import EditToolbar from "./AdminEditToolbar"; // Import the EditToolbar

// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { PageContainer } from "@toolpad/core";

const initialRows: GridRowsProp = MoviesDatabase.map((movie, index) => ({
  id: index + 1,
  title: movie.title,
  year: movie.year,
  rating: movie.rating,
  votes: movie.votes,
  duration: movie.duration,
  director: movie.director,
}));

export default function AdminMoviesList() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  const [paginationModel, setPaginationModel] = React.useState({ page: 0, pageSize: 5 });

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleAddRow = () => {
    const id = Math.max(...rows.map(row => row.id)) + 1;
    setRows((oldRows) => [...oldRows, { id, title: "", year: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "title" },
    }));

    // If the new row is added, scroll to the last page and focus on the new row.
    const totalRowCount = rows.length + 1;
    const totalPages = Math.ceil(totalRowCount / paginationModel.pageSize);

    setPaginationModel((oldModel) => ({
      ...oldModel,
      page: totalPages - 1,
    }));
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 50, editable: false },
    { field: "title", headerName: "Title", width: 200, editable: true },
    { field: "year", headerName: "Year", width: 100, editable: true },
    { field: "rating", headerName: "Rating", width: 100, editable: true },
    { field: "votes", headerName: "Votes", width: 100, editable: true },
    { field: "duration", headerName: "Duration", width: 150, editable: true },
    { field: "director", headerName: "Director", width: 200, editable: true },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <PageContainer>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            pageSizeOptions={[5, 10, 25, 50, 100]}
            paginationModel={paginationModel}
            onPaginationModelChange={(model) => setPaginationModel(model)}
            slots={{
              toolbar: EditToolbar as any,
            }}
            slotProps={{
              toolbar: { setRows, setRowModesModel, handleAddRow },
            }}
            autoHeight
          />
        </Box>
      </Box>
    </PageContainer>
  );
}
