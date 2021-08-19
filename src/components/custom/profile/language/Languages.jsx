import React from 'react';

import Fallback from '../Fallback';

import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

function Languages({ languages }) {
   if (languages.length === 0) {
      return <Fallback message="Languages not provided" />;
   }

   return (
      <Box>
         {languages.map((language, index) => (
            <Chip key={index} label={language} color="secondary" />
         ))}
      </Box>
   );
}

export default Languages;
