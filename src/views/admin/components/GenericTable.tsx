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
} from "@mui/joy";

import PaginationComponent from "./PaginationComponent";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

// Define types for different column types
interface Column<T> {
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
}

interface GenericTableProps<T> {
  data: T[];
  columns: Column<T>[];
  renderRowActions?: (item: T) => React.ReactNode; // Optionally allow custom row actions
  options?: { [key: string]: string[] }; // Optional options for fields like genres
  onEdit: (updatedItem: T) => Promise<void>; // Function to handle edit submission
  onDelete: (item: T) => void; // Function to handle delete
  onAdd?: (newItem: T) => void; // Function to handle add
  onPageChange: (page: number) => void; // Function to handle pagination
  page: number; // Current page
  pageSize: number; // Items per page
  totalItems: number; // Total items
  totalPages: number; // Total page
}
export default function GenericTable<T>({
  data,
  columns,
  renderRowActions,
  options = {},
  onEdit,
  onAdd,
  onDelete,
  onPageChange,
  page,
  pageSize,
  totalItems,
  totalPages,
}: GenericTableProps<T>) {
  const [selected, setSelected] = React.useState<readonly (keyof T)[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<T | null>(null);
  const [newItem, setNewItem] = React.useState<T | null>(null);

  // Modal state
  const [openAddModal, setOpenAddModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [openDeleteItemModal, setOpenDeleteItemModal] = React.useState(false);
  const [openDeleteItemsModal, setOpenDeleteItemsModal] = React.useState(false);

  // Handle pagination
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
    setOpenEditModal(true);
  };

  const handleOpenDeleteItemModal = (item: T) => {
    setSelectedItem(item);
    setOpenDeleteItemModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelectedItem(null);
  };

  // Handle delete item
  const handleDeleteItem = async () => {
    if (!selectedItem) return;

    try {
      await onDelete(selectedItem);
    } catch (error) {
      console.error("Failed to delete item", error);
    } finally {
      setOpenDeleteItemModal(false);
    }
  };

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

      // Reset selected setelah berhasil dihapus
      setSelected([]);
    } catch (error) {
      console.error("Failed to delete items", error);
    } finally {
      setOpenDeleteItemsModal(false);
    }
  };

  // Handle form submission for edit
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Mengambil data dari form menggunakan FormData
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries()); // Konversi FormData ke objek

    // Lakukan sesuatu dengan data yang sudah di-submit
    console.log("Submitted data:", formJson);
    if (selectedItem && onEdit) {
      try {
        await onEdit({ ...selectedItem, ...formJson } as T); // Gabungkan data form dengan selectedItem
      } catch (error) {
        console.error("Failed to update data", error);
      } finally {
        setOpenEditModal(false);
        setSelectedItem(null);
      }
    }
  };
  const handleFormAddSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Mengambil data dari form menggunakan FormData
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries()); // Konversi FormData ke objek

    // Lakukan sesuatu dengan data yang sudah di-submit
    console.log("Submitted data:", formJson);
    if (newItem && onAdd) {
      try {
        await onAdd(newItem);
      } catch (error) {
        console.error("Failed to add data", error);
      } finally {
        setOpenAddModal(false);
        setNewItem(null);
      }
    }
  };
  // Helper function to render the table data based on type
  const renderCellData = (item: T, col: Column<T>) => {
    const value = item[col.key];
    switch (col.type) {
      case "string":
      case "string_autocomplete":
        return (
          <Typography level="body-xs" noWrap>
            {value as string}
          </Typography>
        );
      case "number":
        return <Typography level="body-xs">{value as number}</Typography>;
      case "date":
        return (
          <Typography level="body-xs">
            {new Date(value as string).toLocaleDateString()}
          </Typography>
        );
      case "boolean":
        return <Checkbox size="sm" checked={value as boolean} disabled />;
      case "string[]":
        return (
          <Typography level="body-xs" noWrap>
            {(value as string[]).join(", ")}
          </Typography>
        );
      case "number[]":
        return (
          <Typography level="body-xs" noWrap>
            {(value as number[]).join(", ")}
          </Typography>
        );
      default:
        return <Typography level="body-xs">{String(value)}</Typography>;
    }
  };

  // Helper function to render input in edit modal based on type
  const renderInputField = (col: Column<T>, options: string[] = []) => {
    const currentItem = selectedItem || newItem;
    if (!currentItem) return null;
    const value = currentItem[col.key];

    switch (col.type) {
      case "string":
        return (
          <Input
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            defaultValue={value as string}
          />
        );
      case "number":
        return (
          <Input
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            type="number"
            defaultValue={String(value)}
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
          />
        );
      case "boolean":
        return (
          <Checkbox
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            defaultChecked={value as boolean}
          />
        );
      case "string[]":
        return (
          <Autocomplete
            readOnly={col.readonly}
            multiple
            options={options}
            name={String(col.key)} // Menggunakan name untuk FormData
            defaultValue={value as string[]}
            slotProps={{
              listbox: { sx: { zIndex: 30000 } },
            }}
          />
        );
      case "string_autocomplete":
        return (
          <Autocomplete
            readOnly={col.readonly}
            options={options}
            name={String(col.key)} // Menggunakan name untuk FormData
            defaultValue={value as string}
            slotProps={{
              listbox: { sx: { zIndex: 30000 } },
            }}
          />
        );
      case "number[]":
        return (
          <Input
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            defaultValue={(value as number[]).join(", ")}
          />
        );
      default:
        return (
          <Input
            readOnly={col.readonly}
            name={String(col.key)} // Menggunakan name untuk FormData
            defaultValue={String(value)}
          />
        );
    }
  };

  return (
    <React.Fragment>
      <Button
        disabled={selected.length === 0}
        variant="solid"
        color="danger"
        onClick={() => setOpenDeleteItemsModal(true)} // Ganti dari handleDeleteItem menjadi handleDeleteItems
      >
        Delete Selected Items
      </Button>
      <Button
        variant="solid"
        color="danger"
        onClick={() => handleOpenAddModal()} // Ganti dari handleDeleteItem menjadi handleDeleteItems
      >
        Add Item
      </Button>

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
                  component={"th" as any}
                  sx={{
                    width: col.width || {
                      xs: "100px",
                      sm: 200,
                    },
                    flexWrap: "wrap",
                    resize: "horizontal",
                    verticalAlign: "middle !important",
                  }}
                >
                  {col.label}
                </Box>
              ))}
              <Box
                component={"th" as any}
                sx={{
                  width: {
                    xs: "100px",
                    sm: 200,
                  },
                  flexWrap: "wrap",
                  resize: "horizontal",
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
                  <td key={col.key as string}>{renderCellData(item, col)}</td>
                ))}
                <td>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Button onClick={() => handleOpenEditModal(item)}>
                      Edit
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => handleOpenDeleteItemModal(item)}
                    >
                      Delete
                    </Button>
                    {renderRowActions && renderRowActions(item)}
                  </Box>
                </td>
              </tr>
            ))}
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
              onReset={() => setNewItem({} as T)} // Tombol reset untuk menghapus input
            >
              <Stack spacing={2}>
                {columns.map((col) => (
                  <FormControl key={col.key as string}>
                    <FormLabel>{col.label}</FormLabel>
                    {renderInputField(col, options[col.key as string] || [])}
                  </FormControl>
                ))}
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
                {columns.map((col) => (
                  <FormControl key={col.key as string}>
                    <FormLabel>{col.label}</FormLabel>
                    {/* Pass options for multiple select */}
                    {renderInputField(col, options[col.key as string] || [])}
                  </FormControl>
                ))}
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
            {`Are you sure you want to discard the items?`}
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
    </React.Fragment>
  );
}
