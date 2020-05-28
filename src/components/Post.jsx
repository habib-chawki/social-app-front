import React, { useState } from 'react';
import server from '../utils/server';

function Post({ id, owner, content, commentsList }) {
   const [comments, setComments] = useState(commentsList); // list of comments
   const [comment, setComment] = useState(''); // comment content

   // handle adding new comment
   const addComment = async () => {
      // retrieve auth token from localStorage
      const token = 'Bearer ' + localStorage.getItem('Token');

      // send post request to add the new comment
      try {
         // send postId and comment content with auth token
         await server({
            url: '/comment',
            method: 'post',
            data: { postId: id, comment },
            headers: { authorization: token },
         });

         // update comments list (push new comment)
         setComments([...comments, { content: comment }]);
         setComment('');
      } catch (e) {
         console.log(e.message);
      }
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
         {/* render every post's comments as an unordered list */}
         <ul>
            {comments.map((comment, index) => (
               <li key={index}>
                  {comment.owner}: {comment.comment}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Post;
