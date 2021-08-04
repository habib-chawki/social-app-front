import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles({
   formField: {
      width: '100%',
   },
});

function Education({ onAddEducation, onCloseDialog }) {
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();
   const [major, setMajor] = useState('');
   const [school, setSchool] = useState('');
   const [description, setDescription] = useState('');

   const classes = useStyles();

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

      // clear inputs
      setMajor('');
      setSchool('');
      setDescription('');
   };

   return (
      <Grid container direction="column" spacing={2}>
         <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <KeyboardDatePicker
                  className={classes.formField}
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
                  className={classes.formField}
                  value={endDate}
                  onChange={handleEndDateChange}
                  disableToolbar
                  variant="inline"
                  label="End date"
                  format="dd/MM/yyyy"
               />
            </MuiPickersUtilsProvider>
         </Grid>

         <Grid item className={classes.formField}>
            <TextField
               value={major}
               onChange={handleMajorChange}
               label="major"
               variant="outlined"
               fullWidth
            />
         </Grid>

         <Grid item className={classes.formField}>
            <TextField
               value={school}
               onChange={handleSchoolChange}
               label="school"
               variant="outlined"
               fullWidth
            />
         </Grid>

         <Grid item className={classes.formField}>
            <TextField
               value={description}
               onChange={handleDescriptionChange}
               label="description"
               multiline
               rows={6}
               variant="outlined"
               fullWidth
            />
         </Grid>

         <Grid item container justifyContent="flex-end">
            <Button onClick={addEducation}>Add</Button>
            <Button onClick={onCloseDialog}>Cancel</Button>
         </Grid>
      </Grid>
   );
}

export default Education;
