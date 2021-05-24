import React, { useState } from 'react';
import Experience from './Experiences';
import {
   TextField,
   Button,
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   Chip,
   Paper,
   Box,
} from '@material-ui/core';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function ProfileForm() {
   const [gender, setGender] = useState('');
   const [birthday, setBirthday] = useState();
   const [languages, setLanguages] = useState([]);
   const [language, setLanguage] = useState('');

   const handleGenderChange = (event) => {
      setGender(event.target.value);
   };

   const handleBirthdayChange = (date) => {
      setBirthday(date);
   };

   const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
   };

   const handleDeleteLanguage = (langToDelete) => {
      setLanguages(languages.filter((lang) => langToDelete.key !== lang.key));
   };

   /** Add the language chip only when the input field is not empty 
       and the Add button or the Enter key is pressed */
   const handleAddLanguage = (event) => {
      if (
         language !== '' &&
         (event.type === 'click' ||
            (event.type === 'keypress' && event.key === 'Enter'))
      ) {
         // add language to the chip list of languages
         setLanguages([
            ...languages,
            { key: languages.length, label: language },
         ]);

         // delete language (clear text field)
         setLanguage('');
      }
   };

   return (
      <form>
         <Box display="flex" flexDirection="column">
            <TextField label="First name" variant="outlined" />
            <TextField label="Middle name" variant="outlined" />
            <TextField label="Last name" variant="outlined" />
            <TextField label="Address" variant="outlined" />

            <FormControl>
               <InputLabel>Gender</InputLabel>
               <Select value={gender} onChange={handleGenderChange}>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
               </Select>
            </FormControl>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <KeyboardDatePicker
                  label="Birthday"
                  format="dd/MM/yyyy"
                  value={birthday}
                  onChange={handleBirthdayChange}
               />
            </MuiPickersUtilsProvider>

            <TextField label="Bio" variant="outlined" multiline rows={6} />

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
                     onDelete={() => handleDeleteLanguage(language)}
                  ></Chip>
               ))}
            </Paper>

            <Experience />

            <Box display="flex" flexDirection="column">
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                     disableToolbar
                     variant="inline"
                     label="Start date"
                     format="dd/MM/yyyy"
                  />
               </MuiPickersUtilsProvider>

               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                     disableToolbar
                     variant="inline"
                     label="End date"
                     format="dd/MM/yyyy"
                  />
               </MuiPickersUtilsProvider>
               <TextField label="major" variant="outlined" />
               <TextField label="school" variant="outlined" />
               <TextField
                  label="description"
                  multiline
                  rows={6}
                  variant="outlined"
               />
            </Box>
         </Box>
      </form>
   );
}

export default ProfileForm;
