import React, { useState } from 'react';
import Comments from './Comments';

function Post({ onUpdatePost, onDeletePost, ...post }) {
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

   return (
      <div>
         <h2>{post.owner}</h2>
         {renderPostContent()}

         <button onClick={handleDeletePost}>delete</button>
         <button onClick={handleUpdatePost}>update</button>

         <Comments id={post.id} comments={post.comments} />
      </div>
   );
}

export default Post;
