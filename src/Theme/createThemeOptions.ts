import { grey, purple } from "@mui/material/colors";

export type ThemeMode = "light" | "dark";

// Should not be exported
const darkThemePalette = {
  palette: {
    type: "dark",
    primary: {
      main: "#7209b7",
    },
    error: {
      main: "#b71c1c",
    },
    secondary: {
      main: "#fff",
    },
    success: {
      main: "#1b5e20",
    },
    info: {
      main: "#f4f4f4",
    },
    warning: {
      main: "#e65100",
    },
    background: {
      default: "rgb(0, 30, 60)",
      paper: "rgb(0, 30, 60)",
    },
    divider: "#e5e5e5",
  },
};

// Should not be exported
const lightThemePalette = {
  // palette values for light mode
  primary: purple,
  divider: purple[200],
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
          // borderColor: themeColors.palette.divider,
          fontWeight: "500",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          span: {
            textTransform: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
          borderRadius: "0.5rem",
          borderWidth: "3px",
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
    ...themeOptions,
  },
});

export default createThemeOptions;
