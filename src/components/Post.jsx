import React, { useState } from 'react';

import { createComment } from '../services/comment';

function Post({
   postId,
   owner,
   content,
   commentsList,
   handleUpdatePost,
   handleDeletePost,
}) {
   const [comments, setComments] = useState(commentsList); // list of comments
   const [commentInput, setCommentInput] = useState(''); // comment input field content
   const [edit, setEdit] = useState(false);
   const [newPostInput, setNewPostInput] = useState(content);

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

   const handleEditPost = () => {
      if (edit) {
         handleUpdatePost(postId, newPostInput);
      }
      setEdit(!edit);
   };

   const handleNewPostInput = (event) => {
      setNewPostInput(event.target.value);
   };

   return (
      // a post is defined with an id, owner, content and a list of comments
      <div>
         <h2>{owner}</h2>
         {edit ? (
            <input
               type="text"
               value={newPostInput}
               onChange={handleNewPostInput}
            />
         ) : (
            <p>{content}</p>
         )}
         {/* delete post upon button click */}
         <button onClick={() => handleDeletePost(postId)}>delete</button>
         <button onClick={handleEditPost}>edit</button>
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
