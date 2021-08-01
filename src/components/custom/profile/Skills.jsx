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
import { makeStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import TimerIcon from '@material-ui/icons/Timer';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles({
   item: {
      width: '100%',
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
      <Grid container>
         <Grid item container direction="row">
            <Grid item className={classes.item}>
               <TextField
                  value={skill}
                  onChange={handleSkillChange}
                  onKeyPress={addSkill}
                  label="Skill"
                  variant="outlined"
                  fullWidth
               />
            </Grid>

            <Grid item className={classes.item}>
               <Select
                  value={type}
                  onChange={handleTypeChange}
                  variant="outlined"
                  className={classes.item}
               >
                  <MenuItem value="technical">
                     Technical <TimerIcon />
                  </MenuItem>
                  <MenuItem value="organizational">
                     Organizational <WorkIcon />
                  </MenuItem>
               </Select>
            </Grid>
         </Grid>
         <Grid item className={classes.item}>
            <Button onClick={addSkill} fullWidth>
               Add skill
            </Button>
            <List>{renderSkills()}</List>
         </Grid>
      </Grid>
   );
}

export default Skills;
