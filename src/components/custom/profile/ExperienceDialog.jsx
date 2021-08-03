import React, { useState } from 'react';

import ExperienceForm from './ExperienceForm';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

function ExperienceDialog({ onAddExperience }) {
   const [open, setOpen] = useState(false);

   const openDialog = () => {
      setOpen(true);
   };

   const closeDialog = () => {
      setOpen(false);
   };

   const handleAddExperience = () => {
      closeDialog();
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

            <DialogActions>
               <Button onClick={handleAddExperience}>Add</Button>
               <Button onClick={closeDialog}>Cancel</Button>
            </DialogActions>
         </Dialog>
      </Box>
   );
}

export default ExperienceDialog;
