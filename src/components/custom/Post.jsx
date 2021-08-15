import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import moment from 'moment';

import Comments from './Comments';
import withEdit from '../higher-order/withEdit';
import UserContext from '../../context/user-context';

import {
   Card,
   CardContent,
   CardHeader,
   Avatar,
   Divider,
   IconButton,
   Menu,
   MenuItem,
} from '@material-ui/core';

import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   card: {
      paddingTop: 30,
      paddingBottom: 30,
      margin: 30,
   },
});

function Post(post) {
   const loggedInUser = useContext(UserContext);
   const [anchorEl, setAnchorEl] = useState(null);

   const classes = useStyles();

   const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleDeletePost = () => {
      post.handleRemove();
   };

   const handleEditPost = () => {
      post.handleUpdate();
      handleMenuClose();
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
   };

   // extract post owner full name
   const { firstName, middleName, lastName } = post.owner.profile;
   const postOwnerFullName = `${firstName} ${middleName} ${lastName}`;

   return (
      <Card className={classes.card}>
         <CardHeader
            avatar={<Avatar alt={postOwnerFullName} />}
            title={
               <Link
                  to={`user/${post.owner._id}/profile`}
                  component={RouterLink}
                  underline="none"
               >
                  <Typography variant="h5">{postOwnerFullName}</Typography>
               </Link>
            }
            subheader={moment(post.creationTime).format('LLL')}
            action={
               // Determine whether user can edit post
               loggedInUser === post.owner._id && (
                  <div>
                     <IconButton onClick={handleMenuClick}>
                        <MoreHorizIcon />
                     </IconButton>
                     <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                     >
                        <MenuItem onClick={handleEditPost}>
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
                  </div>
               )
            }
         />

         <CardContent>{post.renderContent()}</CardContent>

         <Divider />

         <Comments id={post.id} comments={post.comments} />
      </Card>
   );
}

export default withEdit(Post);
