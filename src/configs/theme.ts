import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  // No custom tokens found, you can skip the theme augmentation.
  interface Palette {
    star?: {
      "main"?: string;
      "50"?: string;
      "100"?: string;
      "200"?: string;
      "300"?: string;
      "400"?: string;
      "500"?: string;
      "600"?: string;
      "700"?: string;
      "800"?: string;
      "900"?: string;
    };
  }
}

const primary = {
  "50": "#fff1f2",
  "100": "#ffe4e6",
  "200": "#fecdd3",
  "300": "#fda4af",
  "400": "#fb7185",
  "500": "#f43f5e",
  "600": "#e11d48",
  "700": "#be123c",
  "800": "#9f1239",
  "900": "#881337",
};

const star = {
  "main": "#F5F10BFF",
  "50": "#fffbea",
  "100": "#fef3c7",
  "200": "#fde68a",
  "300": "#fcd34d",
  "400": "#fbbf24",
  "500": "#f59e0b",
  "600": "#d97706",
  "700": "#b45309",
  "800": "#92400e",
  "900": "#78350f",
};

const theme = extendTheme({
  components: {
    JoySkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
  fontFamily: {
    body: "Quicksand",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: primary,
        star: star,
      },
    },
    dark: {
      palette: {
        primary: primary,
        star: star,
      },
    },
  }
});

export default theme;
