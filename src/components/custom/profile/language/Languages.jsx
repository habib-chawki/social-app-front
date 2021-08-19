import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

function Languages({ languages }) {
   return (
      <Box>
         {languages.length === 0 ? (
            <Typography variant="h4">Undetermined languages</Typography>
         ) : (
            languages.map((language, index) => (
               <Chip key={index} label={language} color="secondary" />
            ))
         )}
      </Box>
   );
}

export default Languages;
