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
} from "@mui/material";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ flipped }: { flipped: boolean }) {
  const theme = useTheme();

  return (
    <>
      <Card
        elevation={1}
        variant="outlined"
        className={styles.projectCard}
        sx={{
          minHeight: "265px",
          border: "none",
        }}
      >
        <CardMedia
          component="img"
          image="https://images.ctfassets.net/5hn1f663deh9/6ztkLMF15VUciajZPtWyvO/c6e41e36e89fb36cfb604a31718f09f3/Screen_Shot_2023-01-13_at_8.39.38_PM.png"
          alt="Paella dish"
        />

        <Paper
          className={styles.projectCardOverlay}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: flipped ? "absolute" : "relative",
          }}
        >
          <CardHeader
            avatar={<Folder color="primary" />}
            title={
              <Typography variant="h5" component="div">
                Netflix Clone
              </Typography>
            }
            subheader={
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
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
        </Paper>
      </Card>
    </>
  );
}
