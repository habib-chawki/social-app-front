import React, { useState } from 'react';

import Experiences from './Experiences';
import ExperienceDialog from './ExperienceDialog';
import ExperienceFallback from './ExperienceFallback';

import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';

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

   return (
      <Box>
         {experiences.length === 0 ? (
            <ExperienceFallback handleOpenDialog={handleOpenDialog} />
         ) : (
            <Box>
               <Button onClick={handleOpenDialog} fullWidth>
                  Add experience
               </Button>

               <Experiences
                  experiences={experiences}
                  onRemoveExperience={handleRemoveExperience}
                  onOpenExperienceDialog={handleOpenDialog}
               />
            </Box>
         )}
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

export default Experience;
