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
  Paper,
  Typography,
  CardHeader,
  IconButton,
  useTheme,
  Box,
} from "@mui/material";
import { useState } from "react";

import "animate.css";
import cx from "classnames";
import AspectRatioBox from "../AspectRatioBox/AspectRatioBox";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  name?: string;
}

export default function ProjectCard({}: ProjectCardProps) {
  // const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  return (
    <Box className={styles.projectCard}>
      <AspectRatioBox aspectRatio={{ h: 2, w: 3 }}>
        <Card
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        >
          <CardMedia
            style={{ borderRadius: theme.shape.borderRadius }}
            className={cx(styles.cardMedia)}
            component="img"
            src="https://videos.ctfassets.net/5hn1f663deh9/5SOWgIC3nCZD4YBPdN13B6/4345b2509050ed7db080eb1843aa62d8/netflix-clone-desktop.mp4"
            alt="Project"
          />

          <Card
            elevation={0}
            className={cx(styles.projectCardOverlay, styles.projectCardContent)}
          >
            <CardHeader
              avatar={<Folder color="primary" />}
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
                <IconButton>
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
                sx={{ color: theme.palette.text.primary }}
                variant="text"
                startIcon={<GitHubIcon />}
                size="small"
              >
                Source Code
              </Button>
              <Button
                sx={{ color: theme.palette.text.primary }}
                size="small"
                variant="text"
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Card>
      </AspectRatioBox>
    </Box>
  );
}
