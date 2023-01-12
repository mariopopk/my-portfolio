import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import createThemeOptions from "./createThemeOptions";

const darkModeTheme = createTheme(createThemeOptions("dark"));

export interface PortfolioThemeProps {
  children?: ReactNode;
}

export default function PortfolioTheme({ children }: PortfolioThemeProps) {
  return <ThemeProvider theme={darkModeTheme}>{children}</ThemeProvider>;
}
