import React, { useState } from 'react';

import ExperienceForm from './ExperienceForm';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

function ExperienceDialog({ onAddExperience }) {
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
            Add experience
         </Button>

         <Dialog open={open} onClose={closeDialog} fullWidth>
            <DialogTitle>Experience</DialogTitle>
            <DialogContent dividers>
               <ExperienceForm
                  onAddExperience={onAddExperience}
                  onCloseDialog={closeDialog}
               />
            </DialogContent>
         </Dialog>
      </Box>
   );
}

export default ExperienceDialog;
