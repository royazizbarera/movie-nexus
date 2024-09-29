import { createTheme } from '@mui/material/styles';
import Color from 'color';

import logo from "../assets/logo.svg";

// Example primary color
const primaryColor = '#6200ee'; // A deep purple often used in M3
const secondaryColor = '#9F5AFF'; // A deep purple often used in M3
const ratingColor = '#FFD700';

// Menu Colors
const menuColors = {
  primary: 'rgba(255, 255, 255, 0.7)',
  hover: 'white',
  active: 'white',
  backgroundHover: 'rgba(255, 255, 255, 0.1)',
}

const customColors = {
  blue: '#5799ef',
  green: '#43a047',
  orange: '#ff9800',
  onPrimary: '#fff',
  // Add more colors as needed
};

const customColorPalettes = {
  onPrimary: {
    light: Color(customColors.onPrimary).lighten(0.5).hex(),
    main: customColors.onPrimary,
    dark: Color(customColors.onPrimary).darken(0.5).hex(),
    contrastText: '#fff',
  },
  commonBlue: {
    light: Color(customColors.blue).lighten(0.5).hex(),
    main: customColors.blue,
    dark: Color(customColors.blue).darken(0.5).hex(),
    contrastText: '#fff',
  },
  customGreen: {
    light: Color(customColors.green).lighten(0.5).hex(),
    main: customColors.green,
    dark: Color(customColors.green).darken(0.5).hex(),
    contrastText: '#fff',
  },
  customOrange: {
    light: Color(customColors.orange).lighten(0.5).hex(),
    main: customColors.orange,
    dark: Color(customColors.orange).darken(0.5).hex(),
    contrastText: '#fff',
  },
  // Add more palettes for new colors here
};

// Extend the Theme interface to include custom properties
declare module '@mui/material/styles' {
  interface Palette {
    ratingColor: Palette['primary'];
    commonColors: typeof customColorPalettes;
    menuColor: typeof menuColors;
  }
  interface PaletteOptions {
    ratingColor?: PaletteOptions['primary'];
    commonColors?: typeof customColorPalettes;
    menuColor?: typeof menuColors;
  }
}

// Create the MUI theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      light: Color(primaryColor).lighten(0.5).hex(),
      main: primaryColor,
      dark: Color(primaryColor).darken(0.5).hex(),
      contrastText: '#fff',
    },
    secondary: {
      light: Color(secondaryColor).lighten(0.5).hex(),
      main: secondaryColor,
      dark: Color(secondaryColor).darken(0.5).hex(),
      contrastText: '#fff',
    },
    background: {
      default: '#141414',
      paper: '#fff',
    },
    ratingColor: {
      light: Color(ratingColor).lighten(0.5).hex(),
      main: ratingColor,
      dark: Color(ratingColor).darken(0.5).hex(),
      contrastText: '#fff',
    },
    commonColors: customColorPalettes,
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
