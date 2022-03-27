import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2a9df4',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#edf2f0',
      secondary: '#d5d7e1',
      blue: '#A6E5FF',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h3: {
      fontFamily: 'Londrina Solid',
      fontSize: '2.2rem',
    },
    h2: {
      fontFamily: 'Londrina Solid',
      fontSize: '3rem',
      marginTop: '35px',
      marginBottom: '35px',
    },
    h1: {
      fontFamily: 'Londrina Solid',
      fontSize: '4rem',
    },
    h6: {
      fontFamily: 'Londrina Solid',
      fontSize: '.8rem',
    },
  },
});

export default theme;
