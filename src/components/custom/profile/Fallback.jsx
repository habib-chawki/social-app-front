import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ErrorIcon from '@material-ui/icons/Error';

function Fallback({ output }) {
   return (
      <Box>
         <ErrorIcon fontSize="medium" />
         <Typography variant="h5">{output}</Typography>
      </Box>
   );
}

export default Fallback;
