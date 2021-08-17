import React, { useState } from 'react';

import PostEditDialog from './PostEditDialog';
import PostActionsMenu from './PostActionsMenu';

import Box from '@material-ui/core/Box';

function PostActions() {
   return (
      <Box>
         <PostActionsMenu
            onMenuClick={handleMenuClick}
            menuAnchorElement={anchorEl}
            onEditAction={handleEditMenuAction}
            onDeletePost={handleDeletePost}
            closeMenu={handleCloseActionsMenu}
         />

         <PostEditDialog
            postId={post.id}
            postContent={post.content}
            isDialogOpen={openEditDialog}
            closeDialog={handleCloseEditDialog}
            onUpdatePost={post.onUpdate}
         />
      </Box>
   );
}

export default PostActions;
