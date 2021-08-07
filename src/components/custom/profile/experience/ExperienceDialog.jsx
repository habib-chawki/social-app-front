import React from 'react';

import ExperienceForm from './ExperienceForm';

import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

function ExperienceDialog({
   onAddExperience,
   onUpdateExperience,
   open,
   closeDialog,
   initialFormValues,
}) {
   return (
      <Box>
         <Dialog open={open} onClose={closeDialog} fullWidth>
            <DialogTitle>Experience</DialogTitle>
            <DialogContent dividers>
               <ExperienceForm
                  onAddExperience={onAddExperience}
                  onUpdateExperience={onUpdateExperience}
                  onCloseDialog={closeDialog}
                  initialFormValues={initialFormValues}
               />
            </DialogContent>
         </Dialog>
      </Box>
   );
}

export default ExperienceDialog;
