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
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import TimerIcon from '@material-ui/icons/Timer';
import WorkIcon from '@material-ui/icons/Work';

function Skills({ onAddSkill, onRemoveSkill, skills }) {
   const [skill, setSkill] = useState('');
   const [type, setType] = useState('technical');

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
         onAddSkill({ content: skill.trim(), type });

         // clear input
         setSkill('');
      }
   };

   const renderSkills = () => {
      let skillsList = [];

      // render list of skills
      for (const skillType in skills) {
         const temp = skills[skillType].map((skillContent, index) => (
            <ListItem key={`${skillType}${index}`}>
               <ListItemText primary={skillContent} />
               <ListItemSecondaryAction>
                  <IconButton
                     onClick={() => onRemoveSkill(skillType, index)}
                     edge="end"
                     aria-label="delete"
                  >
                     <DeleteIcon />
                  </IconButton>
               </ListItemSecondaryAction>
            </ListItem>
         ));

         skillsList = [...skillsList, ...temp];
      }

      return skillsList;
   };

   return (
      <Box display="flex" flexDirection="column">
         <Box display="flex" flexDirection="row" alignItems="stretch">
            <TextField
               value={skill}
               onChange={handleSkillChange}
               onKeyPress={addSkill}
               label="Skill"
               fullWidth={true}
               variant="outlined"
            />
            <Select
               value={type}
               onChange={handleTypeChange}
               fullWidth={true}
               variant="outlined"
            >
               <MenuItem value="technical">
                  <Box
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center"
                  >
                     Technical <TimerIcon></TimerIcon>
                  </Box>
               </MenuItem>
               <MenuItem value="organizational">
                  <Box
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center"
                  >
                     Organizational <WorkIcon></WorkIcon>
                  </Box>
               </MenuItem>
            </Select>
            <Button onClick={addSkill} fullWidth={true}>
               Add skill
            </Button>
         </Box>
         <Box>
            <List>{renderSkills()}</List>
         </Box>
      </Box>
   );
}

export default Skills;
