import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  Folder,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  IconButton,
  useTheme,
} from "@mui/material";

import "animate.css";
import cx from "classnames";
import AspectRatioBox from "../AspectRatioBox/AspectRatioBox";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  name?: string;
}

export default function ProjectCard({ name }: ProjectCardProps) {
  const theme = useTheme();

  return (
    <>
      <AspectRatioBox aspectRatio={{ h: 2, w: 3 }}>
        <Card tabIndex={0} className={styles.projectCard}>
          <CardMedia
            style={{ borderRadius: theme.shape.borderRadius, height: "100%" }}
            className={cx(styles.cardMedia)}
            component="video"
            src="https://videos.ctfassets.net/5hn1f663deh9/5SOWgIC3nCZD4YBPdN13B6/4345b2509050ed7db080eb1843aa62d8/netflix-clone-desktop.mp4"
            autoPlay
            muted
            loop
            poster="https://images.ctfassets.net/5hn1f663deh9/uwqXYfOAqGMxqrH0kpZIW/e0077683210fdd1b44075b1ab1203dc9/Screenshot_20230114_020758.png"
          />

          <Card
            elevation={0}
            className={cx(styles.projectCardOverlay, styles.projectCardContent)}
          >
            <CardHeader
              avatar={<Folder fontSize="large" color="primary" />}
              title={
                <Typography fontWeight="bold" variant="h5" component="div">
                  Netflix Clone
                </Typography>
              }
              subheader={
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  fontWeight="500"
                >
                  Full Stack Project
                </Typography>
              }
              action={
                <IconButton size="large">
                  <LaunchIcon />
                </IconButton>
              }
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body2">
                Component Library from scratch. Netflix's official UI is
                incosistent across platforms. This React component library
                attempts to solve that
              </Typography>
            </CardContent>

            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                color="secondary"
                variant="text"
                startIcon={<GitHubIcon />}
                size="small"
              >
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Card>
      </AspectRatioBox>
    </>
  );
}
