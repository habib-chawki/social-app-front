import React, { useState } from 'react';

function Post({ owner, content }) {
   const [comments, setComments] = useState([]); // list of comments
   const [comment, setComment] = useState(''); // comment content

   // handle adding new comment
   const addComment = () => {
      setComments([{ content: comment }, ...comments]);
      setComment('');
   };

   // handle comment input change
   const handleCommentInput = (event) => {
      setComment(event.target.value);
   };

   return (
      // a post is defined with an owner, content and a list of comments
      <div>
         <h2>{owner}</h2>
         <p>{content}</p>
         <input type="text" value={comment} onChange={handleCommentInput} />
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
