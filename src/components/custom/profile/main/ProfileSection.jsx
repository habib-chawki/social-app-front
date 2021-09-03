import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(5),
   },
}));

function ProfileSection({ children }) {
   const classes = useStyles();

   return (
      <Grid item>
         <Paper className={classes.paper}>
            {/* sets spacing between section elements */}
            <Grid container direction="column" spacing={3}>
               {children}
            </Grid>
         </Paper>
      </Grid>
   );
}

export default ProfileSection;
