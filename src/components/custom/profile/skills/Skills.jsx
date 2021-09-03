import React, { useState } from 'react';

import {
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   ListItemSecondaryAction,
   IconButton,
} from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Box from '@material-ui/core/Box';

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
               <ListItemIcon>
                  {skillType === 'organizational' ? (
                     <WorkIcon color="secondary" />
                  ) : (
                     <TimerIcon color="secondary" />
                  )}
               </ListItemIcon>
               <ListItemText primary={skillContent} />
               <ListItemSecondaryAction>
                  <IconButton
                     onClick={() => onRemoveSkill(skillType, index)}
                     edge="end"
                  >
                     <DeleteIcon color="error" />
                  </IconButton>
               </ListItemSecondaryAction>
            </ListItem>
         ));

         skillsList = [...skillsList, ...temp];
      }

      return skillsList;
   };

   return (
      <Box>
         <OutlinedInput
            value={skill}
            onChange={handleSkillChange}
            onKeyPress={addSkill}
            variant="outlined"
            fullWidth
            placeholder="Add skill ..."
            endAdornment={
               <InputAdornment position="end">
                  <IconButton onClick={addSkill}>
                     <AddCircleIcon color="secondary" />
                  </IconButton>
               </InputAdornment>
            }
         />

         <RadioGroup row name="skills" value={type} onChange={handleTypeChange}>
            <FormControlLabel
               value="technical"
               control={<Radio />}
               label="Technical"
            />
            <FormControlLabel
               value="organizational"
               control={<Radio />}
               label="Organizational"
            />
         </RadioGroup>

         <List>{renderSkills()}</List>
      </Box>
   );
}

export default Skills;
