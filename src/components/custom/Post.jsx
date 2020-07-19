import React from 'react';

import Comments from './Comments';
import withEdit from '../higher-order/withEdit';

function Post(post) {
   return (
      <div>
         <h2>{post.owner}</h2>

         {post.renderContent()}

         <button onClick={() => post.handleRemove()}>delete</button>
         <button onClick={() => post.handleUpdate()}>update</button>

         <Comments id={post.id} comments={post.comments} />
      </div>
   );
}

export default withEdit(Post);
