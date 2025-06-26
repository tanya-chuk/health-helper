'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F8FAFC',
    },
    text: {
      primary: '#171717',
      secondary: '#374151',
      disabled: '#727272',
    },
    primary: {
      light: '#ECF6FF',
      main: '#D8ECFF',
      dark: '#81BDF3',
    },
    secondary: {
      main: '#5A84AA',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), var(--font-rubik), Arial, sans-serif',
    fontSize: 16,
    h6: {
      fontSize: 24,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 20,
    },
    button: {
      fontSize: 18,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 18,
        },
      },
    },
  },
});

export default theme;
