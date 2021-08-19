import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ErrorIcon from '@material-ui/icons/Error';

function Fallback({ message }) {
   return (
      <Box>
         <ErrorIcon fontSize="medium" />
         <Typography variant="h5">{message}</Typography>
      </Box>
   );
}

export default Fallback;
