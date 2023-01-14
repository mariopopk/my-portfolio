import { blue, grey, indigo } from "@mui/material/colors";

export type ThemeMode = "light" | "dark";

// Should not be exported
const darkThemePalette = {
  primary: indigo,
  divider: blue[300],
  background: {
    // default: "#292929",
    paper: "#101119",
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
  divider: blue[300],
  background: {
    paper: "#ffffff",
    default: grey[200],
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
        root: {
          borderRadius: "1rem",
        },
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
