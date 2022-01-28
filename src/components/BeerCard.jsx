import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { hasLactose, hasDryHops } from '../Utils';

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
        {hasLactose(beer) && (
          <Chip
            label="has dairy"
            color="warning"
            className="lactose-warning"
            sx={{
              margin: '10px 10px 10px',
              position: 'absolute',
              right: 0,
            }}
          />
        )}
        {hasDryHops(beer) && (
          <Chip
            label="dry hops!"
            color="success"
            sx={{
              margin: '10px 10px 10px',
              position: 'absolute',
              left: 0,
            }}
          />
        )}
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
