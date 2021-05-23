import React, { useState } from 'react';

import { TextField, Button, Box } from '@material-ui/core';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function Experience() {
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

         <TextField label="position" variant="outlined" />
         <TextField label="company" variant="outlined" />
         <TextField label="description" multiline rows={6} variant="outlined" />
         <Button>Add</Button>
      </Box>
   );
}

export default Experience;
