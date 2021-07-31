import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

function Form({ children }) {
   return (
      <Box
         display="flex"
         height="100vh"
         justifyContent="center"
         alignItems="center"
      >
         <Paper elevation={4}>
            <Grid container direction="column" alignItems="center" spacing={3}>
               {children}
            </Grid>
         </Paper>
      </Box>
   );
}

export default Form;
