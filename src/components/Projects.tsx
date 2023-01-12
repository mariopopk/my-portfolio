import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function Projects() {
  return (
    <>
      {/* <Button onClick={toggleThemeMode}>Switch</Button> */}

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
    </>
  );
}
