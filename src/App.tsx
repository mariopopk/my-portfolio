import { Box, Container, Grid } from "@mui/material";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import AppBar from "./components/AppBar.tsx/AppBar";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <AppBar />

      {/* <Box>
        <Alert color="info" icon={<OfflineBolt />}>
          Upgrade in progress! I will be adding more projects soon!
        </Alert>
      </Box> */}

      <Container>
        <Box sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} lg={8}>
              <Box
                sx={{
                  minHeight: { xs: "80vh", md: "350px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Jumbotron />
              </Box>
            </Grid>

            <Grid item xs={12} lg={4} md={6}>
              <ProjectCard />
            </Grid>

            <Grid item xs={12} lg={4} md={6}>
              <ProjectCard />
            </Grid>

            <Grid item xs={12} lg={4} md={6}>
              <ProjectCard />
            </Grid>

            <Grid item xs={12} lg={4} md={6}>
              <ProjectCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
