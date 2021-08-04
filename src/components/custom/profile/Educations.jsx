import React from 'react';

import moment from 'moment';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

function Educations({ educations }) {
   return (
      <Box>
         {educations.map((education) => (
            <Card key={education.major}>
               <h2>
                  {education.major} - {education.school}
               </h2>
               <h4>
                  {moment(education.startDate).format('MMM YYYY')} -{' '}
                  {moment(education.endDate).format('MMM YYYY')}
               </h4>
               <p>{education.description}</p>
            </Card>
         ))}
      </Box>
   );
}

export default Educations;
