import React from "react";
import "./App.css";
import { GoogleMap } from "./components";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <GoogleMap />
            </Grid>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
