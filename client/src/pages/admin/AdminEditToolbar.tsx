import { GridRowModesModel, GridRowsProp, GridToolbarContainer, GridToolbarExport, GridRowModes } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import { randomId } from "@mui/x-data-grid-generator"; // For generating random IDs

interface EditToolbarProps {
  setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>;
  setRowModesModel: React.Dispatch<React.SetStateAction<GridRowModesModel>>;
  emptyRowTemplate: () => any;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel, emptyRowTemplate } = props;

  const handleClick = () => {
    const id = randomId();
    const newRow = { id, ...emptyRowTemplate() }; // Create a new row using the template
    setRows((oldRows) => [newRow, ...oldRows]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "title" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Data
      </Button>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default EditToolbar;
