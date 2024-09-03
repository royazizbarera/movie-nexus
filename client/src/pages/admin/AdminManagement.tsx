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

import EditToolbar from "./AdminEditToolbar"; // Import the EditToolbar
import { PageContainer } from "@toolpad/core";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

interface AdminManagementProps {
  initialRows: GridRowsProp;
  columns: GridColDef[];
  emptyRowTemplate: () => any; // Function that returns the template for a new row
  toolbarProps?: any; // Optional props for the toolbar, if needed
}

export default function AdminManagement({
  initialRows,
  columns,
  emptyRowTemplate,
  toolbarProps,
}: AdminManagementProps) {
  const initialPageSize = 5;
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: initialPageSize,
  });

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
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
    const id = Math.max(...rows.map((row) => row.id)) + 1;
    const newRow = emptyRowTemplate();
    setRows((oldRows) => [...oldRows, { id, ...newRow }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: Object.keys(newRow)[0] },
    }));

    const totalRowCount = rows.length + 1;
    const totalPages = Math.ceil(totalRowCount / paginationModel.pageSize);

    setPaginationModel((oldModel) => ({
      ...oldModel,
      page: totalPages - 1,
    }));
  };

  return (
    <PageContainer>
      <Box
        minHeight={
          rows.length < initialPageSize || paginationModel.pageSize === initialPageSize
            ? "100vh"
            : undefined
        }
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={[
              ...columns,
              {
                field: "actions",
                type: "actions",
                headerName: "Actions",
                width: 100,
                cellClassName: "actions",
                getActions: ({ id }) => {
                  const isInEditMode =
                    rowModesModel[id]?.mode === GridRowModes.Edit;

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
            ]}
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
              toolbar: {
                setRows,
                setRowModesModel,
                handleAddRow,
                emptyRowTemplate,
                ...toolbarProps,
              },
            }}
            autoHeight={
              paginationModel.pageSize === initialPageSize ||
              rows.length < initialPageSize
            }
            sx={{
              "--DataGrid-containerBackground": "#fff",
              "--DataGrid-pinnedBackground": "#fff",
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f5f5f5",
                color: "#000",
              },
            }}
          />
        </Box>
      </Box>
    </PageContainer>
  );
}
