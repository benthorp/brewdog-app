import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BeerCard from './components/BeerCard';
import { beers } from './TestData';
import { sortByABVDesc } from './Utils';

function App() {
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
            {beers.sort(sortByABVDesc).map((beer) => (
              <BeerCard beer={beer}></BeerCard>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
