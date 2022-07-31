import React from 'react';
import './App.css';
import SectionComp from './components/SectionComp';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D2D9C7',
    },
    secondary: {
      main: '#8DA633',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="container">
          <NavBar />
          <SectionComp name="TD3 Home" color="#F2F2F2" />
          <SectionComp name="TD3 About" color="#D9D9D9" />
          <SectionComp name="TD3 Projects" color="#F2F2F2" />
          <SectionComp name="TD3 Contact" color="#D9D9D9" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
