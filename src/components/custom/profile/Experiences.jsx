import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';

const useStyles = makeStyles({
   card: {
      padding: 10,
   },
});

function Experiences({ experiences }) {
   const classes = useStyles();

   return (
      <Box>
         {experiences.map((experience) => (
            <Card key={experience.position} className={classes.card}>
               <Typography variant="h4">
                  {experience.position} - {experience.company}
               </Typography>
               <Typography variant="subtitle1" color="textSecondary">
                  {moment(experience.startDate).format('MMMM YYYY')} -
                  {moment(experience.endDate).format('MMMM YYYY')}
               </Typography>

               <Typography variant="body1">{experience.description}</Typography>
            </Card>
         ))}
      </Box>
   );
}

export default Experiences;
