import React from 'react';

function Comment({ onUpdateComment, onDeleteComment, ...comment }) {
   // handle deleting the comment
   const handleDeleteComment = () => {
      onDeleteComment(comment.id);
   };

   // handle updating the comment
   const handleUpdateComment = () => {
      onUpdateComment(comment.id);
   };

   return (
      <li key={comment.id}>
         {comment.owner}: {comment.content}
         <button onClick={handleDeleteComment}>delete</button>
         <button onClick={handleUpdateComment}>update</button>
      </li>
   );
}

export default Comment;
