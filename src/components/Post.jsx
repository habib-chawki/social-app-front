import React, { useState } from 'react';

function Post({ owner, content }) {
   const [comments, setComments] = useState([]);

   // handle adding new comment
   const addComment = () => {
      setComments([...comments, { content: 'new comment' }]);
   };

   return (
      // a post is defined with an owner and a content
      <div>
         <h2>{owner}</h2>
         <p>{content}</p>
         <input type="text" />
         <button onClick={addComment}>comment</button>
         <ul>
            {comments.map((comment, index) => (
               <li key={index}>{comment.content}</li>
            ))}
         </ul>
      </div>
   );
}

export default Post;
