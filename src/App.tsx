import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Typography } from "@mui/material";
import Projects from "./components/Projects";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  return (
    <>
      <Jumbotron />
      <Container>
        <Projects />
      </Container>
    </>
  );
}

function TechStack() {
  return (
    <>
      {" "}
      {[
        "Graphql",
        "React",
        "Jest",
        "react-testing-library",
        "component library",
        "publishing npm packages",
        "React Hooks",
        "HTML",
        "CSS",
        "CSS Modules",
        "TypeScript",
        "JavaScript",
        "Node.JS",
        "Front-End Development",
        "Back-end Development",
        "Full-stack Development",
        "Software Development Lifecycle",
        "Git",
        "Accessibility",
        "Responsive Design",
        "Front-end Architecture",
        "Async Programming",
        "Functional Programming",
        "Optimization",
        "React Router",
        "Rollup",
        "JSX",
      ].map((item) => (
        <Typography key={item}>{item}</Typography>
      ))}
    </>
  );
}

export default App;
