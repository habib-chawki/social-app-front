import React from 'react';
import Routes from './routes/Routes';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import './index.css';

const theme = createTheme({
   palette: {
      primary: {
         main: '#1565c0',
      },
      secondary: {
         main: '#ff6f00',
      },
   },
});

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Routes />
      </ThemeProvider>
   );
}

export default App;
