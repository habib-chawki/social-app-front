import React, { useState } from 'react';

import EducationForm from './EducationForm';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

function EducationDialog({ onAddExperience }) {
   const [open, setOpen] = useState(false);

   const openDialog = () => {
      setOpen(true);
   };

   const closeDialog = () => {
      setOpen(false);
   };

   return (
      <Box>
         <Button onClick={openDialog} fullWidth>
            Add education
         </Button>

         <Dialog open={open} onClose={closeDialog} fullWidth>
            <DialogTitle>Education</DialogTitle>
            <DialogContent dividers>
               <EducationForm
                  onAddExperience={onAddExperience}
                  onCloseDialog={closeDialog}
               />
            </DialogContent>
         </Dialog>
      </Box>
   );
}

export default EducationDialog;
