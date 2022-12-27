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
import { shallowEqual, useSelector } from 'react-redux';
import { CombinedState } from 'redux';

interface MenuProps {
  openMenu: boolean;
  toggleMenu: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const Menu = ({ openMenu, toggleMenu }: MenuProps) => {
  const { places, keywords }: CombinedState<{ places: Place[]; keywords: string[] }> = useSelector(
    (state: CombinedState<{ places: PlaceState; keywords: KeywordState }>) => ({
      places: state.places.list,
      keywords: state.keywords.list,
    }),
    shallowEqual,
  );

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleMenu(false)}
      onKeyDown={toggleMenu(false)}
    >
      <List>
        {places.map((place) => (
          <ListItem key={place.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary={place.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {keywords.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
