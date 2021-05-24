import React, { useState } from 'react';
import moment from 'moment';

import { TextField, Button, Box, Card } from '@material-ui/core';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function Education({ onAddEducation, educations }) {
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();
   const [major, setMajor] = useState('');
   const [school, setSchool] = useState('');
   const [description, setDescription] = useState('');

   const handleStartDateChange = (startDate) => {
      setStartDate(startDate);
   };

   const handleEndDateChange = (endDate) => {
      setEndDate(endDate);
   };

   const handleMajorChange = (event) => {
      setMajor(event.target.value);
   };

   const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
   };

   const handleSchoolChange = (event) => {
      setSchool(event.target.value);
   };

   const addEducation = () => {
      // set up education
      const education = {
         startDate,
         endDate,
         major,
         school,
         description,
      };

      // notify parent
      onAddEducation(education);
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
               value={major}
               onChange={handleMajorChange}
               label="major"
               variant="outlined"
            />
            <TextField
               value={school}
               onChange={handleSchoolChange}
               label="school"
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
            <Button onClick={addEducation}>Add</Button>
         </Box>

         <Box>
            {educations.map((education) => (
               <Card key={education.major}>
                  <h2>
                     {education.major} - {education.school}
                  </h2>
                  <h4>
                     {moment(education.startDate).format('MMM YYYY')} -{' '}
                     {moment(education.endDate).format('MMM YYYY')}
                  </h4>
                  <p>{education.description}</p>
               </Card>
            ))}
         </Box>
      </Box>
   );
}

export default Education;
