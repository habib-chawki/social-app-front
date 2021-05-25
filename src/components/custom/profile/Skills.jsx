import React, { useState } from 'react';

import { Box, TextField, Button, List, ListItem } from '@material-ui/core';

function Skills({ onAddSkill, skills }) {
   const [skill, setSkill] = useState('');

   const handleSkillChange = (event) => {
      setSkill(event.target.value);
   };

   const addSkill = () => {
      onAddSkill(skill);
   };

   return (
      <Box display="flex" flexDirection="row">
         <TextField
            value={skill}
            onChange={handleSkillChange}
            label="Skill"
            flex="1"
         />
         <Button onClick={addSkill}>Add skill</Button>

         <List>
            {skills.map((skill) => (
               <ListItem>skill</ListItem>
            ))}
         </List>
      </Box>
   );
}

export default Skills;
