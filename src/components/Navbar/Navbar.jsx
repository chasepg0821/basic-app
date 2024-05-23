import { 
    AppBar,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material'
import React from 'react'
import AvatarMenu from './AvatarMenu';
import { Menu as MenuIcon } from '@mui/icons-material';

function Navbar({ openDrawer }) {

    const handleOpenDrawer = () => {
        openDrawer()
    }

    return (
        <>
            <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpenDrawer}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Photos
            </Typography>
            <AvatarMenu />
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar