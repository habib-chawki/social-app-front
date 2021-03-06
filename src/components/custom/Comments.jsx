import React, { useState } from 'react';
import Comment from './Comment';

import * as commentService from '../../services/comment';

// set pagination parameters
const LIMIT = 5,
   SKIP = 0;

function Comments(post) {
   const [comments, setComments] = useState(post.comments || []);
   const [commentInput, setCommentInput] = useState('');

   const [pagination, setPagination] = useState({ limit: LIMIT, skip: SKIP });
   const [loadMore, setLoadMore] = useState(comments.length !== 0);

   // keep track of comment input change
   const handleCommentInput = (event) => {
      setCommentInput(event.target.value);
   };

   // add new comment
   const handleCreateComment = async () => {
      const { _id, owner, content } = await commentService.createComment(
         post.id,
         commentInput
      );

      // update comments list (push new comment)
      setComments([...comments, { _id, owner, content }]);
      setCommentInput('');
   };

   // handle update comment
   const handleUpdateComment = async (id, newContent) => {
      try {
         // call update comment service
         await commentService.updateComment(post.id, id, newContent);

         // update list of comments
         setComments(
            comments.map((comment) =>
               comment._id !== id
                  ? comment
                  : { ...comment, content: newContent }
            )
         );
      } catch (e) {
         console.log(e.message);
      }
   };

   // handle delete comment
   const handleRemoveComment = (commentId) => {
      commentService.removeComment(post.id, commentId);
      setComments(comments.filter((comment) => comment._id !== commentId));
   };

   // render list of comments
   const renderComments = () => {
      return (
         <ul>
            {comments.map(({ _id, owner, content }) => (
               <Comment
                  key={_id}
                  id={_id}
                  owner={owner}
                  content={content}
                  onRemove={handleRemoveComment}
                  onUpdate={handleUpdateComment}
               />
            ))}
         </ul>
      );
   };

   // load more comments
   const loadMoreComments = async () => {
      let { limit, skip } = pagination;

      // skip already loaded comments
      skip += limit;

      // fetch next batch of comments
      const data = await commentService.fetchComments({
         postId: post.id,
         limit,
         skip,
      });

      // update pagination params
      setPagination({ limit, skip });

      // disable load more button when no more comments are available
      if (data.length === 0) {
         setLoadMore(false);
      }

      //update list of comments
      setComments([...comments, ...data]);
   };

   return (
      <div>
         <input value={commentInput} onChange={handleCommentInput} />
         <button onClick={handleCreateComment}>comment</button>
         {renderComments()}
         {loadMore && (
            <button onClick={loadMoreComments}>Load more comments</button>
         )}
      </div>
   );
}

export default Comments;
