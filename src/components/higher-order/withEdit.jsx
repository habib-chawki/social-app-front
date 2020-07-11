import React, { useState } from 'react';

function withEdit(Component, content = '') {
   return (props) => {
      // const [editContent, setEditContent] = useState(false);
      // const [editedContent, setEditedContent] = useState(content);

      return (
         <div>
            <Component {...props} /> <p>hi commnet</p>
         </div>
      );
   };
}

export default withEdit;
