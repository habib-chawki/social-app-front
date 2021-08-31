import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import UserContext from '../../context/user-context';
import { storeUserInfo } from '../../services/storage';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function withSubmission(Component, submit) {
   return (props) => {
      const { setAuthenticatedUser } = useContext(UserContext);

      const [open, setOpen] = useState(false);
      // history object
      const history = useHistory();

      // extract credentials from component props
      const { credentials } = props;

      // handle form submission
      const handleSubmission = (event) => {
         // prevent default form submission behavior
         event.preventDefault();

         // reject login in case of invalid credentials (errors object is not empty)
         if (Object.keys(credentials.errors).length === 0) {
            // handle user login / signup
            submit(credentials)
               .then((userId) => {
                  // set authenticated user context value
                  setAuthenticatedUser(userId);

                  // store authenticated user in localStorage
                  storeUserInfo(userId);

                  // navigate user to posts page
                  history.replace('/posts');
               })
               .catch((err) => {
                  console.log(err);
               });
         } else {
            console.log('Invalid credentials.');
            setOpen(true);
         }
      };

      const handleClose = (event, reason) => {
         if (reason === 'clickaway') {
            return;
         }

         setOpen(false);
      };

      return (
         <div>
            <Component {...props} onSubmit={handleSubmission} />
            <Snackbar
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
               }}
               open={open}
               autoHideDuration={6000}
               onClose={handleClose}
               message="Invalid form credentials"
               action={
                  <IconButton color="inherit" onClick={handleClose}>
                     <CloseIcon fontSize="small" />
                  </IconButton>
               }
            >
               <Alert
                  elevation={6}
                  variant="filled"
                  onClose={handleClose}
                  severity="error"
               >
                  Invalid form credentials
               </Alert>
            </Snackbar>
         </div>
      );
   };
}

export default withSubmission;
