import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

// styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   avatar: {
      height: 150,
      width: 150,
   },
   drawer: {
      width: 300,
   },
   drawerPaper: {
      width: 300,
   },
});

function ProfileDrawer({ children }) {
   const classes = useStyles();

   return (
      <Drawer
         className={classes.drawer}
         variant="permanent"
         anchor="left"
         classes={{ paper: classes.drawerPaper }}
      >
         <Box display="flex" justifyContent="center" my={5}>
            <Avatar className={classes.avatar} variant="circular" />
         </Box>

         <Divider />

         <Box display="flex" flexDirection="column" flexGrow={1}>
            {children}
         </Box>
      </Drawer>
   );
}

export default ProfileDrawer;
