import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#45a049' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          STELLAR_CLASSES
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Courses</Button>
        <Button color="inherit">About Us</Button>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" style={{ marginRight: '10px' }}color="inherit">Login</Button>
        <Button variant="outlined" color="inherit">
          SignUp
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
