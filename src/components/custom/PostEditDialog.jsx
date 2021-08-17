import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function PostEditDialog() {
   return (
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog} fullWidth>
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
            <Button color="secondary" onClick={handleCloseEditDialog}>
               Cancel
            </Button>
         </DialogActions>
      </Dialog>
   );
}

export default PostEditDialog;
