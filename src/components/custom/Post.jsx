import React from 'react';

import Comments from './Comments';
import withEdit from '../higher-order/withEdit';

function Post(post) {
   // delete post
   const handleRemovePost = () => {
      post.onRemove(post.id);
   };

   return (
      <div>
         <h2>{post.owner}</h2>

         {post.renderContent()}

         <button onClick={handleRemovePost}>delete</button>
         <button onClick={() => post.handleUpdate()}>update</button>

         <Comments id={post.id} comments={post.comments} />
      </div>
   );
}

export default withEdit(Post);
