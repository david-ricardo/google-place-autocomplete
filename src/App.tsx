import React from 'react';
import './App.css';
import { GoogleMap, SearchField } from './components';
import { Container, Grid } from '@mui/material';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SearchField />
            </Grid>
            <Grid item xs={12}>
              <GoogleMap />
            </Grid>
          </Grid>
        </Container>
      </header>
    </div>
  );
};

export default App;
