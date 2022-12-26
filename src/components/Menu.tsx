import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PlaceIcon from '@mui/icons-material/Place';
import HistoryIcon from '@mui/icons-material/History';

interface MenuProps {
  openMenu: boolean;
  toggleMenu: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const Menu = ({ openMenu, toggleMenu }: MenuProps) => {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleMenu(false)}
      onKeyDown={toggleMenu(false)}
    >
      <List>
        {[
          'Balai Sidang Jakarta Convention Center',
          'Sydney Opera House',
          'Suria Jelatek Residence',
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Jakarta', 'Sydney', 'suria jelatek residence', 'restaurant terdekat'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ),
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer anchor="left" open={openMenu} onClose={toggleMenu(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
