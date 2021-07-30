import React from 'react';

import { Box } from '@material-ui/core';

function Form({ children }) {
   return (
      <Box
         display="flex"
         flexDirection="row"
         justifyContent="center"
         alignItems="center"
         height="80vh"
      >
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            bgcolor="lightgray"
            width="25%"
            height="70%"
            padding={5}
         >
            {children}
         </Box>
      </Box>
   );
}

export default Form;
