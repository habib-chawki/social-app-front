import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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
   fileInput: {
      display: 'none',
   },
});

function ProfileDrawer({ children }) {
   const classes = useStyles();

   const toggleAvatarInput = () => {
      console.log('toggle');
   };

   return (
      <Drawer
         className={classes.drawer}
         variant="permanent"
         anchor="left"
         classes={{ paper: classes.drawerPaper }}
      >
         <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={5}
            onMouseEnter={toggleAvatarInput}
         >
            <Avatar className={classes.avatar} variant="circular" />
            <input
               type="file"
               accept="image/*"
               className={classes.fileInput}
               id="file-input"
            />
            <label htmlFor="file-input">
               <IconButton color="primary" component="span">
                  <PhotoCamera />
               </IconButton>
            </label>
         </Box>

         <Divider />

         <Box display="flex" flexDirection="column" flexGrow={1}>
            {/* list of items */}
            {children[0]}
         </Box>

         {/* update profile button */}
         {children[1]}
      </Drawer>
   );
}

export default ProfileDrawer;
