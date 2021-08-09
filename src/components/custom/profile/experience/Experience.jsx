import React from 'react';

import Experiences from './Experiences';
import ExperienceDialog from './ExperienceDialog';

function Experience() {
   const [experiences, setExperiences] = useState(profile.experience || []);
   const [openExperienceDialog, setOpenExperienceDialog] = useState(false);
   const [initialExperienceFormValues, setInitialExperienceFormValues] =
      useState({});

   const handleOpenExperienceDialog = (initialValues = {}) => {
      // set the initial form values in case of an update
      if (initialValues) {
         setInitialExperienceFormValues(initialValues);
      }

      setOpenExperienceDialog(true);
   };

   const closeExperienceDialog = () => {
      setOpenExperienceDialog(false);
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
         <Button onClick={handleOpenExperienceDialog} fullWidth>
            Add experience
         </Button>
         <ExperienceDialog
            onAddExperience={handleAddExperience}
            onUpdateExperience={handleUpdateExperience}
            open={openExperienceDialog}
            closeDialog={closeExperienceDialog}
            initialFormValues={initialExperienceFormValues}
         />
         <Experiences
            experiences={experiences}
            onRemoveExperience={handleRemoveExperience}
            onOpenExperienceDialog={handleOpenExperienceDialog}
         />
      </Box>
   );
}
