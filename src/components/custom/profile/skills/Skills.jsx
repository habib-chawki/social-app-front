import React, { useState } from 'react';

import {
   TextField,
   Button,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   ListItemSecondaryAction,
   IconButton,
   Select,
   MenuItem,
} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import TimerIcon from '@material-ui/icons/Timer';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles({
   item: {
      width: '100%',
   },
   subItem: {
      flexGrow: 1,
   },
});

function Skills({ onAddSkill, onRemoveSkill, skills }) {
   const classes = useStyles();

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
         <TextField
            className={classes.item}
            value={skill}
            onChange={handleSkillChange}
            onKeyPress={addSkill}
            label="Skill"
            variant="outlined"
         />

         <Select
            className={classes.item}
            value={type}
            onChange={handleTypeChange}
            variant="outlined"
         >
            <MenuItem value="technical">
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon>
                     <TimerIcon color="secondary" />
                  </ListItemIcon>

                  <ListItemText primary="Technical" />
               </div>
            </MenuItem>
            <MenuItem value="organizational">
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon>
                     <WorkIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Organizational" />
               </div>
            </MenuItem>
         </Select>

         <Button onClick={addSkill} fullWidth>
            Add skill
         </Button>
         <List>{renderSkills()}</List>
      </Box>
   );
}

export default Skills;
