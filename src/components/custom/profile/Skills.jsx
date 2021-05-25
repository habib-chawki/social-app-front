import React, { useState } from 'react';

import {
   Box,
   TextField,
   Button,
   List,
   ListItem,
   ListItemText,
} from '@material-ui/core';

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
            <List component="div">
               {skills.map((skill, index) => (
                  <ListItem key={index}>
                     <ListItemText primary={skill} />
                  </ListItem>
               ))}
            </List>
         </Box>
      </Box>
   );
}

export default Skills;
