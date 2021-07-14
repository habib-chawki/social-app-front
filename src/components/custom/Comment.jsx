import React from 'react';

import withEdit from '../higher-order/withEdit';

import { getUser } from '../../services/storage';

function Comment(comment) {
   return (
      <li key={comment.id}>
         <h4>{comment.owner}</h4>

         {comment.renderContent()}

         {getUser() === comment.owner && (
            <button onClick={() => comment.handleRemove()}>delete</button>
         )}
         <button onClick={() => comment.handleUpdate()}>update</button>
      </li>
   );
}

export default withEdit(Comment);
