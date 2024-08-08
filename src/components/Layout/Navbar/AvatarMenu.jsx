import { Divider, useAuthenticator } from '@aws-amplify/ui-react';
import {
  Brightness4,
  Brightness5,
  Logout,
  SettingsBrightness,
} from '@mui/icons-material';
import {
  Avatar,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { themeState as themeAtom } from '../../../atoms';
import { useNavigate } from '@tanstack/react-router';

const colorModes = [
  {
    text: 'System',
    value: 'system',
    icon: <SettingsBrightness fontSize="small" />,
  },
  {
    text: 'Light',
    value: 'light',
    icon: <Brightness5 fontSize="small" />,
  },
  {
    text: 'Dark',
    value: 'dark',
    icon: <Brightness4 fontSize="small" />,
  },
];

function AvatarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [themeState, setThemeState] = useRecoilState(themeAtom);
  const { user, signOut } = useAuthenticator((context) => [context.user])
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  

  const handleLogout = async () => {
    await signOut();
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderColorModeOptions = () => {
    return colorModes.map((mode) => {
      return (
        <MenuItem
          key={`color-mode-${mode.value}`}
          selected={themeState === mode.value}
          onClick={() => setThemeState(mode.value)}
        >
          <ListItemIcon>{mode.icon}</ListItemIcon>
          <ListItemText>{mode.text}</ListItemText>
        </MenuItem>
      );
    });
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>{ user ? user.username ?? '' : '' }</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate({to: '/profile'})}>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          Profile
        </MenuItem>
        <Divider />
        {renderColorModeOptions()}
        <Divider />
        <MenuItem onClick={handleLogout}>
            <ListItemIcon>
                <Logout />
            </ListItemIcon>
            Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default AvatarMenu;
