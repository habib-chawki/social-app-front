import React, { useState } from 'react';

import CommentEditDialog from './CommentEditDialog';
import CommentActionsMenu from './CommentActionsMenu';

import Box from '@material-ui/core/Box';

function CommentActions({
   commentId,
   commentContent,
   onUpdateComment,
   onDeleteComment,
}) {
   // edit comment dialog
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
         <CommentActionsMenu
            onMenuClick={handleMenuClick}
            menuAnchorElement={anchorEl}
            onEditAction={handleEditMenuAction}
            commentId={commentId}
            onDeleteComment={onDeleteComment}
            closeMenu={handleCloseActionsMenu}
         />

         <CommentEditDialog
            commentId={commentId}
            commentContent={commentContent}
            isDialogOpen={openEditDialog}
            closeDialog={handleCloseEditDialog}
            onUpdateComment={onUpdateComment}
         />
      </Box>
   );
}

export default CommentActions;
