import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import moment from 'moment';

function Experiences({ experiences }) {
   return (
      <Box>
         {experiences.map((experience) => (
            <Card key={experience.position}>
               <Typography variant="h4">
                  {experience.position} - {experience.company}
               </Typography>
               <Typography variant="subtitle1">
                  {moment(experience.startDate).format('MMM YYYY')} -
                  {moment(experience.endDate).format('MMM YYYY')}
               </Typography>

               <Typography variant="body1">{experience.description}</Typography>
            </Card>
         ))}
      </Box>
   );
}

export default Experiences;
