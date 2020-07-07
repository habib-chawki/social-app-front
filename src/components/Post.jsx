import React, { useState } from 'react';
import Comments from './Comments';

function Post(post) {
   const [editPost, setEditPost] = useState(false);
   const [editedPostInput, setEditedPostInput] = useState(post.content);

   const handleFetchPost = (event) => {
      if (event.target.getAttribute('name') === 'post') {
         post.onFetch(post.id);
      }
   };

   // handle update post
   const handleUpdatePost = () => {
      if (editPost) {
         post.onUpdate(post.id, editedPostInput);
      }
      setEditPost(!editPost);
   };

   // handle delete post
   const handleRemovePost = () => {
      post.onRemove(post.id);
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
      <div name="post" onClick={handleFetchPost}>
         <h2>{post.owner}</h2>
         {renderPostContent()}

         <button onClick={handleRemovePost}>delete</button>
         <button onClick={handleUpdatePost}>update</button>

         <Comments id={post.id} comments={post.comments} />
      </div>
   );
}

export default Post;
