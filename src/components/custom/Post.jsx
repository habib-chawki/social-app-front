import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import moment from 'moment';

import PostEditDialog from './PostEditDialog';

import Comments from './Comments';
import UserContext from '../../context/user-context';

import {
   Card,
   CardContent,
   CardHeader,
   Avatar,
   Divider,
   IconButton,
} from '@material-ui/core';

import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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

   // edit post dialog
   const [openEditDialog, setOpenEditDialog] = useState(false);

   // actions menu
   const [anchorEl, setAnchorEl] = useState(null);

   // styles
   const classes = useStyles();

   const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   // open / close edit dialog
   const handleOpenEditDialog = () => {
      setOpenEditDialog(true);
   };

   const handleCloseEditDialog = () => {
      setOpenEditDialog(false);
   };

   const handleDeletePost = () => {
      // remove post by id
      post.onRemove(post.id);
   };

   const handleEditMenuAction = () => {
      // open edit dialog and close actions menu
      handleOpenEditDialog();
      handleCloseActionsMenu();
   };

   const handleCloseActionsMenu = () => {
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

                     <PostEditDialog
                        postId={post.id}
                        postContent={post.content}
                        isDialogOpen={openEditDialog}
                        closeDialog={handleCloseEditDialog}
                        onUpdatePost={post.onUpdate}
                     />
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
