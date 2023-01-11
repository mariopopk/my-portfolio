import { ReactNode, useMemo, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  Theme as MuiTheme,
} from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

declare module "@emotion/react" {
  interface Theme extends MuiTheme {}
}

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

// export const themeColors = {
//   palette: {
//     type: "dark",
//     primary: {
//       main: "#7209b7",
//     },
//     error: {
//       main: "#b71c1c",
//     },
//     secondary: {
//       main: "#fff",
//     },
//     success: {
//       main: "#1b5e20",
//     },
//     info: {
//       main: "#f4f4f4",
//     },
//     warning: {
//       main: "#e65100",
//     },
//     divider: "#e5e5e5",
//   },
// };

// const theme: MuiTheme = createTheme({
//   ...themeColors,
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1350,
//     },
//   },
//   components: {
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderColor: themeColors.palette.divider,
//           fontWeight: "500",
//         },
//       },
//     },
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           span: {
//             textTransform: "none",
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: "unset",
//           borderRadius: "0.5rem",
//           borderWidth: "3px",
//         },
//       },
//     },
//     MuiButtonBase: {
//       styleOverrides: {
//         root: {
//           span: {
//             textTransform: "none",
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           boxShadow: "unset",
//         },
//       },
//     },
//     MuiAccordion: {
//       styleOverrides: {
//         root: {
//           boxShadow: "unset",
//           "&.Mui-expanded": {
//             minHeight: "20px",
//             ":before": { opacity: "1" },
//           },
//         },
//       },
//     },
//   },
// });

interface PortfolioThemeProps {
  children?: ReactNode;
}

const PortfolioTheme = ({ children }: PortfolioThemeProps) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PortfolioTheme;
