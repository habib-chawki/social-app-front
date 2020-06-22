import React, { useState } from 'react';

import { createComment } from '../services/comment';

function Post({ onUpdatePost, onDeletePost, ...post }) {
   const [comments, setComments] = useState(post.comments);
   const [commentInput, setCommentInput] = useState('');

   const [editPost, setEditPost] = useState(false);
   const [editedPostInput, setEditedPostInput] = useState(post.content);

   // handle comment input change
   const handleCommentInput = (event) => {
      setCommentInput(event.target.value);
   };

   // add new comment
   const addComment = async () => {
      const { _id, owner, comment } = await createComment(
         post.id,
         commentInput
      );

      // update comments list (push new comment)
      setComments([...comments, { _id, owner, comment }]);
      setCommentInput('');
   };

   // render post content
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
      // a post is defined with an id, owner, content and a list of comments
      <div>
         <h2>{post.owner}</h2>
         {/* render post content in a <p> or <input> if post is to be edited */}
         {renderPostContent()}

         {/* delete post */}
         <button onClick={() => onDeletePost(post.id)}>delete</button>

         {/* edit post */}
         <button
            onClick={() => {
               if (editPost) {
                  onUpdatePost(post.id, editedPostInput);
               }
               setEditPost(!editPost);
            }}
         >
            edit
         </button>

         <input
            type="text"
            value={commentInput}
            onChange={handleCommentInput}
         />
         <button onClick={addComment}>comment</button>

         {/* render list of comments */}
         {renderComments()}
      </div>
   );
}

export default Post;
