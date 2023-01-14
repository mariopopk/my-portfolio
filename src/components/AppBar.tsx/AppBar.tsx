import { GitHub } from "@mui/icons-material";
import { Button } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function AppBar() {
  return (
    <Box>
      <MuiAppBar
        position="static"
        color="transparent"
        variant="outlined"
        elevation={0}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button size="large" color="primary" startIcon={<GitHub />}>
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
