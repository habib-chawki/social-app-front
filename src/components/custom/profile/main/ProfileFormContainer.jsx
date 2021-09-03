import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
   container: {
      width: '55%',
      margin: theme.spacing(3),
   },
}));

function ProfileFormContainer({ children }) {
   const classes = useStyles();

   return (
      <Box display="flex" justifyContent="center">
         {/* sets spacing between form sections */}
         <Grid
            container
            className={classes.container}
            direction="column"
            spacing={5}
         >
            {children}
         </Grid>
      </Box>
   );
}

export default ProfileFormContainer;
