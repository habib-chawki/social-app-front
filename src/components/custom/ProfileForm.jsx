import React, { useState } from 'react';
import {
   TextField,
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   Box,
} from '@material-ui/core';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function ProfileForm() {
   const [gender, setGender] = useState('');
   const [birthday, setBirthday] = useState(Date.now());

   const handleGenderChange = (event) => {
      setGender(event.target.value);
   };

   const handleBirthdayChange = (date) => {
      setBirthday(date);
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
         </Box>
      </form>
   );
}

export default ProfileForm;
