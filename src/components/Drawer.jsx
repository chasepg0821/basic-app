import { Inbox, Mail } from '@mui/icons-material';
import { 
    Box, 
    Divider, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Toolbar
} from '@mui/material';
import React from 'react'

function Drawer({open, changeDrawer}) {
    const DrawerList = (
        <>
        <Toolbar />
        <Box sx={{ width: 250 }} role="presentation" onClick={changeDrawer}>
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
        <Drawer open={open} onClose={changeDrawer}>
            {DrawerList}
        </Drawer>
    )
}

export default Drawer