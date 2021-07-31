import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

function withSubmission(Component, submit) {
   return (props) => {
      const [open, setOpen] = useState(false);
      // history object
      const history = useHistory();

      // extract credentials from component props
      const { credentials } = props;

      // handle form submission
      const handleSubmission = async (event) => {
         // prevent default form submission behavior
         event.preventDefault();

         // reject login in case of invalid credentials (errors object is not empty)
         if (Object.keys(credentials.errors).length === 0) {
            // handle user login / signup
            await submit(credentials);

            // navigate user to posts page
            history.replace('/posts');
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
