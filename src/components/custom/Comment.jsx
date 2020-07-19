import React from 'react';

import withEdit from '../higher-order/withEdit';

function Comment(comment) {
   return (
      <li key={comment.id}>
         <h4>{comment.owner}</h4>

         {comment.renderContent()}

         <button onClick={() => comment.handleRemove()}>delete</button>
         <button onClick={() => comment.handleUpdate()}>update</button>
      </li>
   );
}

export default withEdit(Comment);
