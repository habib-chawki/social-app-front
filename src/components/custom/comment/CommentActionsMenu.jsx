import React from 'react';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function CommentActionsMenu({
   commentId,
   onMenuClick,
   menuAnchorElement,
   onEditAction,
   onDeleteComment,
   closeMenu,
}) {
   return (
      <Box>
         <IconButton onClick={onMenuClick}>
            <MoreVertIcon />
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
                  <EditIcon />
               </ListItemIcon>
               <ListItemText primary="Edit" />
            </MenuItem>
            <MenuItem onClick={() => onDeleteComment(commentId)}>
               <ListItemIcon>
                  <DeleteIcon />
               </ListItemIcon>
               <ListItemText primary="Delete" />
            </MenuItem>
         </Menu>
      </Box>
   );
}

export default CommentActionsMenu;
