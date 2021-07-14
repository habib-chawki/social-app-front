import React, { useRef } from 'react';

import withEdit from '../higher-order/withEdit';

import { getUser } from '../../services/storage';

function Comment(comment) {
   const canEdit = useRef(getUser() === comment.owner);

   return (
      <li key={comment.id}>
         <h4>{comment.owner}</h4>

         {comment.renderContent()}

         {canEdit.current && (
            <button onClick={() => comment.handleRemove()}>delete</button>
         )}
         {canEdit.current && (
            <button onClick={() => comment.handleUpdate()}>update</button>
         )}
      </li>
   );
}

export default withEdit(Comment);
