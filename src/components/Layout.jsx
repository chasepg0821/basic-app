import React, { useMemo, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { themeState as themeAtom } from '../atoms';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Box, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Navbar/Navbar';
import { Inbox, Mail } from '@mui/icons-material';

function Layout({children}) {
    const [drawerOpen, setDrawerOpen] =  useState();
    const themeState = useRecoilValue(themeAtom);
    const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")

    const theme = useMemo(
        () => {
            let mode = themeState;
            if (themeState === 'system' && prefersDark) {
                mode = 'dark';
            }
            else if (themeState === 'system') {
                mode = 'light';
            }
            else {
                mode = themeState;
            }
            const newTheme = createTheme({
                                palette: {
                                    mode,
                                },
                            })
            return newTheme;
        },
        [themeState, prefersDark],
    );

    const handleChangeDrawer = () => {
        setDrawerOpen(!drawerOpen)
        }

    const DrawerList = (
        <>
        <Toolbar />
        <Box sx={{ width: 250 }} role="presentation" onClick={handleChangeDrawer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        </>
      );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar openDrawer={handleChangeDrawer}/>
            <Container>
                <Drawer open={drawerOpen} onClose={handleChangeDrawer}>
                    {DrawerList}
                </Drawer>
                {children}
            </Container>
            
        </ThemeProvider>
    )
}

export default Layout