import React, { useState } from 'react';
import withEdit from './higher-order/withEdit';

function Comment(comment) {
   const [editComment, setEditComment] = useState(false);
   const [editedCommentInput, setEditedCommentInput] = useState(
      comment.content
   );

   // handle updating the comment
   const handleUpdateComment = () => {
      if (editComment) {
         comment.onUpdate(comment.id, editedCommentInput);
      }
      setEditComment(!editComment);
   };

   // handle deleting the comment
   const handleRemoveComment = () => {
      comment.onRemove(comment.id);
   };

   const renderCommentContent = () => {
      return editComment ? (
         <input
            type="text"
            value={editedCommentInput}
            onChange={(event) => {
               setEditedCommentInput(event.target.value);
            }}
         />
      ) : (
         <p>{comment.content}</p>
      );
   };

   return (
      <li key={comment.id}>
         <h4>{comment.owner}</h4>
         {renderCommentContent()}
         <button onClick={handleRemoveComment}>delete</button>
         <button onClick={handleUpdateComment}>update</button>
      </li>
   );
}

export default withEdit(Comment);
