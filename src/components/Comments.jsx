import React, { useState } from 'react';
import Comment from './Comment';

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

   // handle update comment
   const handleUpdateComment = (id, newContent) => {
      updateComment(post.id, id, newContent);

      const index = comments.findIndex((comment) => comment._id === id);
      const newComments = [...comments];
      newComments[index].comment = newContent;

      setComments(newComments);
   };

   // handle delete comment
   const handleDeleteComment = (commentId) => {
      deleteComment(post.id, commentId);
      setComments(comments.filter((comment) => comment._id !== commentId));
   };

   // render list of comments
   const renderComments = () => {
      return (
         <ul>
            {comments.map(({ _id, owner, comment }) => (
               <Comment
                  key={_id}
                  id={_id}
                  owner={owner}
                  content={comment}
                  onDeleteComment={handleDeleteComment}
                  onUpdateComment={handleUpdateComment}
               />
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
