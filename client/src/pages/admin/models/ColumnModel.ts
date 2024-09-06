import { TableCellProps } from "@mui/material";

export interface ColumnModel {
  id: string;
  disablePadding: boolean;
  label: string;
  minWidht?: number;
  type?: string;
  align?: TableCellProps["align"];
}