import React, { useState } from 'react';

import Educations from './Educations';
import EducationDialog from './EducationDialog';
import EducationFallback from './EducationFallback';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function Education({ educations, setEducations }) {
   // education dialog state
   const [openDialog, setOpenDialog] = useState(false);
   const [initialFormValues, setInitialFormValues] = useState({});

   const handleOpenEducationDialog = (values = {}) => {
      // set the initial form values in case of an update
      if (values) {
         setInitialFormValues(values);
      }

      setOpenDialog(true);
   };

   const closeDialog = () => {
      setOpenDialog(false);
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
         {educations.length === 0 ? (
            <EducationFallback handleOpenDialog={handleOpenEducationDialog} />
         ) : (
            <Box>
               <Button onClick={handleOpenEducationDialog} fullWidth>
                  Add more education
               </Button>

               <Educations
                  educations={educations}
                  onRemoveEducation={handleRemoveEducation}
                  onOpenEducationDialog={handleOpenEducationDialog}
               />
            </Box>
         )}
         <EducationDialog
            onAddEducation={handleAddEducation}
            onUpdateEducation={handleUpdateEducation}
            open={openDialog}
            closeDialog={closeDialog}
            initialFormValues={initialFormValues}
         />
      </Box>
   );
}

export default Education;
