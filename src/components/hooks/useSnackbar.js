import React, { useState } from 'react';

// mui
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function useSnackbar(severity = 'error') {
   const [snackbar, setSnackbar] = useState({ isOpen: false, message: '' });

   const openSnackbar = (message) => {
      setSnackbar({ isOpen: true, message });
   };

   const closeSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      setSnackbar({ isOpen: false, message: '' });
   };

   const snackbarComponent = (
      <Snackbar
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
         }}
         open={snackbar.isOpen}
         autoHideDuration={6000}
         onClose={closeSnackbar}
         message={snackbar.message}
         action={
            <IconButton color="inherit" onClick={closeSnackbar}>
               <CloseIcon fontSize="small" />
            </IconButton>
         }
      >
         <Alert
            elevation={6}
            variant="filled"
            onClose={closeSnackbar}
            severity={severity}
         >
            {snackbar.message}
         </Alert>
      </Snackbar>
   );

   return [snackbarComponent, openSnackbar];
}
