import React, { useEffect, useState, Dispatch, useCallback } from 'react';
import { Paper, InputBase, Divider, IconButton } from '@mui/material';
import { Menu, Search, Directions } from '@mui/icons-material';
import { useDebounce } from '../hooks/useDebouce';
import { useDispatch, useSelector } from 'react-redux';
import { addKeyword } from '../store/actionCreators';

interface SearchFieldProps {
  toggleMenu: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const SearchField = ({ toggleMenu }: SearchFieldProps) => {
  const [keyword, setKeyword] = useState<string>('');
  const deboucedKeyword = useDebounce(keyword);
  const dispatch: Dispatch<any> = useDispatch();
  const { selectedPlace, selectedKeyword } = useSelector((state: RootState) => ({
    selectedPlace: state.place.selected,
    selectedKeyword: state.keyword.selected,
  }));

  const setSearchHistory = useCallback(
    (value: string) => {
      dispatch(addKeyword(value));
    },
    [dispatch],
  );

  useEffect(() => {
    setSearchHistory(deboucedKeyword);
  }, [deboucedKeyword, setSearchHistory]);

  useEffect(() => {
    if (selectedPlace?.formatted_address) setKeyword(selectedPlace.formatted_address);
  }, [selectedPlace]);

  useEffect(() => {
    if (selectedKeyword) setKeyword(selectedKeyword);
  }, [selectedKeyword]);

  return (
    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
      <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={toggleMenu(true)}>
        <Menu />
      </IconButton>
      <InputBase
        id="place-search-field"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(event) => setKeyword(event.target.value)}
        value={keyword}
        autoFocus
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <Directions />
      </IconButton>
    </Paper>
  );
};
