import React from 'react';

function Post({ owner, content }) {
   return (
      // a post is defined with an owner and a content
      <div>
         <h2>{owner}</h2>
         <p>{content}</p>
      </div>
   );
}

export default Post;
