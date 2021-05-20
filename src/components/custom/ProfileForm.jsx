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

   const handleGenderChange = (event) => {
      setGender(event.target.value);
   };

   return (
      <form>
         <Box display="flex" flexDirection="column">
            <TextField label="First name" variant="filled" />
            <TextField label="Middle name" variant="filled" />
            <TextField label="Last name" variant="filled" />
            <TextField label="Address" variant="filled" />

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
                  format="MM/dd/yyyy"
               ></KeyboardDatePicker>
            </MuiPickersUtilsProvider>
         </Box>
      </form>
   );
}

export default ProfileForm;
