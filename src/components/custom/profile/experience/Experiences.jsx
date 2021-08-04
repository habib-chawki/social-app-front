import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';

const useStyles = makeStyles({
   paper: {
      padding: 20,
   },
   paperItem: {
      marginTop: 20,
   },
});

function Experiences({ experiences }) {
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
            </Paper>
         ))}
      </Box>
   );
}

export default Experiences;
