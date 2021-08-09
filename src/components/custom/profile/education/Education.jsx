import React, { useState } from 'react';

import Educations from './Educations';
import EducationDialog from './EducationDialog';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function Education() {
   return (
      <Box>
         <Button onClick={handleOpenEducationDialog} fullWidth>
            Add education
         </Button>
         <EducationDialog
            onAddEducation={handleAddEducation}
            onUpdateEducation={handleUpdateEducation}
            open={openEducationDialog}
            closeDialog={closeEducationDialog}
            initialFormValues={initialEducationFormValues}
         />
         <Educations
            educations={educations}
            onRemoveEducation={handleRemoveEducation}
            onOpenEducationDialog={handleOpenEducationDialog}
         />
      </Box>
   );
}

export default Education;
