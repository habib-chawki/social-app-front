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

function Educations({ educations }) {
   const classes = useStyles();

   return (
      <Box>
         {educations.map((education) => (
            <Paper key={education.major} className={classes.paper}>
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

export default Educations;
