import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

function ExperienceFallback({ handleOpenDialog }) {
   return (
      <Box>
         <Paper variant="outlined">
            <Box
               display="flex"
               flexDirection="column"
               justifyContent="center"
               alignItems="center"
            >
               <Typography gutterBottom variant="h6">
                  Add experience
               </Typography>
               <IconButton onClick={handleOpenDialog}>
                  <NoteAddIcon />
               </IconButton>
            </Box>
         </Paper>
      </Box>
   );
}

export default ExperienceFallback;
