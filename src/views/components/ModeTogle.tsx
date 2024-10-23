import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import { Button, IconButton } from "@mui/joy";

import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      onClick={() => {
        const newMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
      }}
      color="primary"
      aria-label="Theme toggle button"
    >
      {mode === "dark" ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
}
