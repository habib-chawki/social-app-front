import React, { useState } from 'react';

import {
   Box,
   TextField,
   Button,
   List,
   ListItem,
   ListItemText,
   ListItemSecondaryAction,
   IconButton,
   Select,
   MenuItem,
   FormControl,
   InputLabel,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

function Skills({ onAddSkill, onRemoveSkill, skills }) {
   const [skill, setSkill] = useState('');
   const [type, setType] = useState('Technical');

   const handleSkillChange = (event) => {
      setSkill(event.target.value);
   };

   const handleTypeChange = (event) => {
      setType(event.target.value);
   };

   const addSkill = (event) => {
      if (
         skill.trim() !== '' &&
         (event.type === 'click' ||
            (event.type === 'keypress' && event.key === 'Enter'))
      ) {
         onAddSkill({ skill: skill.trim(), type });

         // clear input
         setSkill('');
      }
   };

   return (
      <Box display="flex" flexDirection="column">
         <Box display="flex" flexDirection="row">
            <TextField
               value={skill}
               onChange={handleSkillChange}
               onKeyPress={addSkill}
               label="Skill"
            />
            <FormControl>
               <InputLabel>Type</InputLabel>
               <Select value={type} onChange={handleTypeChange}>
                  <MenuItem value="Technical">Technical</MenuItem>
                  <MenuItem value="Orginizational">Orginizational</MenuItem>
               </Select>
            </FormControl>
            <Button onClick={addSkill}>Add skill</Button>
         </Box>
         <Box>
            <List>
               {skills.map((skill, index) => (
                  <ListItem key={index}>
                     <ListItemText primary={skill} />
                     <ListItemSecondaryAction>
                        <IconButton
                           onClick={() => onRemoveSkill(index)}
                           edge="end"
                           aria-label="delete"
                        >
                           <DeleteIcon />
                        </IconButton>
                     </ListItemSecondaryAction>
                  </ListItem>
               ))}
            </List>
         </Box>
      </Box>
   );
}

export default Skills;
