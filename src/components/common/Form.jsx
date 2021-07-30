import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Form({ children }) {
   return (
      <Container>
         <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="80vh"
         >
            <Grid
               container
               direction="column"
               justifyContent="space-around"
               alignItems="center"
               bgcolor="lightgray"
               width="25%"
               height="70%"
               padding={5}
            >
               {children}
            </Grid>
         </Grid>
      </Container>
   );
}

export default Form;
