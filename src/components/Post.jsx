import React, { useState } from 'react';
import server from '../utils/server';

function Post({ id, owner, content }) {
   const [comments, setComments] = useState([]); // list of comments
   const [comment, setComment] = useState(''); // comment content

   // handle adding new comment
   const addComment = async () => {
      // retrieve auth token from localStorage
      const token = 'Bearer ' + localStorage.getItem('Token');

      // send post request to add comment to post's comments list
      try {
         const response = await server({
            url: '/comment',
            method: 'post',
            data: { postId: id, comment },
            headers: { authorization: token },
         });

         console.log(response.data);

         setComments([{ content: comment }, ...comments]);
         setComment('');
      } catch (e) {
         console.log(e.message);
      }
   };

   // handle comment input change
   const handleCommentInput = (event) => {
      setComment(event.target.value);
      console.log(id);
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
