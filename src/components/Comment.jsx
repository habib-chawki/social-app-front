import React, { useState } from 'react';

function Comment({ onUpdateComment, onDeleteComment, ...comment }) {
   const [editComment, setEditComment] = useState(false);
   const [editedCommentInput, setEditedCommentInput] = useState(
      comment.content
   );

   // handle updating the comment
   const handleUpdateComment = () => {
      if (editComment) {
         onUpdateComment(comment.id, editedCommentInput);
      }
      setEditComment(!editComment);
   };

   // handle deleting the comment
   const handleDeleteComment = () => {
      onDeleteComment(comment.id);
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
         <button onClick={handleDeleteComment}>delete</button>
         <button onClick={handleUpdateComment}>update</button>
      </li>
   );
}

export default Comment;
