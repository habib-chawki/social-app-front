import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import withEdit from '../higher-order/withEdit';
import UserContext from '../../context/user-context';

import {
   Box,
   Card,
   CardContent,
   CardHeader,
   Avatar,
   IconButton,
   Menu,
   MenuItem,
} from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import MoreVertIcon from '@material-ui/icons/MoreVert';

function Comment(comment) {
   const loggedInUser = useContext(UserContext);
   const [anchorEl, setAnchorEl] = useState(null);

   const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
   };

   return (
      <ListItem key={comment.id}>
         <ListItemAvatar>
            <Avatar />
         </ListItemAvatar>
         <ListItemText
            primary={
               <Link to={`user/${comment.owner._id}/profile`}>
                  {comment.owner.profile.firstName +
                     ' ' +
                     comment.owner.profile.lastName}
               </Link>
            }
            secondary={moment(comment.creationTime).format('LLL')}
         />

         <ListItemSecondaryAction>
            {
               // Determine whether user can edit comment
               loggedInUser === comment.owner._id && (
                  <Box>
                     <IconButton onClick={handleMenuClick}>
                        <MoreVertIcon />
                     </IconButton>
                     <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                     >
                        <MenuItem onClick={() => comment.handleUpdate()}>
                           Edit
                        </MenuItem>
                        <MenuItem onClick={() => comment.handleRemove()}>
                           Delete
                        </MenuItem>
                     </Menu>
                  </Box>
               )
            }
         </ListItemSecondaryAction>

         {/* {comment.renderContent()} */}
      </ListItem>
   );
}

export default withEdit(Comment);
