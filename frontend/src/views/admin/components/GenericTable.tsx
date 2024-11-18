import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Table,
  Sheet,
  Typography,
  ModalOverflow,
  Modal,
  ModalDialog,
  ModalClose,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Autocomplete,
  DialogTitle,
  Divider,
  DialogContent,
  DialogActions,
  Grid,
  Accordion,
  AccordionGroup,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
  CircularProgress,
  IconButton,
} from "@mui/joy";

import PaginationComponent from "./PaginationComponent";
import { SnackbarState } from "./SnackbarState";

// icon
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const styleSelect = {
  width: "100%",
  [`& .MuiSelect-indicator`]: {
    transition: "0.2s",
    [`&.Mui-expanded`]: {
      transform: "rotate(-180deg)",
    },
  },
};

// Define types for different column types
export interface Column<T> {
  label: string;
  key: keyof T;
  type:
    | "string"
    | "number"
    | "date"
    | "boolean"
    | "string[]"
    | "number[]"
    | "string_autocomplete";
  componentShow?: "Chip" | "Avatar" | "Icon" | "Button";
  readonly?: boolean;
  width?: number | string;
  required?: boolean;
  placeholder?: string;
}

interface GenericTableProps<T> {
  widthAction?: number;
  title?: string; // Title of the table
  titleSolo?: string;
  data: T[];
  columns: Column<T>[];
  renderRowActions?: (item: T) => React.ReactNode; // Optionally allow custom row actions
  options?: { [key: string]: string[] }; // Optional options for fields like genres

  onEdit: (updatedItem: T) => Promise<void | boolean>; // Function to handle edit submission
  onDelete: (item: T) => Promise<void | boolean>; // Function to handle delete
  onAdd?: (newItem: T) => Promise<void | boolean | string>; // Function to handle add
  simpleAddItem?: boolean; // Simple add without modal
  onPageChange: (page: number) => void; // Function to handle pagination
  page: number; // Current page
  pageSize: number; // Items per page
  totalItems: number; // Total items
  totalPages: number; // Total page

  filters?: { [key: string]: string[] | number[] | boolean[] }; // Optional options for fields like genres
  onFilterChange?: (key: string, value: string) => void; // Optional filter change handler
  applySearch?: boolean;
  placeholderSearch?: string;
  realtimeSearch?: boolean; // Optional realtime search
  onSearchApply?: (value: string) => void;

