import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

import moment from 'moment';

function Experiences({ experiences }) {
   return (
      <Box>
         {experiences.map((experience) => (
            <Card key={experience.position}>
               <h2>
                  {experience.position} - {experience.company}
               </h2>
               <h4>
                  {moment(experience.startDate).format('MMM YYYY')} -{' '}
                  {moment(experience.endDate).format('MMM YYYY')}
               </h4>
               <p>{experience.description}</p>
            </Card>
         ))}
      </Box>
   );
}

export default Experiences;
