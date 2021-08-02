import React, { useState } from 'react';

import ExperienceForm from './ExperienceForm';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

function ExperienceDialog({ onAddExperience }) {
   const [openExperienceDialog, setOpenExperienceDialog] = useState(false);

   return (
      <Box>
         <Button fullWidth onClick={() => setOpenExperienceDialog(true)}>
            Add experience
         </Button>

         <Dialog
            open={openExperienceDialog}
            onClose={() => setOpenExperienceDialog(false)}
            fullWidth
         >
            <DialogTitle>Experience</DialogTitle>
            <DialogContent>
               <ExperienceForm onAddExperience={onAddExperience} />
            </DialogContent>
         </Dialog>
      </Box>
   );
}

export default ExperienceDialog;
