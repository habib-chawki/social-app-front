import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import moment from 'moment';

import Comments from './Comments';
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

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

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
   // menu
   const loggedInUser = useContext(UserContext);
   const [anchorEl, setAnchorEl] = useState(null);

   // dialog
   const [openEditDialog, setOpenEditDialog] = useState(false);

   // styles
   const classes = useStyles();

   const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleCloseEditDialog = () => {
      setOpenEditDialog(false);
   };

   const handleDeletePost = () => {
      post.handleRemove();
   };

   const handleEditPost = () => {
      // TODO: open edit post content dialog
      // post.handleUpdate();
      setOpenEditDialog(true);
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
                  <Typography variant="h5" component="span">
                     {postOwnerFullName}
                  </Typography>
               </Link>
            }
            subheader={moment(post.creationTime).format('LLL')}
            action={
               // Determine whether user can edit post
               loggedInUser === post.owner._id && (
                  <Box>
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

                     <Dialog
                        open={openEditDialog}
                        onClose={handleCloseEditDialog}
                     >
                        <DialogTitle>Edit post</DialogTitle>
                     </Dialog>
                  </Box>
               )
            }
         />

         <CardContent>
            <Typography>{post.content}</Typography>
         </CardContent>

         <Divider />

         <Comments id={post.id} comments={post.comments} />
      </Card>
   );
}

export default Post;
