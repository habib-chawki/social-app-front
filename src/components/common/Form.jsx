import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   paper: {
      width: 400,
      padding: 20,
   },
});

function Form({ children }) {
   const classes = useStyles();

   return (
      <Box
         display="flex"
         height="95vh"
         justifyContent="center"
         alignItems="center"
      >
         <Paper className={classes.paper} elevation={4}>
            <Grid container direction="column" alignItems="center" spacing={3}>
               {children}
            </Grid>
         </Paper>
      </Box>
   );
}

export default Form;
