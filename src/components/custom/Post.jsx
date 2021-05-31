import React from 'react';
import { Link } from 'react-router-dom';

import Comments from './Comments';
import withEdit from '../higher-order/withEdit';

function Post(post) {
   return (
      <div>
         <Link to={`profile/${post.owner}`}>{post.owner} </Link>

         {post.renderContent()}

         <button onClick={() => post.handleRemove()}>delete</button>
         <button onClick={() => post.handleUpdate()}>update</button>

         <Comments id={post.id} comments={post.comments} />
      </div>
   );
}

export default withEdit(Post);
