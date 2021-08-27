import React, { useState, useEffect } from 'react';

import { uploadAvatar } from '../../../../services/profile';

import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

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

   // handle backdrop state
   const [openBackdrop, setOpenBackdrop] = useState(false);

   useEffect(() => setCurrentAvatar(avatar), [avatar]);

   const classes = useStyles();

   const handleAvatarChange = (event) => {
      // append avatar to form data
      const data = new FormData();
      data.append('avatar', event.target.files[0]);

      // display backdrop
      setOpenBackdrop(true);

      // upload avatar
      uploadAvatar(userId, data)
         .then((res) => {
            // update avatar path
            setCurrentAvatar(`${res.avatar}?${Date.now()}`);

            // remove backdrop
            setOpenBackdrop(false);
         })
         .catch((err) => console.log(err));
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
            <Backdrop open={openBackdrop}>
               <CircularProgress />
            </Backdrop>
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
