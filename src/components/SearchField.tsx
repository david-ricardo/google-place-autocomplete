import React, { useEffect, useState } from 'react';
import { Paper, InputBase, Divider, IconButton } from '@mui/material';
import { Menu, Search, Directions } from '@mui/icons-material';
import { useDebounce } from '../hooks/useDebouce';

interface SearchFieldProps {
  toggleMenu: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const SearchField = ({ toggleMenu }: SearchFieldProps) => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchHistories, setSearcHistories] = useState<string[]>([]);
  const deboucedValue = useDebounce(keyword);

  useEffect(() => {
    setSearcHistories((state) => [...state, deboucedValue].filter(String));
  }, [deboucedValue]);

  useEffect(() => {
    console.log('searchHistories: ', searchHistories);
  }, [searchHistories]);

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
        // onInput={(value) => console.log('value: ', value)}
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
