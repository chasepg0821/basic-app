import React, { useMemo, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { themeState as themeAtom } from '../../atoms';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Box, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Navbar/Navbar';
import { Inbox, Mail } from '@mui/icons-material';

function Layout({children}) {
    const [drawerOpen, setDrawerOpen] =  useState();
    const themeState = useRecoilValue(themeAtom);

    const theme = useMemo(
        () => {
            let mode = themeState;
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
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
        [themeState],
    );

    const handleChangeDrawer = () => {
        setDrawerOpen(!drawerOpen)
        }

    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar openDrawer={handleChangeDrawer}/>
            <Container>
                {children}
            </Container>
            
        </ThemeProvider>
    )
}

export default Layout