import BeerCard from '../components/BeerCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Beers({ beers }) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4} display="flex">
        {beers.map((beer) => (
          <BeerCard beer={beer}></BeerCard>
        ))}
      </Grid>
    </Container>
  );
}

export default Beers;
