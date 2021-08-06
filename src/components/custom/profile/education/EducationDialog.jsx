import React from 'react';

import EducationForm from './EducationForm';

import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

function EducationDialog({ onAddEducation, open, closeDialog }) {
   return (
      <Box>
         <Dialog open={open} onClose={closeDialog} fullWidth>
            <DialogTitle>Education</DialogTitle>
            <DialogContent dividers>
               <EducationForm
                  onAddEducation={onAddEducation}
                  onCloseDialog={closeDialog}
               />
            </DialogContent>
         </Dialog>
      </Box>
   );
}

export default EducationDialog;
