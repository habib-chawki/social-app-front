import React, { useState } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function CollapsibleSkills({ skills, heading }) {
   const [open, setOpen] = useState(true);

   const handleClick = () => {
      setOpen(!open);
   };

   return (
      <Box>
         <ListItem button onClick={handleClick}>
            <ListItemIcon>
               <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Organizational" />
            {open ? <ExpandLess /> : <ExpandMore />}
         </ListItem>

         <Collapse in={open}>
            <List>
               {skills.length === 0 ? (
                  <p>Undetermined organizational skills</p>
               ) : (
                  skills.map((skill, index) => (
                     <ListItem key={index}>
                        <ListItemText primary={skill} />
                     </ListItem>
                  ))
               )}
            </List>
         </Collapse>
      </Box>
   );
}

export default CollapsibleSkills;
