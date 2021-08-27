import React, { useState } from 'react';

// mui
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function ErrorSnackbar({ errorMessage }) {
   const [open, setOpen] = useState(false);

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
            {errorMessage}
         </Alert>
      </Snackbar>
   );
}

export default ErrorSnackbar;
