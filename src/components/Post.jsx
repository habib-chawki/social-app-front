import React, { useState } from 'react';
import server from '../utils/server';

function Post({ postId, owner, content, commentsList }) {
   const [comments, setComments] = useState(commentsList); // list of comments
   const [commentInput, setCommentInput] = useState(''); // comment input field content

   // handle adding new comment
   const addComment = async () => {
      // retrieve auth token from localStorage
      const token = 'Bearer ' + localStorage.getItem('Token');

      // send post request to add the new comment
      try {
         // send postId and comment content with auth token
         const response = await server({
            url: '/comment',
            method: 'post',
            data: { postId, comment: commentInput },
            headers: { authorization: token },
         });

         // destructure data object
         const { _id, owner, comment } = response.data;

         // update comments list (push new comment)
         setComments([...comments, { _id, owner, comment }]);
         setCommentInput('');
      } catch (e) {
         console.log(e.message);
      }
   };

   // handle comment input change
   const handleCommentInput = (event) => {
      setCommentInput(event.target.value);
   };

   return (
      // a post is defined with an owner, content and a list of comments
      <div>
         <h2>{owner}</h2>
         <p>{content}</p>
         <input
            type="text"
            value={commentInput}
            onChange={handleCommentInput}
         />
         <button onClick={addComment}>comment</button>
         {/* in case comments list is not empty, render every post's comments as an unordered list*/}
         <ul>
            {comments.map((comment) => (
               <li key={comment._id}>
                  {comment.owner}: {comment.comment}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Post;
