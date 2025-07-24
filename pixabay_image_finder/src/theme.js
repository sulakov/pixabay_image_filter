import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3', // светло-голубой
    },
    secondary: {
      main: '#f50057', // розовый
    },
  },
});

export default darkTheme;