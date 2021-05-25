import React, { useState } from 'react';

import { Box, TextField, Button } from '@material-ui/core';

function Skills() {
   return (
      <Box display="flex" flexDirection="row">
         <TextField label="Skill" flex="1" />
         <Button>Add skill</Button>
      </Box>
   );
}

export default Skills;
