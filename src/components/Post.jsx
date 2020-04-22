import React from 'react';

function Post({ owner, content }) {
   return (
      <div>
         <h2>{owner}</h2>
         <p>{content}</p>
      </div>
   );
}

export default Post;
