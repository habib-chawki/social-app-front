import React, { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import moment from 'moment';

import withEdit from '../higher-order/withEdit';
import UserContext from '../../context/user-context';

// mui components
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
      <ListItem key={comment.id} divider>
         <ListItemAvatar>
            <Avatar />
         </ListItemAvatar>
         <ListItemText
            primary={
               <Link
                  component={RouterLink}
                  to={`user/${comment.owner._id}/profile`}
                  underline="none"
               >
                  <Box fontWeight="fontWeightBold" component="span">
                     {comment.owner.profile.firstName +
                        ' ' +
                        comment.owner.profile.lastName}
                  </Box>
               </Link>
            }
            secondary={
               <>
                  {moment(comment.creationTime).format('LLL')}
                  <Typography variant="body2" color="textPrimary">
                     {comment.renderContent()}
                  </Typography>
               </>
            }
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
                           <ListItemIcon>
                              <EditIcon />
                           </ListItemIcon>
                           <ListItemText primary="Edit" />
                        </MenuItem>
                        <MenuItem onClick={() => comment.handleRemove()}>
                           <ListItemIcon>
                              <DeleteIcon />
                           </ListItemIcon>
                           <ListItemText primary="Delete" />
                        </MenuItem>
                     </Menu>
                  </Box>
               )
            }
         </ListItemSecondaryAction>
      </ListItem>
   );
}

export default withEdit(Comment);
