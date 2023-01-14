import { Button, Grid } from "@mui/material";
import { usePortfolioTheme } from "../theme/Theme";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const theme = usePortfolioTheme();
  return (
    <>
      <Button onClick={theme.toggleColorMode}>Switch</Button>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4} md={6}>
          <ProjectCard flipped={true} />
        </Grid>

        <Grid item xs={12} lg={4} md={6}>
          <ProjectCard flipped={true} />
        </Grid>

        <Grid item xs={12} lg={4} md={6}>
          <ProjectCard flipped={true} />
        </Grid>
      </Grid>
    </>
  );
}
