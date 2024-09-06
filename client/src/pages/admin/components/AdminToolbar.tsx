import { Toolbar, Typography } from "@mui/material";

interface AdminToolbarProps {
  title?: string;
  toolbarAction?: React.ReactNode;
}

export default function AdminToolbar(props: AdminToolbarProps) {
  const { title, toolbarAction } = props;

  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
      ]}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title ?? ""}
      </Typography>
      {toolbarAction}
    </Toolbar>
  );
}
