import React, { useCallback } from 'react';
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
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setSelectedPlace, setSelectedKeyword } from '../store/actionCreators';

interface MenuProps {
  openMenu: boolean;
  toggleMenu: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const Menu = ({ openMenu, toggleMenu }: MenuProps) => {
  const { places, keywords } = useSelector(
    (state: RootState) => ({
      places: state.place.list,
      keywords: state.keyword.list,
    }),
    shallowEqual,
  );
  const dispatch: Dispatch<any> = useDispatch();

  const handleSelectPlace = useCallback(
    (value: Place) => {
      dispatch(setSelectedPlace(value));
    },
    [dispatch],
  );

  const handleSelectKeyword = useCallback(
    (value: string) => {
      dispatch(setSelectedKeyword(value));
    },
    [dispatch],
  );

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleMenu(false)}
      onKeyDown={toggleMenu(false)}
    >
      <List>
        {places.length ? (
          places.map((place) => (
            <ListItem key={place.id} disablePadding onClick={() => handleSelectPlace(place)}>
              <ListItemButton>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText primary={place.name} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <p className="text-center">No location history</p>
        )}
      </List>
      <Divider />
      <List>
        {keywords.length ? (
          keywords.map((text, index) => (
            <ListItem key={index} disablePadding onClick={() => handleSelectKeyword(text)}>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <p className="text-center">No keyword history</p>
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
