import React, { useState, useEffect } from 'react';

// components
import ErrorSnackbar from '../../../common/ErrorSnackbar';

// services
import { uploadAvatar } from '../../../../services/profile';

// mui
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

// icons
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

function ProfileDrawer({ children, userId, avatar }) {
   // handle avatar state
   const [currentAvatar, setCurrentAvatar] = useState(avatar);

   // handle error snackbar state
   const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

   useEffect(() => setCurrentAvatar(avatar), [avatar]);

   const classes = useStyles();

   const handleAvatarChange = (event) => {
      // append avatar to form data
      const data = new FormData();
      data.append('avatar', event.target.files[0]);

      // upload avatar
      uploadAvatar(userId, data)
         .then((res) => setCurrentAvatar(`${res.avatar}?${Date.now()}`))
         .catch((err) => setOpenErrorSnackbar(true));
   };

   return (
      <Drawer
         className={classes.drawer}
         variant="permanent"
         anchor="left"
         classes={{ paper: classes.drawerPaper }}
      >
         <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
            <Avatar
               src={`${process.env.REACT_APP_BACKEND_AVATARS_URL}/${currentAvatar}`}
               className={classes.avatar}
               variant="circular"
            />

            <ErrorSnackbar
               message="ERRROR"
               open={openErrorSnackbar}
               setOpen={setOpenErrorSnackbar}
            />

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
