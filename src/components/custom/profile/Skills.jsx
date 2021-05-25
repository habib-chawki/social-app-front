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
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

function Skills({ onAddSkill, skills }) {
   const [skill, setSkill] = useState('');

   const handleSkillChange = (event) => {
      setSkill(event.target.value);
   };

   const addSkill = () => {
      onAddSkill(skill);
   };

   return (
      <Box display="flex" flexDirection="column">
         <Box display="flex" flexDirection="row">
            <TextField
               value={skill}
               onChange={handleSkillChange}
               label="Skill"
            />
            <Button onClick={addSkill}>Add skill</Button>
         </Box>
         <Box>
            <List>
               {skills.map((skill, index) => (
                  <ListItem key={index}>
                     <ListItemText primary={skill} />
                     <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
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
