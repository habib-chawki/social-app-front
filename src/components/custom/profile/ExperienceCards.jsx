import React from 'react';

function ExperienceCards({ experiences }) {
   return (
      <Box>
         {experiences.length === 0 ? (
            <p>Undetermined experience</p>
         ) : (
            experiences.map((experience) => (
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
            ))
         )}
      </Box>
   );
}

export default ExperienceCards;
