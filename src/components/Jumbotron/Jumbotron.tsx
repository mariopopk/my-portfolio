import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import style from "./Jumbotron.module.css";

export default function Jumbotron() {
  return (
    <Box>
      <Typography variant="h6" marginBottom="0.45rem">
        Hi, I am Mario
      </Typography>

      <Typography variant="h3" fontWeight={"bold"}>
        Looking for a<br />
        <span className={style["color-changing"]}>Software Engineer</span>?
      </Typography>
      <Typography variant="h6" my={"1rem"}>
        Take a look at some of my projects!
      </Typography>
      <Stack direction="row" spacing={2}>
        <IconButton color="primary">
          <GitHub fontSize="large" />
        </IconButton>

        <IconButton color="primary">
          <LinkedIn fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
}
