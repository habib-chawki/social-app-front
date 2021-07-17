import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import Comments from './Comments';
import withEdit from '../higher-order/withEdit';

import { getUser } from '../../services/storage';

import { Card, CardContent } from '@material-ui/core';

function Post(post) {
   const canEdit = useRef(getUser() === post.owner._id);

   // extract post owner full name
   const { firstName, middleName, lastName } = post.owner.profile;
   const postOwnerFullName = `${firstName} ${middleName} ${lastName}`;

   return (
      <Card>
         <Link to={`user/${post.owner._id}/profile`}>{postOwnerFullName}</Link>

         <CardContent>{post.renderContent()}</CardContent>
         {canEdit.current && (
            <button onClick={() => post.handleRemove()}>delete</button>
         )}
         {canEdit.current && (
            <button onClick={() => post.handleUpdate()}>update</button>
         )}

         <Comments id={post.id} comments={post.comments} />
      </Card>
   );
}

export default withEdit(Post);
