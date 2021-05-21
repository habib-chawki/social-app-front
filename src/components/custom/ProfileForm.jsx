import React, { useState } from 'react';
import {
   TextField,
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
   const [languages, setLanguages] = useState([
      { key: 0, label: 'English' },
      { key: 1, label: 'French' },
      { key: 2, label: 'German' },
   ]);

   const handleGenderChange = (event) => {
      setGender(event.target.value);
   };

   const handleBirthdayChange = (date) => {
      setBirthday(date);
   };

   const handleLanguageDelete = (langToDelete) => {
      console.log(langToDelete);
      setLanguages(languages.filter((lang) => langToDelete.key !== lang.key));
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

            <Paper component="ul">
               {languages.map((language) => (
                  <li>
                     <Chip
                        key={language.key}
                        label={language.label}
                        onDelete={() => handleLanguageDelete(language)}
                     ></Chip>
                  </li>
               ))}
            </Paper>
         </Box>
      </form>
   );
}

export default ProfileForm;
