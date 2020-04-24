import React from 'react';

function Post({ owner, content, addComment }) {
   return (
      // a post is defined with an owner and a content
      <div>
         <h2>{owner}</h2>
         <p>{content}</p>
         <input type="text" />
         <button onClick={addComment}>comment</button>
      </div>
   );
}

export default Post;
