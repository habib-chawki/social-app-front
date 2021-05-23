import React, { useState } from 'react';

import { TextField, Button, Box } from '@material-ui/core';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function Experience() {
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();
   const [position, setPosition] = useState('');
   const [company, setCompany] = useState('');
   const [description, setDescription] = useState('');

   const handlePositionChange = (event) => {
      setPosition(event.target.value);
   };

   const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
   };

   const handleCompanyChange = (event) => {
      setCompany(event.target.value);
   };

   return (
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

         <TextField
            value={position}
            onChange={handlePositionChange}
            label="position"
            variant="outlined"
         />
         <TextField
            value={company}
            onChange={handleCompanyChange}
            label="company"
            variant="outlined"
         />
         <TextField
            value={description}
            onChange={handleDescriptionChange}
            label="description"
            multiline
            rows={6}
            variant="outlined"
         />
         <Button>Add</Button>
      </Box>
   );
}

export default Experience;
