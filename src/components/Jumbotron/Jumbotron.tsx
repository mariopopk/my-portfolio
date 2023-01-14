import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import ProjectCard from "../ProjectCard";
import style from "./Jumbotron.module.css";

export default function Jumbotron() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
      <Container>
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} lg={8} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Box>
                <Typography
                  variant="h6"
                  borderBottom={`1px solid ${theme.palette.divider}`}
                  marginBottom="1rem"
                >
                  Hi, I am Mario
                </Typography>

                <Typography variant="h3" fontWeight={"bold"}>
                  Looking for a<br />
                  <span className={style["color-changing"]}>
                    Software Engineer
                  </span>
                  ?
                </Typography>
                <Typography variant="h6" mt={"1rem"}>
                  Take a look at some of my projects!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <ProjectCard flipped={false} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
