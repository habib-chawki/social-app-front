import React, { useState } from 'react';

import {
   createComment,
   updateComment,
   deleteComment,
} from '../services/comment';

function Post({ onUpdatePost, onDeletePost, ...post }) {
   const [comments, setComments] = useState(post.comments);
   const [commentInput, setCommentInput] = useState('');

   const [editPost, setEditPost] = useState(false);
   const [editedPostInput, setEditedPostInput] = useState(post.content);

   // handle update post
   const handleUpdatePost = () => {
      if (editPost) {
         onUpdatePost(post.id, editedPostInput);
      }
      setEditPost(!editPost);
   };

   // handle delete post
   const handleDeletePost = () => {
      onDeletePost(post.id);
   };

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

   // render post content in a text <input> when editing or <p> otherwise
   const renderPostContent = () => {
      return editPost ? (
         <input
            type="text"
            value={editedPostInput}
            onChange={(event) => {
               setEditedPostInput(event.target.value);
            }}
         />
      ) : (
         <p>{post.content}</p>
      );
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
         <h2>{post.owner}</h2>
         {renderPostContent()}

         <button onClick={handleDeletePost}>delete</button>
         <button onClick={handleUpdatePost}>update</button>

         <input value={commentInput} onChange={handleCommentInput} />
         <button onClick={handleCreateComment}>comment</button>

         {renderComments()}
      </div>
   );
}

export default Post;
