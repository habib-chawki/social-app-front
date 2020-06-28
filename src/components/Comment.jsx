import React from 'react';

function Comment({ onUpdateComment, onDeleteComment, ...comment }) {
   // handle deleting the comment
   const handleDeleteComment = () => {
      comment.onDeleteComment(comment.id);
   };

   // handle updating the comment
   const handleUpdateComment = () => {
      comment.onUpdateComment(comment.id);
   };

   return (
      <li key={comment._id}>
         {comment.owner}: {comment.content}
         <button onClick={() => handleDeleteComment(comment._id)}>
            delete
         </button>
         <button onClick={() => handleUpdateComment(comment._id)}>
            update
         </button>
      </li>
   );
}

export default Comment;
