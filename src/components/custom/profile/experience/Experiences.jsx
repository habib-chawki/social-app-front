import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';

import moment from 'moment';

const useStyles = makeStyles({
   paper: {
      padding: 20,
      background: '#f5f5f5',
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
      <Grid container spacing={2} direction="column">
         {experiences.map((experience) => (
            <Grid item key={experience.position}>
               <Paper className={classes.paper}>
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
                     <Tooltip title="Update">
                        <IconButton
                           onClick={() => onOpenExperienceDialog(experience)}
                        >
                           <UpdateIcon color="secondary" />
                        </IconButton>
                     </Tooltip>

                     <Tooltip title="Remove">
                        <IconButton
                           onClick={() => onRemoveExperience(experience)}
                        >
                           <DeleteForeverIcon color="error" />
                        </IconButton>
                     </Tooltip>
                  </Box>
               </Paper>
            </Grid>
         ))}
      </Grid>
   );
}

export default Experiences;
