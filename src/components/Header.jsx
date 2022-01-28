import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          GREAT BEER THAT'S GREAT FOR THE PLANET
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Exceptional quality is the cornerstone of our brewery. All BrewDog
          beers are brewed using the finest malted barley and hops from the best
          producers around the world.
        </Typography>
      </Container>
    </Box>
  );
}

export default Header;
