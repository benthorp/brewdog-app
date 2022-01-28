import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function HeaderBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          BrewDog Beers
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
