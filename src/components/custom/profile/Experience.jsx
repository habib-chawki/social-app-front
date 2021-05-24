import React, { useState } from 'react';
import moment from 'moment';

import { TextField, Button, Box, Card } from '@material-ui/core';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function Experiences({ onAddExperience, experiences }) {
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

         <Box>
            {experiences.map((experience) => (
               <Card key={experience.position}>
                  <h2>
                     {experience.position} - {experience.company}
                  </h2>
                  <h4>
                     {moment(experience.startDate).format('MMM YYYY')} -{' '}
                     {moment(experience.endDate).format('MMM YYYY')}
                  </h4>
                  <p>{experience.description}</p>
               </Card>
            ))}
         </Box>
      </Box>
   );
}

export default Experiences;
