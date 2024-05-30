import React, { useState } from 'react';
import { Container } from '@mui/material';
import Navbar from './Navbar/Navbar';
import ThemeWrapper from '../ThemeWrapper';

function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState();

  const handleChangeDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeWrapper>
      <Navbar openDrawer={handleChangeDrawer} />
      <Container>{children}</Container>
    </ThemeWrapper>
  );
}

export default Layout;
