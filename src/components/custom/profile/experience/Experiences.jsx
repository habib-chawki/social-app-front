import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';

const useStyles = makeStyles({
   paper: {
      padding: 20,
   },
   paperItem: {
      marginTop: 20,
   },
   updateBtn: {
      marginRight: 10,
   },
});

function Experiences({
   experiences,
   onRemoveExperience,
   onOpenExperienceDialog,
}) {
   const classes = useStyles();

   return (
      <Box>
         {experiences.map((experience) => (
            <Paper key={experience.position} className={classes.paper}>
               <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
               >
                  <Typography variant="h4">{experience.company}</Typography>

                  <Typography variant="subtitle1" color="textSecondary">
                     {moment(experience.startDate).format('MMMM YYYY')} -{' '}
                     {moment(experience.endDate).format('MMMM YYYY')}
                  </Typography>
               </Box>

               <Typography variant="h5" className={classes.paperItem}>
                  {experience.position}
               </Typography>

               <Divider className={classes.paperItem} />

               <Typography variant="body1" className={classes.paperItem}>
                  {experience.description}
               </Typography>

               <Divider className={classes.paperItem} />

               <Box
                  display="flex"
                  justifyContent="flex-end"
                  className={classes.paperItem}
               >
                  <Button
                     className={classes.updateBtn}
                     color="primary"
                     variant="contained"
                     onClick={() => onOpenExperienceDialog(experience)}
                  >
                     Update
                  </Button>
                  <Button
                     color="secondary"
                     variant="contained"
                     onClick={() => onRemoveExperience(experience)}
                  >
                     Remove
                  </Button>
               </Box>
            </Paper>
         ))}
      </Box>
   );
}

export default Experiences;
