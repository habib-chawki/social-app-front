import React, { useState } from 'react';

import {
   createComment,
   updateComment,
   deleteComment,
} from '../services/comment';

function Comments(post) {
   const [comments, setComments] = useState(post.comments);
   const [commentInput, setCommentInput] = useState('');

   // keep track of comment input change
   const handleCommentInput = (event) => {
      setCommentInput(event.target.value);
   };

   // add new comment
   const handleCreateComment = async () => {
      const { _id, owner, comment } = await createComment(
         post.id,
         commentInput
      );

      // update comments list (push new comment)
      setComments([...comments, { _id, owner, comment }]);
      setCommentInput('');
   };

   // handle delete comment
   const handleDeleteComment = (postId, commentId) => {
      deleteComment(postId, commentId);
      setComments(comments.filter((comment) => comment._id !== commentId));
   };

   // handle update comment
   const handleUpdateComment = (postId, commentId) => {
      updateComment(postId, commentId);
   };

   // render list of comments
   const renderComments = () => {
      return (
         <ul>
            {comments.map((comment) => (
               <li key={comment._id}>
                  {comment.owner}: {comment.comment}
                  <button
                     onClick={() => handleDeleteComment(post.id, comment._id)}
                  >
                     delete
                  </button>
                  <button
                     onClick={() => handleUpdateComment(post.id, comment._id)}
                  >
                     update
                  </button>
               </li>
            ))}
         </ul>
      );
   };

   return (
      <div>
         <input value={commentInput} onChange={handleCommentInput} />
         <button onClick={handleCreateComment}>comment</button>
         {renderComments()}
      </div>
   );
}

export default Comments;
