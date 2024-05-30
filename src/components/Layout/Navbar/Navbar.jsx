import { Paper, IconButton, Typography, AppBar, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import AvatarMenu from './AvatarMenu';
import { Menu as MenuIcon } from '@mui/icons-material';

import './Navbar.scss';

function Navbar({ openDrawer }) {
  const handleOpenDrawer = () => {
    openDrawer();
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className="appbar-container">
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="h1">
            BLOGGER
          </Typography>
          <AvatarMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
