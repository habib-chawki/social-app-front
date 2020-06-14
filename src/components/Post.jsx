import React, { useState } from 'react';

import { createComment } from '../services/comment';
import { deletePost } from '../services/post';

function Post({ postId, owner, content, commentsList }) {
   const [comments, setComments] = useState(commentsList); // list of comments
   const [commentInput, setCommentInput] = useState(''); // comment input field content

   // handle adding new comment
   const addComment = async () => {
      // destructure data object
      const { _id, owner, comment } = await createComment(postId, commentInput);

      // update comments list (push new comment)
      setComments([...comments, { _id, owner, comment }]);
      setCommentInput('');
   };

   // handle comment input change
   const handleCommentInput = (event) => {
      setCommentInput(event.target.value);
   };

   return (
      // a post is defined with an id, owner, content and a list of comments
      <div>
         <h2>{owner}</h2>
         <p>{content}</p>
         <button onClick={() => deletePost(postId)}>delete</button>
         <input
            type="text"
            value={commentInput}
            onChange={handleCommentInput}
         />
         <button onClick={addComment}>comment</button>
         {/* render comments as an unordered list*/}
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
