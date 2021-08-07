import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
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
   updateBtn: {
      marginRight: 10,
   },
});

function Educations({
   educations,
   onRemoveEducation,
   openEducationFormDialog,
}) {
   const classes = useStyles();

   return (
      <Grid container spacing={4} direction="column">
         {educations.map((education) => (
            <Grid item key={education.major}>
               <Paper className={classes.paper}>
                  <Box
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center"
                  >
                     <Typography variant="h5">{education.school}</Typography>

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
                        onClick={() => openEducationFormDialog(education)}
                     >
                        Update
                     </Button>

                     <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => onRemoveEducation(education)}
                     >
                        Remove
                     </Button>
                  </Box>
               </Paper>
            </Grid>
         ))}
      </Grid>
   );
}

export default Educations;
