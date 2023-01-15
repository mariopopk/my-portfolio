import { Box, Container, Grid } from "@mui/material";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import AppBar from "./components/AppBar.tsx/AppBar";
import ProjectCard from "./components/ProjectCard";
import { ProjectCardProps } from "./components/ProjectCard/ProjectCard";

// Hardcoded
const projects: ProjectCardProps[] = [
  {
    name: "Netflix Clone",
    type: "Full Stack",
    description:
      "Netflix clone with a more consistent UI and improved responsiveness and accessibility.",
    liveLink: "http://netflix-clone-app.herokuapp.com/",
    sourceCodeLink: "https://github.com/mariopopk/netflix-clone-frontend",
    media: [
      "https://images.ctfassets.net/5hn1f663deh9/uwqXYfOAqGMxqrH0kpZIW/e0077683210fdd1b44075b1ab1203dc9/Screenshot_20230114_020758.png",
      "https://videos.ctfassets.net/5hn1f663deh9/5SOWgIC3nCZD4YBPdN13B6/4345b2509050ed7db080eb1843aa62d8/netflix-clone-desktop.mp4",
    ],
  },
  {
    name: "Component Library",
    type: "Front End",
    description:
      "React Component Library from scratch. Netflix's official UI is incosistent across platforms. This component library attempts to solve that",
    media: [
      "https://images.ctfassets.net/5hn1f663deh9/1nHMNi2PXq10QvcBVRO4sA/7ce98ccc6020b2169265bab74ba488e2/Screen_Shot_2023-01-15_at_1.30.37_PM.png",
    ],
  },
  {
    name: "Bonobos Clone",
    type: "Full Stack",
    description:
      "E-commerce Typescript React + Apollo Postgres application featuring over 200 products of different sizes, cuts, and styles",
    media: [
      "https://images.ctfassets.net/5hn1f663deh9/CrOUJdq8846fP13Kh9nsY/fbf4e6fd417877e56090382f70229790/Screen_Shot_2023-01-14_at_10.23.27_PM.png",
    ],
  },
  {
    name: "Poke-Catch",
    type: "Full Stack",
    description:
      "I am currently working on this project. This is a PokeDex look-alike using Java Springboot for the backend and React for the front end",
    media: [
      "https://images.ctfassets.net/5hn1f663deh9/1EIee1Uro3ksExz9FOvgDR/b4b897955c4909ad1a61409a33024136/pokeball.png",
    ],
  },
];

function App() {
  return (
    <>
      <AppBar />

      <Container style={{ marginBottom: "3rem" }}>
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

            {projects.map((project) => {
              return (
                <Grid key={project.name} item xs={12} lg={4} md={6}>
                  <ProjectCard {...project} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
