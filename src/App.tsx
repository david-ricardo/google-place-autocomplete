import { useState, KeyboardEvent, MouseEvent } from 'react';
import './App.css';
import { GoogleMap, SearchField, Menu } from './components';
import { Container, Grid } from '@mui/material';

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenMenu(open);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SearchField toggleMenu={toggleMenu} />
            </Grid>
            <Grid item xs={12}>
              <GoogleMap />
            </Grid>
          </Grid>
          <Menu openMenu={openMenu} toggleMenu={toggleMenu} />
        </Container>
      </header>
    </div>
  );
};

export default App;