  onDetail?: (item: T) => void;
}
export default function GenericTable<T>({
  widthAction = 250,
  title,
  titleSolo = title,
  data,
  columns,
  renderRowActions,
  options = {},
  filters = {},
  applySearch = false,
  placeholderSearch = "Search",
  realtimeSearch = false,
  onFilterChange = () => {},
  onSearchApply = () => {},
  onEdit,
  onAdd,
  simpleAddItem = false,
  onDelete,
  onPageChange,
  page,
  pageSize,
  totalItems,
  totalPages,
  onDetail,
}: GenericTableProps<T>) {
  const [selected, setSelected] = React.useState<readonly (keyof T)[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<T | null>(null);
  const [newItem, setNewItem] = React.useState<T>({} as T);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [multiSelectValues, setMultiSelectValues] = React.useState<{
    [key: string]: string[];
  }>({
    genres: [],
    actors: [],
    awards: [],
  });
  const [boolSelectValues, setBoolSelectValues] = React.useState<{
    [key: string]: boolean;
  }>({});

  // Tambahkan state error untuk menyimpan status error dari input yang required
  const [errorFields, setErrorFields] = React.useState<{
    [key: string]: string;
  }>({});

  // Fungsi untuk mengecek apakah ada field yang kosong dan dibutuhkan
  // Perbaiki penggunaan validation functions
  const validateRequiredFields = (formData: { [key: string]: any }) => {
    const newErrorFields: { [key: string]: string } = {};

    columns.forEach((col) => {
      if (
        col.type === "string[]" ||
        col.type === "number[]" ||
        col.type === "boolean"
      ) {
        return;
      }
      if (col.required && !formData[col.key as string]) {
        newErrorFields[col.key as string] = `${col.label} is required`;
      }
    });

    Object.keys(multiSelectValues).forEach((key) => {
      const column = columns.find((col) => col.key === key);
      if (column?.required && multiSelectValues[key]?.length === 0) {
        newErrorFields[key as string] = `${column.label} is required`;
      }
    });

    Object.keys(boolSelectValues).forEach((key) => {
      const column = columns.find((col) => col.key === key);
      if (column?.required && boolSelectValues[key] === undefined) {
        newErrorFields[key as string] = `${column.label} is required`;
      }
    });
    setErrorFields(newErrorFields);
    return Object.keys(newErrorFields).length === 0;
  };

  // Modal state
  const [openAddModal, setOpenAddModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [openDeleteItemModal, setOpenDeleteItemModal] = React.useState(false);
  const [openDeleteItemsModal, setOpenDeleteItemsModal] = React.useState(false);

  const defaultSnackbarState: SnackbarState = {
    title: "default_snackbar",
    key: "default_snackbar",
    open: false,
    vertical: "top",
    horizontal: "center",
    variant: "solid",
    size: "md",
    color: "primary",
    autoHideDuration: 5000,
  };

  // TODO (DONE): Snackbar for all actions
  const [snackbarState, setSnackbarState] =
    React.useState<SnackbarState>(defaultSnackbarState);

  const handleOpenSnackbar = (newSnackbarState: SnackbarState) => {
    setSnackbarState({ ...newSnackbarState, open: true });
  };

  const handleCloseSnackbar = () => {
    setSnackbarState((prev) => ({ ...prev, open: false }));
  };

  // TODO (DONE): Handle filter change
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  const handleNextPage = () => {
    if (!page || page < totalPages) {
      handlePageChange((page || 1) + 1);
    }
  };

  const handlePrevPage = () => {
    if (page && page > 1) {
      handlePageChange(page - 1);
    }
  };

  // TODO (DONE): Handle modal behavior
  // Handle modal opening
  const handleOpenAddModal = () => {
    setNewItem({} as T);
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false); // Hanya tutup modal tanpa reset newItem
  };

  const handleOpenEditModal = (item: T) => {
    setSelectedItem(item);

    // Populate multiSelectValues for `string[]` types
    const newMultiSelectValues: { [key: string]: string[] } = {};
    const newBoolSelectValues: { [key: string]: boolean } = {};
    columns.forEach((col) => {
      if (col.type === "string[]") {
        newMultiSelectValues[col.key as string] = item[col.key] as string[];
      }
      if (col.type === "boolean") {
        newBoolSelectValues[col.key as string] = item[col.key] as boolean;
      }
    });
    setMultiSelectValues(newMultiSelectValues);
    setBoolSelectValues(newBoolSelectValues);
    setOpenEditModal(true);
  };

  const handleOpenDeleteItemModal = (item: T) => {
    setSelectedItem(item);
    setOpenDeleteItemModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    // setSelectedItem(null);
  };

  // TODO (DONE): Handle delete item
  // Handle delete item
  const handleDeleteItem = async () => {
    if (!selectedItem) return;

    try {
      const success = await onDelete(selectedItem);
      success
        ? handleOpenSnackbar({
            ...defaultSnackbarState,
            open: true,
            title: "Item deleted successfully",
            key: "item_deleted_success",
            color: "warning",
            variant: "solid",
            autoHideDuration: 5000,
          })
        : handleOpenSnackbar({
            ...defaultSnackbarState,
            open: true,
            title: "Failed to delete item",
            key: "failed_delete_item",
            color: "danger",
            variant: "solid",
            autoHideDuration: 5000,
          });
    } catch (error) {
      console.error("Failed to delete item", error);
      handleOpenSnackbar({
        ...defaultSnackbarState,
        open: true,
        title: "Failed to delete item",
        key: "failed_delete_item",
        color: "danger",
        variant: "solid",
        autoHideDuration: 5000,
      });
    } finally {
      setOpenDeleteItemModal(false);
    }
  };

  // TODO (DONE): Handle delete items
  const handleDeleteItems = async () => {
    try {
      // Loop melalui item yang dipilih dan panggil fungsi delete untuk setiap item
      console.info("Data: ", data);
      console.info("Selected: ", selected);
      for (const itemKey of selected) {
        console.info("Item Key: ", itemKey);
        const itemsToDelete = data.filter((item: any) => {
          if (itemKey.hasOwnProperty("id")) {
            return (itemKey as any).id === item.id;
          } else if (itemKey.hasOwnProperty("code")) {
            return (itemKey as any).code === item.code;
          }
          return false;
        });
        for (const itemToDelete of itemsToDelete) {
          if (itemToDelete) {
            await onDelete(itemToDelete);
          }
        }
      }
      // open snackbar success
      handleOpenSnackbar({
        ...defaultSnackbarState,
        open: true,
        title: "Items deleted successfully",
        key: "items_deleted_success",
        color: "warning",
        variant: "solid",
        autoHideDuration: 5000,
      });

      // Reset selected setelah berhasil dihapus
      setSelected([]);
    } catch (error) {
      console.error("Failed to delete items", error);
      // open snackbar error
      handleOpenSnackbar({
        ...defaultSnackbarState,
        open: true,
        title: "Failed to delete items",
        key: "failed_delete_items",
        color: "danger",
        variant: "solid",
        autoHideDuration: 5000,
      });
    } finally {
      setOpenDeleteItemsModal(false);
    }
  };

  // TODO (DONE): Handle form submission for edit
  // Handle form submission for edit
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Convert form data to JSON, excluding array fields
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    // Validasi form: jika gagal validasi, tidak melakukan submit
    if (!validateRequiredFields(formJson)) {
      handleOpenSnackbar({
        ...defaultSnackbarState,
        open: true,
        title: "Please fill in all required fields",
        key: "required_fields",
        color: "warning",
        variant: "solid",
        autoHideDuration: 5000,
      });
      return;
    }

    // Overwrite array fields with values from multiSelectValues
    const finalData = {
      ...selectedItem,
      ...formJson,
      ...multiSelectValues,
      ...boolSelectValues,
    } as T;

    console.log("Submitted edit data:", finalData);

    if (selectedItem && onEdit) {
      try {
        const success = await onEdit(finalData);
        if (success) {
          handleOpenSnackbar({
            ...defaultSnackbarState,
            open: true,
            title: "Item updated successfully",
            key: "item_updated_success",
            color: "success",
            variant: "solid",
            autoHideDuration: 5000,
          });
        } else {
          handleOpenSnackbar({
            ...defaultSnackbarState,
            open: true,
            title: "Failed to update item",
            key: "failed_update_item",
            color: "danger",
            variant: "solid",
            autoHideDuration: 5000,
          });
        }
        setOpenEditModal(false);
        setSelectedItem(null);
        setMultiSelectValues({
          genres: [],
          actors: [],
          awards: [],
        });
        setBoolSelectValues({});
      } catch (error) {
        console.error("Failed to update data", error);
        handleOpenSnackbar({
          ...defaultSnackbarState,
          open: true,
          title: String(error),
          key: "failed_update_item",
          color: "danger",
          variant: "solid",
          autoHideDuration: 5000,
        });
      }
    }
  };

  // TODO (DONE): Handle form submission for add
  const handleFormAddSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Mengambil data dari form menggunakan FormData
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries()); // Konversi FormData ke objek

    const finalData = {
      ...newItem,
      ...formJson,
      ...multiSelectValues, // Gabungkan nilai multiSelectValues
      ...boolSelectValues,
    };

    // Validasi form: jika gagal validasi, tidak melakukan submit
    if (!validateRequiredFields(formJson)) {
      handleOpenSnackbar({
        ...defaultSnackbarState,
        open: true,
        title: "Please fill in all required fields",
        key: "required_fields_add",
        color: "warning",
        variant: "solid",
        autoHideDuration: 5000,
      });
      return;
    }
    // Lakukan sesuatu dengan data yang sudah di-submit
    console.log("Submitted add data:", finalData);
    console.info("New Item: ", newItem);
    if (newItem && onAdd) {
      try {
        const response = await onAdd(finalData as T); // Gabungkan data form dengan newItem
        response === true
          ? handleOpenSnackbar({
              ...defaultSnackbarState,
              open: true,
              title: "Item added successfully",
              key: "item_added_success",
              color: "success",
              variant: "solid",
              autoHideDuration: 5000,
            })
          : handleOpenSnackbar({
              ...defaultSnackbarState,
              open: true,
              title: String(response),
              key: "failed_add_item",
              color: "danger",
              variant: "solid",
              autoHideDuration: 5000,
            });
        setOpenAddModal(false);
        setNewItem({} as T);
        setMultiSelectValues({
          genres: [],
          actors: [],
          awards: [],
        });
        setBoolSelectValues({});
      } catch (error: any) {
        // open snackbar error
        handleOpenSnackbar({
          ...defaultSnackbarState,
          open: true,
          title: String(error.message || error),
          key: "failed_add_item",
          color: "danger",
          variant: "solid",
          autoHideDuration: 5000,
        });
      }
    }
  };

  // TODO (DONE): Helper function to render the table data based on type
  // Helper function to render the table data based on type
  const renderCellData = (item: T, col: Column<T>) => {
    const value = item[col.key];
    switch (col.type) {
      case "string":
      case "string_autocomplete":
        return (
          <Typography level="body-md" noWrap>
            {value as string}
          </Typography>
        );
      case "number":
        return <Typography level="body-md">{value as number}</Typography>;
      case "date":
        return (
          <Typography level="body-md">
            {new Date(value as string).toLocaleDateString()}
          </Typography>
        );
      case "boolean":
        return (
          <Checkbox
            size="sm"
            variant="solid"
            checked={value as boolean}
            color={(value as boolean) ? "success" : "danger"}
            onClick={() => {}}
          />
        );
      case "string[]":
        return (
          <Typography level="body-md" noWrap>
            {(value as string[]).join(", ")}
          </Typography>
        );
      case "number[]":
        return (
          <Typography level="body-md" noWrap>
            {(value as number[]).join(", ")}
          </Typography>
        );
      default:
        return <Typography level="body-md">{String(value)}</Typography>;
    }
  };

  // TODO (DONE): Helper function to render input in edit modal based on type
  const renderInputField = (
    value: any,
    col: Column<T>,
    options: string[] = []
  ) => {
    console.info("Error Fields: ", errorFields);
    switch (col.type) {
      case "string":
        return (
          <Input
            placeholder={col.placeholder}
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            defaultValue={value as string}
            required={col.required}
          />
        );
      case "number":
        return (
          <Input
            placeholder={col.placeholder}
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            type="number"
            defaultValue={String(value)}
            required={col.required}
          />
        );
      case "date":
        return (
          <Input
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            type="date"
            defaultValue={
              value
                ? new Date(value as string).toISOString().split("T")[0]
                : new Date().toISOString().split("T")[0]
            }
            required={col.required}
          />
        );
      case "boolean":
        return (
          <Checkbox
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            checked={boolSelectValues[col.key as string]} // Ensure a boolean value
            onChange={(e) => {
              const newValue = e.target.checked;
              setBoolSelectValues((prev) => ({
                ...prev,
                [col.key as string]: newValue,
              }));
            }}
            required={col.required}
          />
        );
      case "string[]":
        return (
          <Autocomplete
            placeholder={
              multiSelectValues[col.key as string]?.length
                ? ""
                : col.placeholder
            }
            readOnly={col.readonly}
            multiple
            options={options}
            name={String(col.key)} // Menggunakan name untuk FormData
            value={multiSelectValues[col.key as string] || []}
            onChange={(e, value) => {
              setMultiSelectValues((prev) => ({
                ...prev,
                [col.key as string]: value as string[],
              }));
            }}
            slotProps={{
              listbox: { sx: { zIndex: 30000 } },
            }}
          />
        );

      case "string_autocomplete":
        return (
          <Autocomplete
            placeholder={col.placeholder}
            readOnly={col.readonly}
            options={options}
            name={String(col.key)} // Menggunakan name untuk FormData
            value={value as string}
            slotProps={{
              listbox: { sx: { zIndex: 30000 } },
            }}
          />
        );
      case "number[]":
        return (
          <Input
            placeholder={col.placeholder}
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            defaultValue={(value as number[]).join(", ")}
          />
        );
      default:
        return (
          <Input
            placeholder={col.placeholder}
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            defaultValue={String(value)}
            required={col.required}
          />
        );
    }
  };

  // TODO (DONE): Render error message for required fields
  // Render error message for required fields
  const renderErrorField = (key: string) => {
    return errorFields[key] ? (
      <Typography level="body-md" color="danger">
        {errorFields[key]}
      </Typography>
    ) : null;
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          {title || "Table Title"}
        </Typography>
        {/* Header */}
        <Box
          flex={1}
          flexGrow={1}
          gap={2}
          justifyContent={{
            xs: "space-between",
            sm: "flex-end",
          }}
          sx={{
            alignItems: "flex-end",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Button
            disabled={selected.length === 0}
            variant="solid"
            color="danger"
            startDecorator={<DeleteForeverRoundedIcon />}
            onClick={() => setOpenDeleteItemsModal(true)} // Ganti dari handleDeleteItem menjadi handleDeleteItems
            sx={{
              height: "fit-content",
            }}
          >
            Delete Selected Items
          </Button>
          {/* simple add item */}
          {!simpleAddItem && onAdd && (
            <Button
              variant="solid"
              color="success"
              startDecorator={<AddRoundedIcon />}
              onClick={() => handleOpenAddModal()} // Ganti dari handleDeleteItem menjadi handleDeleteItems
            >
              Add Item
            </Button>
          )}
        </Box>
      </Box>

      {simpleAddItem && (
        <Box
          gap={2}
          justifyContent={{
            xs: "space-between",
            sm: "flex-end",
            md: "flex-end",
          }}
          sx={{
            flex: {
              xs: 1,
              sm: 1,
              md: 0,
            },
            flexGrow: {
              xs: 1,
              sm: 1,
              md: 0,
            },
            alignItems: "flex-end",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "columm",
            },
            height: "fit-content",
          }}
        >
          {/* simple add item */}

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexGrow: {
                xs: 1,
                sm: 1,
                md: 0,
              },
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
              },
              height: "fit-content",
            }}
          >
            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                handleFormAddSubmit(event);
              }}
              style={{
                display: "flex",
                gap: 2,
                flexGrow: 1,
                height: "fit-content",
              }}
            >
              <Stack
                spacing={2}
                direction={"row"}
                gap={2}
                sx={{
                  alignItems: "flex-end",
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                  },
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                  },
                  height: "fit-content",
                }}
              >
                {columns.map((col) =>
                  col.readonly ? null : (
                    <FormControl
                      key={col.key as string}
                      sx={{
                        display: "flex",
                        flexGrow: 1,
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: "100%",
                        },
                      }}
                    >
                      <FormLabel>
                        {col.label}{" "}
                        {col.required ? (
                          <span style={{ color: "red" }}>*</span>
                        ) : (
                          ""
                        )}
                      </FormLabel>

                      {renderInputField(
                        newItem[col.key],
                        col,
                        options[col.key as string] || []
                      )}
                      {renderErrorField(col.key as string)}
                    </FormControl>
                  )
                )}
                <Button
                  type="submit"
                  sx={{
                    height: "fit-content",
                    width: {
                      xs: "100%",
                      sm: "100%",
                    },
                  }}
                >
                  {"Add " + titleSolo}
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      )}

      <AccordionGroup
        size={"sm"}
        transition={{
          initial: "0.3s ease-out",
          expanded: "0.2s ease",
        }}
        sx={{
          flexGrow: "0 !important",
        }}
      >
        <Accordion>
          <AccordionSummary indicator={<FilterAltRoundedIcon />}>
            <Typography level="title-md">Filter and Search</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Filter Custom Components */}
            <Box sx={{ mb: 1, display: "flex", flexDirection: "column" }}>
              {/* Filter Dropdowns */}
              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                sx={{ flexGrow: "initial", justifyContent: "left" }}
              >
                {filters &&
                  Object.keys(filters).map((key) => (
                    <Grid
                      key={key}
                      xs={6}
                      sm={4}
                      md={4}
                      lg={2}
                      xl={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      {/* label bold*/}
                      <Typography level="title-sm">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </Typography>
                      {/* select */}
                      <Autocomplete
                        placeholder={"All " + key}
                        sx={styleSelect}
                        options={filters[key].map((filter) => filter)}
                        onChange={(e, value) => {
                          onFilterChange(key, value as string);
                          console.info(key, value);
                        }}
                      />
                    </Grid>
                  ))}
              </Grid>

              {/* Search & Apply */}
              {applySearch && (
                <Grid
                  container
                  spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  sx={{ flexGrow: 1, justifyContent: "left", m: 0 }}
                >
                  <Grid
                    xs={12}
                    sm={12}
                    md={8}
                    lg={10}
                    xl={10}
                    sx={{ display: "flex", justifyContent: "center", px: 0 }}
                  >
                    {/* TODO: Optimasi pencarian menggunakan form */}
                    {/* Search Bar */}
                    <Input
                      placeholder={placeholderSearch}
                      value={searchQuery}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSearchQuery(value);
                        if (realtimeSearch) {
                          onSearchApply(value);
                        }
                      }}
                      sx={{ width: "100%", mt: 2 }}
                    />
                  </Grid>
                  <Grid
                    xs={12}
                    sm={12}
                    md={4}
                    lg={2}
                    xl={2}
                    sx={{ display: "flex", justifyContent: "center", pr: 0 }}
                  >
                    <Button
                      onClick={() => {
                        onSearchApply(searchQuery as string);
                      }}
                      sx={{ flexGrow: 1, mt: 2 }}
                    >
                      Apply Search
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
      {/* n item selected */}
      <Box ml={1}>
        <Typography level="body-md">
          {selected.length > 0 ? `${selected.length} item selected` : ""}
        </Typography>
      </Box>
      {/* Tabel */}
      <Sheet
        variant="outlined"
        sx={{
          // display: { xs: "none", sm: "initial" },
          width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
            tableLayout: "fixed",
            width: "100%", // Pastikan tabel menggunakan lebar penuh
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: 48,
                  textAlign: "center",
                  padding: "12px 6px",
                  verticalAlign: "middle",
                }}
              >
                <Checkbox
                  size="sm"
                  indeterminate={
                    selected.length > 0 && selected.length !== data.length
                  }
                  checked={selected.length === data.length}
                  onChange={(event) => {
                    setSelected(
                      event.target.checked
                        ? data.map((item) => item as keyof T)
                        : []
                    );
                  }}
                  color={
                    selected.length > 0 || selected.length === data.length
                      ? "primary"
                      : undefined
                  }
                  sx={{ verticalAlign: "text-bottom" }}
                />
              </th>
              {columns.map((col) => (
                <Box
                  key={(col.key as string) + "-header"}
                  component={"th" as any}
                  sx={{
                    width: col.width || {
                      xs: "100px",
                      sm: 200,
                    },
                    flexWrap: "wrap",
                    resize: "horizontal",
                    verticalAlign: "middle !important",
                    position: col.key === "actions" ? "sticky" : "static",
                    right: col.key === "actions" ? 0 : "unset", // Atur hanya untuk kolom "Actions"
                    backgroundColor: "var(--joy-palette-background-level1)", // Warna latar belakang header
                    zIndex: col.key === "actions" ? 2 : 1, // Prioritas lebih tinggi untuk header
                  }}
                >
                  {col.label}
                </Box>
              ))}

              <Box
                component={"th" as any}
                sx={{
                  width: widthAction,
                  flexWrap: "wrap",
                  verticalAlign: "middle !important",
                  resize: "horizontal",
                  position: "sticky",
                  right: 0,
                  zIndex: 2,
                  backgroundColor:
                    "var(--joy-palette-background-level1) !important", // Warna latar belakang
                  borderLeft:
                    "2px solid var(--joy-palette-info-main)  !important", // Warna border kiri
                  borderBottom:
                    "2px solid var(--joy-palette-primary-main)  !important", // Warna border bawah
                }}
              >
                Actions
              </Box>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center", width: 120 }}>
                  <Checkbox
                    size="sm"
                    checked={selected.includes(item as keyof T)}
                    onChange={(event) => {
                      setSelected((prev) =>
                        event.target.checked
                          ? [...prev, item as keyof T]
                          : prev.filter((i) => i !== (item as keyof T))
                      );
                    }}
                    sx={{ verticalAlign: "text-bottom" }}
                  />
                </td>

                {columns.map((col) => (
                  <td
                    key={col.key as string}
                    onClick={() => {
                      onDetail && onDetail(item);
                    }}
                  >
                    {renderCellData(item, col)}
                  </td>
                ))}

                <td
                  style={{
                    position: "sticky",
                    right: 0,
                    backgroundColor: "var(--joy-palette-background-level1)", // Warna latar belakang header
                    borderLeft:
                      "2px solid var(--joy-palette-info-main)  !important", // Warna border kiri
                    borderBottom:
                      "2px solid var(--joy-palette-primary-main)  !important", // Warna border bawah
                    zIndex: 2,
                    width: widthAction,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "flex-end", // Ratakan elemen-elemen action ke kanan
                    }}
                  >
                    {renderRowActions && renderRowActions(item)}

                    <IconButton
                      variant="outlined"
                      onClick={() => handleOpenEditModal(item)}
                    >
                      <EditOutlinedIcon
                        sx={{
                          color: "warning.solidBg",
                        }}
                      />
                    </IconButton>

                    <IconButton
                      variant="outlined"
                      onClick={() => handleOpenDeleteItemModal(item)}
                    >
                      <DeleteForeverRoundedIcon
                        sx={{
                          color: "danger.solidBg",
                        }}
                      />
                    </IconButton>
                  </Box>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              /* Placeholder for empty data */
              <tr>
                <td>
                  <Box>
                    <CircularProgress />
                  </Box>
                </td>
              </tr>
            )}
            {data.length === 0 && (
              /* Placeholder for empty data */
              <tr>
                <td>
                  <Box>
                    <Typography level="body-md">
                      No data available yet 😢
                    </Typography>
                  </Box>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Sheet>
      {/* Dinamis: Pagination Logic */}
      <PaginationComponent
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
        totalItems={totalItems}
        handlePageChange={handlePageChange}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      {/* Add Item Modal */}
      <Modal
        open={openAddModal}
        onClose={handleCloseAddModal} // Menutup modal tanpa mereset newItem
        sx={{ zIndex: 20000 }}
      >
        <ModalOverflow>
          <ModalDialog layout="fullscreen">
            <ModalClose />
            <Typography level="h2">Add Item</Typography>
            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                handleFormAddSubmit(event);
              }}
            >
              <Stack spacing={2}>
                {columns.map((col) =>
                  col.readonly ? null : (
                    <FormControl key={col.key as string}>
                      <FormLabel>
                        {col.label}{" "}
                        {col.required ? (
                          <span style={{ color: "red" }}>*</span>
                        ) : (
                          ""
                        )}
                      </FormLabel>
                      {renderInputField(
                        newItem[col.key],
                        col,
                        options[col.key as string] || []
                      )}
                      {renderErrorField(col.key as string)}
                    </FormControl>
                  )
                )}
                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
      {/* Edit Modal */}
      <Modal
        open={openEditModal}
        onClose={handleCloseEditModal}
        sx={{ zIndex: 20000 }}
      >
        <ModalOverflow>
          <ModalDialog layout="fullscreen">
            <ModalClose />
            <Typography level="h2">Edit Item</Typography>
            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                handleFormSubmit(event);
              }}
            >
              <Stack spacing={2}>
                {columns.map((col) =>
                  col.readonly ? null : (
                    <FormControl key={col.key as string}>
                      <FormLabel>
                        {col.label}{" "}
                        {col.required ? (
                          <span style={{ color: "red" }}>*</span>
                        ) : (
                          ""
                        )}
                      </FormLabel>
                      {renderInputField(
                        selectedItem ? selectedItem[col.key] : "",
                        col,
                        options[col.key as string] || []
                      )}
                      {renderErrorField(col.key as string)}
                    </FormControl>
                  )
                )}
                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
      {/* Delete single item */}
      <Modal
        open={openDeleteItemModal}
        onClose={() => setOpenDeleteItemModal(false)}
        sx={{ zIndex: 20000 }}
      >
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            {`Are you sure you want to discard the item ${
              selectedItem
                ? (selectedItem as any).title ||
                  (selectedItem as any).id ||
                  (selectedItem as any).code
                : ""
            }?`}
          </DialogContent>

          <DialogActions>
            <Button
              variant="solid"
              color="danger"
              onClick={() => handleDeleteItem()}
            >
              Discard notes
            </Button>
            <Button
              variant="plain"
              color="neutral"
              onClick={() => setOpenDeleteItemModal(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
      {/* Delete selected */}
      <Modal
        open={openDeleteItemsModal}
        onClose={() => setOpenDeleteItemsModal(false)}
        sx={{ zIndex: 20000 }}
      >
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            {`Are you sure you want to discard the ${selected.length} items?`}
          </DialogContent>

          <DialogActions>
            <Button
              variant="solid"
              color="danger"
              onClick={() => handleDeleteItems()}
            >
              Delete selected items
            </Button>
            <Button
              variant="plain"
              color="neutral"
              onClick={() => setOpenDeleteItemsModal(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
      {/* Snackbar All */}
      <Snackbar
        key={snackbarState.key}
        open={snackbarState.open}
        anchorOrigin={{
          vertical: snackbarState.vertical,
          horizontal: snackbarState.horizontal,
        }}
        variant={snackbarState.variant}
        size={snackbarState.size}
        color={snackbarState.color}
        autoHideDuration={snackbarState.autoHideDuration}
        onClose={handleCloseSnackbar}
        startDecorator={
          snackbarState.color === "success" ? (
            <CheckCircleOutlinedIcon />
          ) : snackbarState.color === "danger" ? (
            <DangerousOutlinedIcon />
          ) : (
            <WarningAmberOutlinedIcon />
          )
        }
        sx={{
          zIndex: 30000,
        }}
      >
        {snackbarState.title}
      </Snackbar>
    </React.Fragment>
  );
}
