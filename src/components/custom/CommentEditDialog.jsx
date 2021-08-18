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
}

export default CommentEditDialog;
