import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  FormControl,
  TextField,
  Slide,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  Switch,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Field from "../models/FieldModel";

interface AddDataProps {
  open: boolean;
  onClose: () => void;
  onAdd: (data: any) => void;
  fields: Field[]; // Configuration for fields
  title: string; // Dialog title
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} timeout={200} {...props} />; // Reduced timeout
});

export default function AddDataDialog(props: AddDataProps) {
  const { open, onClose, onAdd, fields, title } = props;

  // Form state
  const [formData, setFormData] = useState<any>({});
  useEffect(() => {
    console.info(formData);
  }, [formData]);
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle select change
  const handleSelectChange = (e: SelectChangeEvent<any>, name: string) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  // Handle submit
  const handleAddData = () => {
    onAdd(formData);
    onClose(); // Close the dialog
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
            {title}
          </Typography>
          <Button autoFocus color="inherit" onClick={handleAddData}>
            Save
          </Button>
        </Toolbar>
      </AppBar>

      <Box p={2}>
        <form>
          <Stack spacing={2}>
            {fields.map((field) => {
              switch (field.type) {
                case "text":
                case "date":
                  return (
                    <FormControl fullWidth key={field.name}>
                      <TextField
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        variant="outlined"
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.isRequired}
                        InputLabelProps={
                          field.type === "date" ? { shrink: true } : undefined
                        }
                      />
                    </FormControl>
                  );
                case "number":
                  return (
                    <FormControl fullWidth key={field.name}>
                      <TextField
                        label={field.label}
                        name={field.name}
                        type="number"
                        variant="outlined"
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: parseFloat(e.target.value),
                          })
                        }
                        required={field.isRequired}
                      />
                    </FormControl>
                  );
                case "select":
                  return (
                    <FormControl fullWidth key={field.name}>
                      <InputLabel>{field.label}</InputLabel>
                      <Select
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleSelectChange(e, field.name)}
                      >
                        {field.options?.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  );
                case "multiselect":
                  return (
                    <FormControl fullWidth key={field.name}>
                      <InputLabel>{field.label}</InputLabel>
                      <Select
                        multiple
                        name={field.name}
                        value={formData[field.name] || []}
                        onChange={(e) => handleSelectChange(e, field.name)}
                        renderValue={(selected) =>
                          (selected as any[])
                            .map(
                              (value) =>
                                field.options?.find(
                                  (option) => option.value === value
                                )?.label
                            )
                            .join(", ")
                        }
                      >
                        {field.options?.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  );
                case "boolean":
                  return (
                    <FormControl
                      fullWidth
                      key={field.name}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <InputLabel>{field.label}</InputLabel>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Typography>False</Typography>
                        <Switch
                          checked={formData[field.name] || false}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.name]: e.target.checked,
                            })
                          }
                          name={field.name}
                        />
                        <Typography>True</Typography>
                      </Stack>
                    </FormControl>
                  );

                default:
                  return null;
              }
            })}

            {/* Buttons */}
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddData}
              >
                Save
              </Button>
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Dialog>
  );
}
