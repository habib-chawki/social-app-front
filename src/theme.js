import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
   palette: {
      primary: {
         main: '#9c27b0',
      },
      secondary: {
         main: '#2780B0',
      },
      background: {
         default: '#f3e5f5',
      },
   },
   typography: {
      fontFamily:
         'Noto Sans JP, Roboto, sans-serif, Helvetica, Arial, sans-serif',
   },
});

export default theme;
