import React, { useState } from 'react';

import { Box, TextField, Button } from '@material-ui/core';

function Skills() {
   const [skill, setSkill] = useState('');

   const handleSkillChange = (event) => {
      setSkill(event.target.value);
   };

   return (
      <Box display="flex" flexDirection="row">
         <TextField
            value={skill}
            onChange={handleSkillChange}
            label="Skill"
            flex="1"
         />
         <Button>Add skill</Button>
      </Box>
   );
}

export default Skills;
