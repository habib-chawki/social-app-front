import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function PostEditDialog({
   isDialogOpen,
   closeDialog,
   postId,
   postContent,
   onUpdatePost,
}) {
   // updated post content
   const [updatedContent, setUpdatedContent] = useState(postContent);

   // handle update post content change
   const handleUpdatedContentChange = (event) => {
      setUpdatedContent(event.target.value);
   };

   const handleUpdatePost = () => {
      // update post only when content has changed
      if (updatedContent.trim() !== postContent) {
         onUpdatePost(postId, updatedContent);
      }

      closeDialog();
   };

   return (
      <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth>
         <DialogTitle>Edit post</DialogTitle>
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
            <Button color="primary" onClick={handleUpdatePost}>
               Update
            </Button>
            <Button color="secondary" onClick={closeDialog}>
               Cancel
            </Button>
         </DialogActions>
      </Dialog>
   );
}

export default PostEditDialog;
