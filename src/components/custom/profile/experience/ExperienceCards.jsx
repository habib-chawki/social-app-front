import React from 'react';

import Fallback from '../Fallback';

// libs
import moment from 'moment';

// mui components
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   paper: {
      padding: 20,
   },
   paperItem: {
      marginTop: 20,
   },
});

function ExperienceCards({ experiences }) {
   const classes = useStyles();

   if (experiences.length === 0) {
      return <Fallback message="Experience not provided" />;
   }

   return (
      <Box>
         {experiences.map((experience) => (
            <Paper
               className={`${classes.paper} ${classes.paperItem}`}
               key={experience.position}
               elevation="3"
            >
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
            </Paper>
         ))}
      </Box>
   );
}

export default ExperienceCards;
