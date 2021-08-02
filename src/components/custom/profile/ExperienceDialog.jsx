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

   const handleOpenDialog = () => {
      setOpen(true);
   };

   const handleCloseDialog = () => {
      setOpen(false);
   };

   return (
      <Box>
         <Button fullWidth onClick={handleOpenDialog}>
            Add experience
         </Button>

         <Dialog open={open} onClose={handleCloseDialog} fullWidth>
            <DialogTitle>Experience</DialogTitle>
            <DialogContent>
               <ExperienceForm onAddExperience={onAddExperience} />
            </DialogContent>

            <DialogActions>
               <Button>Add</Button>
               <Button>Cancel</Button>
            </DialogActions>
         </Dialog>
      </Box>
   );
}

export default ExperienceDialog;
