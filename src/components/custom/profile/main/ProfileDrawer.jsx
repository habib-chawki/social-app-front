import React, { useState, useContext } from 'react';

import { uploadAvatar } from '../../../../services/profile';
import UserContext from '../../../../context/user-context';

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
   const [showAvatarInput, setShowAvatarInput] = useState(false);

   // fetch logged-in user id
   const userId = useContext(UserContext);

   const classes = useStyles();

   const toggleAvatarInput = (event) => {
      setShowAvatarInput(!showAvatarInput);
   };

   const handleAvatarChange = (event) => {
      // append avatar to form data
      const data = new FormData();
      data.append('avatar', event.target.files[0]);

      // upload avatar
      uploadAvatar(userId, data)
         .then((res) => console.log(res))
         .catch((err) => console.log(err));
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
            my={5}
            onMouseEnter={toggleAvatarInput}
            onMouseLeave={toggleAvatarInput}
         >
            <Avatar className={classes.avatar} variant="circular">
               {showAvatarInput && (
                  <Box
                     zIndex={1}
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                     width="100%"
                     height="100%"
                  >
                     <input
                        type="file"
                        accept="image/*"
                        className={classes.fileInput}
                        id="file-input"
                        onChange={handleAvatarChange}
                     />
                     <label htmlFor="file-input">
                        <IconButton color="primary" component="span">
                           <PhotoCamera />
                        </IconButton>
                     </label>
                  </Box>
               )}
            </Avatar>
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
