import React, { useState } from 'react';

import Educations from './Educations';
import EducationDialog from './EducationDialog';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function Education({ educations, setEducations }) {
   // education dialog state
   const [openEducationDialog, setOpenEducationDialog] = useState(false);
   const [initialEducationFormValues, setInitialEducationFormValues] = useState(
      {}
   );

   const handleOpenEducationDialog = (initialValues = {}) => {
      // set the initial form values in case of an update
      if (initialValues) {
         setInitialEducationFormValues(initialValues);
      }

      setOpenEducationDialog(true);
   };

   const closeEducationDialog = () => {
      setOpenEducationDialog(false);
   };

   const handleAddEducation = (education) => {
      setEducations([...educations, education]);
   };

   const handleUpdateEducation = (education, updatedEducation) => {
      setEducations(
         educations.map((item) =>
            item.major === education.major &&
            item.school === education.school &&
            item.startDate === education.startDate
               ? updatedEducation
               : item
         )
      );
   };

   const handleRemoveEducation = (education) => {
      setEducations(
         educations.filter(
            (item) =>
               item.major !== education.major ||
               item.school !== education.school ||
               item.startDate !== education.startDate
         )
      );
   };
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
