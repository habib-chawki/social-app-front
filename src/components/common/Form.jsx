import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Form({ children }) {
   return (
      <Container>
         <Grid container spacing={4} direction="column">
            {children}
         </Grid>
      </Container>
   );
}

export default Form;
