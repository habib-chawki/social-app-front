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

function ExperienceForm({
   onAddExperience,
   onUpdateExperience,
   onCloseDialog,
   initialFormValues,
}) {
   const [startDate, setStartDate] = useState(initialFormValues.startDate);
   const [endDate, setEndDate] = useState(initialFormValues.endDate);
   const [position, setPosition] = useState(initialFormValues.position);
   const [company, setCompany] = useState(initialFormValues.company);
   const [description, setDescription] = useState(
      initialFormValues.description
   );

   const classes = useStyles();

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

      // notify parent, add or update education based on initial form values
      initialFormValues.position
         ? onUpdateExperience(initialFormValues, experience)
         : onAddExperience(experience);

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
               value={position}
               onChange={handlePositionChange}
               label="position"
               variant="outlined"
               fullWidth
            />
         </Grid>

         <Grid item className={classes.formField}>
            <TextField
               value={company}
               onChange={handleCompanyChange}
               label="company"
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
            <Button onClick={addExperience}>
               {initialFormValues.position ? 'Update' : 'Add'}
            </Button>
            <Button onClick={onCloseDialog}>Cancel</Button>
         </Grid>
      </Grid>
   );
}

export default ExperienceForm;
