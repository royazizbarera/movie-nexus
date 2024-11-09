import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { toggleSidebar } from "../utils";
import { useApprovalStore } from "../../../contexts/approvalStore";
import { Badge } from "@mui/joy";

export default function Header() {
  const { totalUnapprovedMovies, totalUnapprovedReviews } = useApprovalStore();

  return (
    <Sheet
      sx={{
        display: { xs: "flex", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 10,
        // width: '100vw',
        height: "var(--Header-height)",
        zIndex: 9995,
        m: 2,
        gap: 1,
        borderBottom: "1px solid",
        borderColor: "background.level1",
        boxShadow: "sm",
        backgroundColor: "transparent",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "52px",
            [theme.breakpoints.up("md")]: {
              "--Header-height": "0px",
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="soft"
        color="primary"
        size="sm"
      >
        <Badge
          badgeContent={totalUnapprovedMovies + totalUnapprovedReviews}
          color="success"
        >
          <MenuIcon />
        </Badge>
      </IconButton>
    </Sheet>
  );
}
