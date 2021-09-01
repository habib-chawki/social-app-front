import React, { useState } from 'react';

import Experiences from './Experiences';
import ExperienceDialog from './ExperienceDialog';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import NoteAddIcon from '@material-ui/icons/NoteAdd';

function Experience({ experiences, setExperiences }) {
   const [openDialog, setOpenDialog] = useState(false);
   const [initialFormValues, setInitialFormValues] = useState({});

   const handleOpenDialog = (values = {}) => {
      // set the initial form values in case of an update
      if (values) {
         setInitialFormValues(values);
      }

      setOpenDialog(true);
   };

   const closeDialog = () => {
      setOpenDialog(false);
   };

   const handleAddExperience = (experience) => {
      setExperiences([...experiences, experience]);
   };

   const handleUpdateExperience = (experience, updatedExperience) => {
      setExperiences(
         experiences.map((item) =>
            item.position === experience.position &&
            item.company === experience.company &&
            item.startDate === experience.startDate
               ? updatedExperience
               : item
         )
      );
   };

   const handleRemoveExperience = (experience) => {
      setExperiences(
         experiences.filter(
            (item) =>
               item.position !== experience.position ||
               item.company !== experience.company ||
               item.startDate !== experience.startDate
         )
      );
   };

   if (experiences.length === 0) {
      return (
         <Box>
            <Paper variant="outlined">
               <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
               >
                  <Typography gutterBottom variant="h6">
                     Add experience
                  </Typography>
                  <IconButton onClick={handleOpenDialog}>
                     <NoteAddIcon />
                  </IconButton>
               </Box>
            </Paper>
            <ExperienceDialog
               onAddExperience={handleAddExperience}
               onUpdateExperience={handleUpdateExperience}
               open={openDialog}
               closeDialog={closeDialog}
               initialFormValues={initialFormValues}
            />
         </Box>
      );
   }

   return (
      <Box>
         <Button onClick={handleOpenDialog} fullWidth>
            Add experience
         </Button>
         <ExperienceDialog
            onAddExperience={handleAddExperience}
            onUpdateExperience={handleUpdateExperience}
            open={openDialog}
            closeDialog={closeDialog}
            initialFormValues={initialFormValues}
         />
         <Experiences
            experiences={experiences}
            onRemoveExperience={handleRemoveExperience}
            onOpenExperienceDialog={handleOpenDialog}
         />
      </Box>
   );
}

export default Experience;
