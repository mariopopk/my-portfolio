import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4} md={6}></Grid>

        <Grid item xs={12} lg={4} md={6}>
          <ProjectCard />
        </Grid>

        <Grid item xs={12} lg={4} md={6}>
          <ProjectCard />
        </Grid>
      </Grid>
    </>
  );
}
