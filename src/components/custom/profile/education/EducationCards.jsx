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

function EducationCards({ educations }) {
   const classes = useStyles();

   if (educations.length === 0) {
      return <Fallback message="Education not provided" />;
   }

   return (
      <Box>
         {educations.map((education) => (
            <Paper
               className={`${classes.paper} ${classes.paperItem}`}
               key={education.major}
               elevation="3"
            >
               <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
               >
                  <Typography variant="h4">{education.school}</Typography>

                  <Typography variant="subtitle1" color="textSecondary">
                     {moment(education.startDate).format('MMMM YYYY')} -{' '}
                     {moment(education.endDate).format('MMMM YYYY')}
                  </Typography>
               </Box>

               <Typography variant="h5" className={classes.paperItem}>
                  {education.major}
               </Typography>

               <Divider className={classes.paperItem} />

               <Typography variant="body1" className={classes.paperItem}>
                  {education.description}
               </Typography>
            </Paper>
         ))}
      </Box>
   );
}

export default EducationCards;
