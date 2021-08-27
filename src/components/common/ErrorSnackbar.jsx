import React from 'react';

// mui
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function ErrorSnackbar({ message, open, setOpen }) {
   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      setOpen(false);
   };

   return (
      <Snackbar
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
         }}
         open={open}
         autoHideDuration={6000}
         onClose={handleClose}
         message={message}
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
            {message}
         </Alert>
      </Snackbar>
   );
}

export default ErrorSnackbar;
