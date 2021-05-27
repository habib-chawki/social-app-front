import React, { useState } from 'react';

import { TextField, Button, Chip, Paper, Box } from '@material-ui/core';

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
         onAddLanguage({ key: languages.length, label: language.trim() });

         // clear text field
         setLanguage('');
      }
   };

   return (
      <Box display="flex" flexDirection="column">
         <TextField
            onKeyPress={handleAddLanguage}
            value={language}
            onChange={handleLanguageChange}
            label="Language"
            variant="outlined"
         />
         <Button onClick={handleAddLanguage}>Add language</Button>

         <Paper component="ul">
            {languages.map((language) => (
               <Chip
                  key={language.key}
                  label={language.label}
                  onDelete={() => onRemoveLanguage(language)}
               ></Chip>
            ))}
         </Paper>
      </Box>
   );
}

export default Language;
