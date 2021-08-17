import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function PostActionsMenu() {
   return (
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
   );
}

export default PostActionsMenu;
