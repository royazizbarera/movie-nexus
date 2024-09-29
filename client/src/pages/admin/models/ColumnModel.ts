import { TableCellProps } from "@mui/material";

export interface ColumnModel {
  id: string;
  label: string;
  disablePadding: boolean;
  widht?: string | number;
  maxWidht?: string | number;
  minWidht?: string | number;
  type?: string;
  align?: TableCellProps["align"];
}