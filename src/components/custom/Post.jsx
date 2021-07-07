import React from 'react';
import { Link } from 'react-router-dom';

import Comments from './Comments';
import withEdit from '../higher-order/withEdit';

function Post(post) {
   // extract post owner full name
   const { firstName, middleName, lastName } = post.owner.profile;
   const postOwnerFullName = `${firstName} ${middleName} ${lastName}`;

   return (
      <div>
         <Link to={`user/${post.owner._id}/profile`}>{postOwnerFullName}</Link>

         {post.renderContent()}

         <button onClick={() => post.handleRemove()}>delete</button>
         <button onClick={() => post.handleUpdate()}>update</button>

         <Comments id={post.id} comments={post.comments} />
      </div>
   );
}

export default withEdit(Post);
