import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CommentEditDialog({
   isDialogOpen,
   closeDialog,
   commentId,
   commentContent,
   onUpdateComment,
}) {
   // updated comment content
   const [updatedContent, setUpdatedContent] = useState(commentContent);

   // handle input change
   const handleUpdatedContentChange = (event) => {
      setUpdatedContent(event.target.value);
   };

   const handleUpdateComment = () => {
      if (updatedContent.trim() !== commentContent) {
         onUpdateComment(commentId, updatedContent);
      }

      closeDialog();
   };

   return (
      <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth>
         <DialogTitle>Edit comment</DialogTitle>
         <DialogContent>
            <TextField
               label="Updated content"
               variant="outlined"
               multiline
               rows={4}
               fullWidth
               value={updatedContent}
               onChange={handleUpdatedContentChange}
               autoFocus
            />
         </DialogContent>
         <DialogActions>
            <Button color="primary" onClick={handleUpdateComment}>
               Update
            </Button>
            <Button color="secondary" onClick={closeDialog}>
               Cancel
            </Button>
         </DialogActions>
      </Dialog>
   );
}

export default CommentEditDialog;
