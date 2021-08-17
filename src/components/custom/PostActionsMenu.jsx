import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function PostActionsMenu() {
   // actions menu
   const [anchorEl, setAnchorEl] = useState(null);

   const handleCloseActionsMenu = () => {
      setAnchorEl(null);
   };

   const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   return (
      <Box>
         <IconButton onClick={handleMenuClick}>
            <MoreHorizIcon />
         </IconButton>

         <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseActionsMenu}
         >
            <MenuItem onClick={handleEditMenuAction}>
               <ListItemIcon>
                  <EditIcon />
               </ListItemIcon>
               <ListItemText primary="Edit" />
            </MenuItem>
            <MenuItem onClick={handleDeletePost}>
               <ListItemIcon>
                  <DeleteIcon />
               </ListItemIcon>
               <ListItemText primary="Delete" />
            </MenuItem>
         </Menu>
      </Box>
   );
}

export default PostActionsMenu;
