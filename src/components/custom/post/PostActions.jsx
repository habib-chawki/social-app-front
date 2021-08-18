import React, { useState } from 'react';

import PostEditDialog from './PostEditDialog';
import PostActionsMenu from './PostActionsMenu';

import Box from '@material-ui/core/Box';

function PostActions({ postId, postContent, onUpdatePost, onDeletePost }) {
   // edit post dialog
   const [openEditDialog, setOpenEditDialog] = useState(false);

   // actions menu
   const [anchorEl, setAnchorEl] = useState(null);

   // open / close edit dialog
   const handleOpenEditDialog = () => {
      setOpenEditDialog(true);
   };

   const handleCloseEditDialog = () => {
      setOpenEditDialog(false);
   };

   // actions menu
   const handleCloseActionsMenu = () => {
      setAnchorEl(null);
   };

   const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleEditMenuAction = () => {
      // open edit dialog and close actions menu
      handleOpenEditDialog();
      handleCloseActionsMenu();
   };

   return (
      <Box>
         <PostActionsMenu
            postId={postId}
            onMenuClick={handleMenuClick}
            menuAnchorElement={anchorEl}
            onEditAction={handleEditMenuAction}
            onDeletePost={onDeletePost}
            closeMenu={handleCloseActionsMenu}
         />

         <PostEditDialog
            postId={postId}
            postContent={postContent}
            isDialogOpen={openEditDialog}
            closeDialog={handleCloseEditDialog}
            onUpdatePost={onUpdatePost}
         />
      </Box>
   );
}

export default PostActions;
