import { createContext, ReactNode, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import createThemeOptions from "./createThemeOptions";
import { CssBaseline, PaletteMode } from "@mui/material";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export interface PortfolioThemeProps {
  children?: ReactNode;
}

export function usePortfolioTheme() {
  return useContext(ColorModeContext);
}

export default function PortfolioTheme({ children }: PortfolioThemeProps) {
  const [mode, setMode] = useState<PaletteMode>("light");

  // Theme is hardcoded to darkTheme. Will add the option to switch later
  const theme = createTheme(createThemeOptions(mode));

  const value = {
    toggleColorMode: () => {
      setMode((prevMode: PaletteMode) =>
        prevMode === "light" ? "dark" : "light"
      );
    },
  };

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        {children}

        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
