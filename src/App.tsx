import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  GitHub as GitHubIcon,
  MoreHoriz as MoreHorizIcon,
  Language as Languageicon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import PortfolioTheme from "./Theme/Theme";

function App() {
  return (
    <PortfolioTheme>
      <Typography>Take a look at my projects!</Typography>

      <Card variant="outlined" sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Full Stack Project
          </Typography>
          <Typography variant="h5" component="div">
            Netflix Clone
          </Typography>

          <Typography variant="body2"></Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 345, borderColor: "" }}>
        {/* <CardHeader
          avatar={
            <Avatar
              variant="square"
              aria-label="Netflix Clone"
              src="https://images.ctfassets.net/5hn1f663deh9/1ZvqPMl7z5AcyY1KJy8Dvm/e7b0efd2e8408e9cfad7a3671d522105/netflix-logo.png"
            >
              <img
                style={{ height: "100%", width: "auto" }}
                alt="Netflix Logo"
              />
            </Avatar>
          }
          title="Netflix Clone"
          subheader="Full Stack"
        /> */}
        <CardMedia
          component="img"
          height="194"
          image="https://occ-0-2218-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd3DP_WEsTYQrNYn9Pg0vIYGS7itiw-SmaglU6uew1lrM3weF0lhiKqg2WNZvMZHLNWf5kaWUOOfeJyx-8ajnqlsRylercjwUAgd8z6Gsfmi9nOdoQ54_QNyJgpqyJiFkZ5Y.jpg?r=127"
          alt="Paella dish"
        />
        {/* <CardContent>
          <Typography>Summary</Typography>
          <Typography variant="body2" color="text.secondary">
            Netflix Clone build with custom component library and design system.
            Buttons, menus, colors and other items are incosistent across the
            different official front-end projects of Netflix. This project
            attemps to solve those inconsistencies.
          </Typography>
        </CardContent>

        <CardContent>
          <Stack direction="row" spacing={1}>
            <Chip
              size="small"
              avatar={
                <Avatar src="https://images.ctfassets.net/5hn1f663deh9/44xgysZw4NYCgGdsLV5DO6/603204ac9aaad59dc6c277ba72410ef7/react-icon.png"></Avatar>
              }
              label="React"
              variant="outlined"
            />

            <Chip
              size="small"
              avatar={
                <Avatar src="https://images.ctfassets.net/5hn1f663deh9/6MGic9AOJ0ObJPZYV76qDN/d3d137a0d258ec58efa5a8b61db9baa7/graphQL-logo.png"></Avatar>
              }
              label="GraphQL"
              variant="outlined"
            />
            <Chip
              size="small"
              avatar={
                <Avatar>
                  <MoreHorizIcon />
                </Avatar>
              }
              label="See More"
              variant="outlined"
            />
          </Stack>
        </CardContent> */}
        {/* <CardActions disableSpacing>
          <Button variant="contained" startIcon={<Languageicon />} size="small">
            Live Project
          </Button>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<GitHubIcon />}
            size="small"
          >
            Source Code
          </Button>
        </CardActions> */}
      </Card>
    </PortfolioTheme>
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
