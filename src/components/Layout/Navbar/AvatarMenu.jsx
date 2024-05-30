import { Divider } from '@aws-amplify/ui-react';
import {
  Brightness4,
  Brightness5,
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
  const open = Boolean(anchorEl);

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
          <Avatar sx={{ width: 32, height: 32 }}>T</Avatar>
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          Account
        </MenuItem>
        <Divider />
        {renderColorModeOptions()}
      </Menu>
    </>
  );
}

export default AvatarMenu;
