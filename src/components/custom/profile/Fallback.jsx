import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ErrorIcon from '@material-ui/icons/Error';

function Fallback({ message }) {
   return (
      <Box
         display="flex"
         flexDirection="column"
         justifyContent="center"
         alignItems="center"
      >
         <ErrorIcon fontSize="medium" color="secondary" />
         <Typography variant="h5">{message}</Typography>
      </Box>
   );
}

export default Fallback;
