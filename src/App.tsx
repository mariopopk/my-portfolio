import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import Projects from "./components/Projects";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import AppBar from "./components/AppBar.tsx/AppBar";

function App() {
  return (
    <>
      <AppBar />
      <Jumbotron />
      <Container>
        <Projects />
      </Container>
    </>
  );
}

export default App;
