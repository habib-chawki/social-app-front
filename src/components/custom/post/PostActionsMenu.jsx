import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function PostActionsMenu({
   postId,
   onMenuClick,
   menuAnchorElement,
   onEditAction,
   onDeletePost,
   closeMenu,
}) {
   return (
      <Box>
         <IconButton onClick={onMenuClick} color="secondary">
            <MoreHorizIcon />
         </IconButton>

         <Menu
            id="menu"
            anchorEl={menuAnchorElement}
            keepMounted
            open={Boolean(menuAnchorElement)}
            onClose={closeMenu}
         >
            <MenuItem onClick={onEditAction}>
               <ListItemIcon>
                  <EditIcon color="secondary" />
               </ListItemIcon>
               <ListItemText primary="Edit" />
            </MenuItem>
            <MenuItem onClick={() => onDeletePost(postId)}>
               <ListItemIcon>
                  <DeleteIcon color="secondary" />
               </ListItemIcon>
               <ListItemText primary="Delete" />
            </MenuItem>
         </Menu>
      </Box>
   );
}

export default PostActionsMenu;
