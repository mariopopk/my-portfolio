import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { DarkMode, WbSunny } from "@mui/icons-material";
import { defaultThemeMode, ThemeMode } from "../../theme/createThemeOptions";
import { usePortfolioTheme } from "../../theme/Theme";

export default function ToggleTheme() {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(defaultThemeMode);

  const { toggleColorMode } = usePortfolioTheme();

  const toggleTheme = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: ThemeMode
  ) => {
    if (newAlignment !== null) {
      setCurrentTheme(newAlignment);
      toggleColorMode();
    }
  };

  return (
    <ToggleButtonGroup
      value={currentTheme}
      exclusive
      size="small"
      onChange={toggleTheme}
      aria-label="Toggle Theme Mode"
      color="primary"
    >
      <ToggleButton value="light" aria-label="Light">
        <WbSunny fontSize="small" />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="Dark">
        <DarkMode fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
