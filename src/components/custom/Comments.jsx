import React, { useState } from 'react';
import Comment from './Comment';

import * as commentService from '../../services/comment';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import RefreshIcon from '@material-ui/icons/Refresh';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

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

   const handleCreateComment = (event) => {
      // add comment when either the enter key or the comment button are pressed
      if (commentInput.trim()) {
         commentService
            .createComment(post.id, commentInput)
            .then((comment) => {
               // update comments list (push new comment)
               setComments([...comments, comment]);
               setCommentInput('');
            })
            .catch((err) => console.log('Could not create comment ' + err));
      }
   };

   const handleUpdateComment = (id, newContent) => {
      // invoke backend service, update comment
      commentService
         .updateComment(post.id, id, newContent)
         .then(() => {
            // update list of comments
            setComments(
               comments.map((comment) =>
                  comment._id !== id
                     ? comment
                     : { ...comment, content: newContent }
               )
            );
         })
         .catch((err) => console.log('Could not update comment ' + err));
   };

   const handleRemoveComment = (commentId) => {
      commentService
         .removeComment(post.id, commentId)
         .then(() => {
            setComments(
               comments.filter((comment) => comment._id !== commentId)
            );
         })
         .catch((err) => console.log('Could not remove comment ' + err));
   };

   // render list of comments
   const renderComments = () => {
      return (
         <List subheader={<ListSubheader>Comments</ListSubheader>} inset>
            {comments.map(({ _id, owner, content, createdAt }) => (
               <Comment
                  key={_id}
                  id={_id}
                  owner={owner}
                  content={content}
                  creationTime={createdAt}
                  onRemove={handleRemoveComment}
                  onUpdate={handleUpdateComment}
               />
            ))}
         </List>
      );
   };

   // load more comments
   const loadMoreComments = () => {
      let { limit, skip } = pagination;

      // skip already loaded comments
      skip += limit;

      // fetch next batch of comments
      commentService
         .fetchComments({
            postId: post.id,
            limit,
            skip,
         })
         .then((data) => {
            // update pagination params
            setPagination({ limit, skip });

            // disable load more button when no more comments are available
            if (data.length === 0) {
               setLoadMore(false);
            }

            //update list of comments
            setComments([...comments, ...data]);
         })
         .catch((err) => console.log('Could not load more comments ' + err));
   };

   return (
      <div>
         {renderComments()}

         {loadMore && (
            <Button
               onClick={loadMoreComments}
               size="small"
               startIcon={<RefreshIcon />}
            >
               Load more comments
            </Button>
         )}
         <TextField
            name="comment-field"
            value={commentInput}
            onChange={handleCommentInput}
            fullWidth
            inputProps={{
               maxLength: 400,
            }}
         />
         <Button
            variant="contained"
            color="primary"
            name="comment-button"
            onClick={handleCreateComment}
            startIcon={<InsertCommentIcon />}
         >
            comment
         </Button>
      </div>
   );
}

export default Comments;
