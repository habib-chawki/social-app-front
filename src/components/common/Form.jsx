import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function Form({ children }) {
   return (
      <Paper>
         <Container>
            <Grid container direction="column" spacing={4} alignItems="center">
               {children}
            </Grid>
         </Container>
      </Paper>
   );
}

export default Form;
