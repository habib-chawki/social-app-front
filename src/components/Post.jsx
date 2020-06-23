import React, { useState } from 'react';

import { createComment } from '../services/comment';

function Post({ onUpdatePost, onDeletePost, ...post }) {
   const [comments, setComments] = useState(post.comments);
   const [commentInput, setCommentInput] = useState('');

   const [editPost, setEditPost] = useState(false);
   const [editedPostInput, setEditedPostInput] = useState(post.content);

   // keep track of comment input change
   const handleCommentInput = (event) => {
      setCommentInput(event.target.value);
   };

   // add new comment
   const handleAddComment = async () => {
      const { _id, owner, comment } = await createComment(
         post.id,
         commentInput
      );

      // update comments list (push new comment)
      setComments([...comments, { _id, owner, comment }]);
      setCommentInput('');
   };

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
         <button onClick={handleUpdatePost}>edit</button>
         <input value={commentInput} onChange={handleCommentInput} />
         <button onClick={handleAddComment}>comment</button>

         {renderComments()}
      </div>
   );
}

export default Post;
