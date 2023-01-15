import { blue, grey, indigo } from "@mui/material/colors";

export type ThemeMode = "light" | "dark";

export const defaultThemeMode: ThemeMode = "dark";
// Should not be exported
const darkThemePalette = {
  primary: {
    main: blue[200],
  },
  secondary: grey,
  divider: "#20222e",
  background: {
    // default: "#292929",
    paper: "rgba(42,43,56,.5)",
    default: "#101119",
    // paper: "black",
  },
  text: {
    primary: grey[100],
    secondary: grey[200],
  },
};

// Should not be exported
const lightThemePalette = {
  primary: indigo,
  secondary: {
    main: grey[800],
  },

  divider: grey[200],
  background: {
    paper: "#ffffff",
    default: grey[300],
  },
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
};

// Main Theme Options
const themeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1350,
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: "500",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          span: {
            textTransform: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          span: {
            textTransform: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
          "&.Mui-expanded": {
            minHeight: "20px",
            ":before": { opacity: "1" },
          },
        },
      },
    },
  },
};

const createThemeOptions = (mode: ThemeMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightThemePalette : darkThemePalette),
  },
  ...themeOptions,
});

export default createThemeOptions;
