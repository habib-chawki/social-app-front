import React from 'react';

import Experiences from './Experiences';
import ExperienceDialog from './ExperienceDialog';

function Experience() {
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
