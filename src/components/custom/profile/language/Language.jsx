import React, { useState } from 'react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Language({ languages, onAddLanguage, onRemoveLanguage }) {
   const [language, setLanguage] = useState('');

   const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
   };

   /** Add the language chip only when the input field is not empty 
             and the Add button or the Enter key is pressed */
   const handleAddLanguage = (event) => {
      if (
         language.trim() !== '' &&
         (event.type === 'click' ||
            (event.type === 'keypress' && event.key === 'Enter'))
      ) {
         // add language to the list of languages, notify parent
         onAddLanguage(language.trim());

         // clear text field
         setLanguage('');
      }
   };

   return (
      <Box display="flex" flexDirection="column">
         <OutlinedInput
            onKeyPress={handleAddLanguage}
            value={language}
            onChange={handleLanguageChange}
            variant="outlined"
            placeholder="Add language ..."
            endAdornment={
               <InputAdornment position="end">
                  <IconButton onClick={handleAddLanguage}>
                     <AddCircleIcon />
                  </IconButton>
               </InputAdornment>
            }
         />

         <Box>
            {languages.map((language, index) => (
               <Chip
                  key={index}
                  label={language}
                  onDelete={() => onRemoveLanguage(language)}
               ></Chip>
            ))}
         </Box>
      </Box>
   );
}

export default Language;
