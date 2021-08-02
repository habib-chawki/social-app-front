import React, { useState } from 'react';

import { TextField, Button, Box } from '@material-ui/core';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function ExperienceForm({ onAddExperience }) {
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();
   const [position, setPosition] = useState('');
   const [company, setCompany] = useState('');
   const [description, setDescription] = useState('');

   const handleStartDateChange = (startDate) => {
      setStartDate(startDate);
   };

   const handleEndDateChange = (endDate) => {
      setEndDate(endDate);
   };

   const handlePositionChange = (event) => {
      setPosition(event.target.value);
   };

   const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
   };

   const handleCompanyChange = (event) => {
      setCompany(event.target.value);
   };

   const addExperience = () => {
      // set up experience
      const experience = {
         startDate,
         endDate,
         position,
         company,
         description,
      };

      // notify parent
      onAddExperience(experience);

      // clear inputs
      setPosition('');
      setCompany('');
      setDescription('');
   };

   return (
      <Box>
         <Box display="flex" flexDirection="column">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <KeyboardDatePicker
                  value={startDate}
                  onChange={handleStartDateChange}
                  disableToolbar
                  variant="inline"
                  label="Start date"
                  format="dd/MM/yyyy"
               />
            </MuiPickersUtilsProvider>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <KeyboardDatePicker
                  value={endDate}
                  onChange={handleEndDateChange}
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
            <Button onClick={addExperience}>Add</Button>
         </Box>
      </Box>
   );
}

export default ExperienceForm;
