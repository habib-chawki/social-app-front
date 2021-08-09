import React, { useState } from 'react';

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
