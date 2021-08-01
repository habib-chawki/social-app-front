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
import Grid from '@material-ui/core/Grid';

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
      <Grid container direction="column">
         <Grid item>
            <TextField
               value={skill}
               onChange={handleSkillChange}
               onKeyPress={addSkill}
               label="Skill"
               variant="outlined"
               fullWidth
            />

            <Select
               value={type}
               onChange={handleTypeChange}
               variant="outlined"
               fullWidth
            >
               <MenuItem value="technical">
                  Technical <TimerIcon />
               </MenuItem>
               <MenuItem value="organizational">
                  Organizational <WorkIcon />
               </MenuItem>
            </Select>
         </Grid>
         <Grid item>
            <Button onClick={addSkill}>Add skill</Button>
            <List>{renderSkills()}</List>
         </Grid>
      </Grid>
   );
}

export default Skills;
