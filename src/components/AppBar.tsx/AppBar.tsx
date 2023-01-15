import { GitHub } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function AppBar() {
  const theme = useTheme();
  return (
    <Box>
      <MuiAppBar
        position="static"
        color="transparent"
        elevation={0}
        style={{
          borderBottom: "1px solid",
          borderBottomColor: theme.palette.divider,
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              href="https://github.com/mariopopk"
              size="large"
              color="primary"
              startIcon={<GitHub />}
            >
              <Typography variant="inherit" letterSpacing="-1px">
                Mario Popoca
              </Typography>
            </Button>
          </Box>
          <ToggleTheme />
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
