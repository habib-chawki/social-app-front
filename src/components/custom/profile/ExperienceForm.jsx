import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function ExperienceForm({ onAddExperience, onCloseDialog }) {
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

      // close dialog
      onCloseDialog();

      // clear inputs
      setPosition('');
      setCompany('');
      setDescription('');
   };

   return (
      <Grid container direction="column" spacing={2}>
         <Grid item>
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
         </Grid>
         <Grid item>
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
         </Grid>

         <Grid item>
            <TextField
               value={position}
               onChange={handlePositionChange}
               label="position"
               variant="outlined"
            />
         </Grid>

         <Grid item>
            <TextField
               value={company}
               onChange={handleCompanyChange}
               label="company"
               variant="outlined"
            />
         </Grid>

         <Grid item>
            <TextField
               value={description}
               onChange={handleDescriptionChange}
               label="description"
               multiline
               rows={6}
               variant="outlined"
            />
         </Grid>

         <Grid item>
            <Button onClick={addExperience}>Add</Button>
            <Button onClick={onCloseDialog}>Cancel</Button>
         </Grid>
      </Grid>
   );
}

export default ExperienceForm;
