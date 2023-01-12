import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { usePortfolioTheme } from "../theme/Theme";

export default function Projects() {
  const theme = usePortfolioTheme();
  return (
    <>
      <Button onClick={theme.toggleColorMode}>Switch</Button>

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
