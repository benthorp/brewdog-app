import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LactoseChip from './LactoseChip';
import DryHopsChip from './DryHopsChip';

function BeerCard({ beer }) {
  return (
    <Grid item key={beer} xs={12} sm={6} md={4} display="flex">
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <LactoseChip beer={beer} />
        <DryHopsChip beer={beer} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '300px',
          }}
        >
          <CardMedia
            component="img"
            display="flex"
            sx={{
              pt: '10%',
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block',
              width: 'auto',
              height: 'auto',
            }}
            image={beer.image_url}
            alt="random"
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h4">
            {beer.name}
          </Typography>
          <Typography variant="subtitle2">{beer.tagline}</Typography>
          <Typography variant="subtitle2" color="coral">
            ABV: {beer.abv}% | IBU: {beer.ibu}
          </Typography>
          <Typography variant="body2" sx={{ mt: '10px' }}>
            {beer.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BeerCard;
