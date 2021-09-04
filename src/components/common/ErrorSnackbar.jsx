import React, { useState } from 'react';

// mui
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export function useSnackbar({ message }) {
   const [isSnackbarOpen, setOpen] = useState(false);

   const openSnackbar = () => {
      setOpen(true);
   };

   const closeSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      setOpen(false);
   };

   const ErrorSnackbar = (
      <Snackbar
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
         }}
         open={isSnackbarOpen}
         autoHideDuration={6000}
         onClose={closeSnackbar}
         message={message}
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
            severity="error"
         >
            {message}
         </Alert>
      </Snackbar>
   );

   return { ErrorSnackbar, openSnackbar };
}

function ErrorSnackbar({ message }) {
   const { isSnackbarOpen, closeSnackbar } = useSnackbar();

   return (
      <Snackbar
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
         }}
         open={isSnackbarOpen}
         autoHideDuration={6000}
         onClose={closeSnackbar}
         message={message}
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
            severity="error"
         >
            {message}
         </Alert>
      </Snackbar>
   );
}

export default ErrorSnackbar;
