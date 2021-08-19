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
         height="100%"
      >
         <ErrorIcon fontSize="large" color="secondary" />
         <Typography variant="h5">{message}</Typography>
      </Box>
   );
}

export default Fallback;
