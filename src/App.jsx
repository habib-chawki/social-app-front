import React from 'react';
import Routes from './routes/Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Routes />
      </ThemeProvider>
   );
}

export default App;
