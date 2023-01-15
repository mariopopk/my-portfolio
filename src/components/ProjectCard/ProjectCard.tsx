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
  Box,
  Link,
} from "@mui/material";

import cx from "classnames";
import styles from "./ProjectCard.module.css";

export interface ProjectCardProps {
  name?: string;
  type?: "Full Stack" | "Front End" | "Back End";
  description?: string;
  liveLink?: string;
  sourceCodeLink?: string;
  media?: string[];
}

export default function ProjectCard({
  name,
  type,
  media,
  description,
  liveLink,
  sourceCodeLink,
}: ProjectCardProps) {
  const placeholder =
    "https://images.ctfassets.net/5hn1f663deh9/3MLQmpkYiAKGJl6s91BSUu/c77a7e78d22825dbab91822476fbd9bf/AAAABRnfEBXpcJ74jyyz7MAdd6_jB5O3RPBzOEKhWUrI7nTXfN5c-JC7Da2NbFHiXOLCk5XvpCsOZzXj7haod8rletqu5dqp6rv2uo45.jpeg";

  const [image = placeholder, video] = media || [];

  const action = liveLink && (
    <IconButton size="large">
      <LaunchIcon />
    </IconButton>
  );

  return (
    <>
      <Card elevation={0} tabIndex={0} className={styles.projectCard}>
        <Box style={{ height: "100%" }}>
          {image && video ? (
            <ProjectCardVideo poster={image} video={video} />
          ) : (
            <ProjectCardImage image={image} />
          )}
        </Box>
        <Card
          elevation={0}
          className={cx(styles.projectCardOverlay, styles.projectCardContent)}
        >
          <Link tabIndex={-1} href={liveLink}>
            {" "}
            <CardHeader
              avatar={<Folder fontSize="large" color="primary" />}
              title={
                <Typography fontWeight="bold" variant="h5" component="div">
                  {name}
                </Typography>
              }
              subheader={
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  fontWeight="500"
                >
                  {!liveLink ? "Coming Soon" : type}
                </Typography>
              }
              action={action}
            />
          </Link>

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="body2">{description}</Typography>
          </CardContent>

          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            {sourceCodeLink && (
              <Button
                href={sourceCodeLink}
                color="secondary"
                variant="text"
                startIcon={<GitHubIcon />}
                size="small"
              >
                Source Code
              </Button>
            )}
          </CardActions>
        </Card>
      </Card>
    </>
  );
}

function ProjectCardVideo({
  poster,
  video,
}: {
  poster: string;
  video: string;
}) {
  const theme = useTheme();

  return (
    <CardMedia
      style={{ borderRadius: theme.shape.borderRadius }}
      className={cx(styles.cardMedia)}
      component="video"
      src={video}
      autoPlay
      muted
      loop
      poster={poster}
    />
  );
}

function ProjectCardImage({ image }: { image: string }) {
  const theme = useTheme();

  return (
    <CardMedia
      style={{ borderRadius: theme.shape.borderRadius }}
      className={cx(styles.cardMedia)}
      component="img"
      src={image}
    />
  );
}
