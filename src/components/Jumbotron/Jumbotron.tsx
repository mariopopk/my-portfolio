import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import style from "./Jumbotron.module.css";

export default function Jumbotron() {
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "0.5rem",
        }}
        variant="h6"
      >
        Hi, I am Mario
      </Typography>

      <Typography
        sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, lineHeight: "1.25" }}
        fontWeight={"bold"}
      >
        Looking for a<br />
        <span className={style["color-changing"]}>Software Engineer</span>?
      </Typography>
      <Typography variant="h6" my={"1rem"}>
        Take a look at some of my projects!
      </Typography>
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" href="https://github.com/mariopopk">
          <GitHub fontSize="large" />
        </IconButton>

        <IconButton color="primary">
          <LinkedIn
            fontSize="large"
            href="https://www.linkedin.com/in/mario-popoca/"
          />
        </IconButton>
      </Stack>
    </Box>
  );
}
