import React, { useState } from 'react';

// mui
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function ErrorSnackbar() {
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
            Invalid form credentials
         </Alert>
      </Snackbar>
   );
}

export default ErrorSnackbar;
