import React from 'react';
import withEdit from '../higher-order/withEdit';

import Comments from './Comments';

function Post(post) {
   const handleFetchPost = (event) => {
      if (event.target.getAttribute('name') === 'post') {
         post.onFetch(post.id);
      }
   };

   // handle delete post
   const handleRemovePost = () => {
      post.onRemove(post.id);
   };

   return (
      <div name="post" onClick={handleFetchPost}>
         <h2>{post.owner}</h2>

         {post.renderContent()}

         <button onClick={handleRemovePost}>delete</button>
         <button onClick={() => post.handleUpdate()}>update</button>

         <Comments id={post.id} comments={post.comments} />
      </div>
   );
}

export default withEdit(Post);
