import React from 'react';
import Section from './components/Section';
import Greeting from './components/Greeting';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D2D9C7',
      light: '#DBE0D2',
      dark: '#93978B',
      contrastText: '#000000de',
    },
    secondary: {
      main: '#8DA633',
      light: '#A3B75B',
      dark: '#627423',
      contrastText: '#000000de',
    },
    text: {
      primary: '#000000de',
      secondary: '#0000008a',
      disabled: '#00000061',
    },
    divider: '#000000de',
  },
  typography: {
    fontFamily: 'Helvetica',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="header">
          <NavBar />
        </div>
        <div className="container odd">
          <Greeting />
          <Section title="01 / About" />
          <Section title="02 / Projects" />
          <Section title="03 / Contact" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
