import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Form({ children }) {
   return (
      <Paper>
         <Grid container direction="column" alignItems="center" spacing={3}>
            {children}
         </Grid>
      </Paper>
   );
}

export default Form;
