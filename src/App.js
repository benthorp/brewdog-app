import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BeerCard from './components/BeerCard';

function App() {
  const beers = [
    {
      id: 1,
      name: 'Buzz',
      tagline: 'A Real Bitter Experience.',
      description:
        'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      image: 'https://images.punkapi.com/v2/keg.png',
      abv: 4.5,
      ibu: 60,
    },
    {
      id: 2,
      name: 'Trashy Blonde',
      tagline: "You Know You Shouldn't",
      description:
        'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      image: 'https://images.punkapi.com/v2/5.png',
      abv: 9.0,
      ibu: 5,
    },
    {
      id: 3,
      name: 'Trashy Blonde',
      tagline: "You Know You Shouldn't",
      description:
        'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      image: 'https://images.punkapi.com/v2/5.png',
      abv: 9.0,
      ibu: 5,
    },
    {
      id: 4,
      name: 'Trashy Blonde',
      tagline: "You Know You Shouldn't",
      description:
        'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      image: 'https://images.punkapi.com/v2/5.png',
      abv: 9.0,
      ibu: 5,
    },
  ];

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            BrewDog Beers
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
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
              beers are brewed using the finest malted barley and hops from the
              best producers around the world.
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4} display="flex">
            {beers.map((beer) => (
              <BeerCard beer={beer}></BeerCard>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
