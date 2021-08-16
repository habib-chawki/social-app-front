import React, { useState, useEffect } from 'react';

import Header from '../common/Header';
import Post from './Post';

import * as postService from '../../services/post';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';

import PostAddIcon from '@material-ui/icons/PostAdd';
import RefreshIcon from '@material-ui/icons/Refresh';

// set pagination params
const LIMIT = 10,
   SKIP = 0;

function Posts() {
   const [posts, setPosts] = useState([]);
   const [postInput, setPostInput] = useState('');

   const [pagination, setPagination] = useState({ limit: LIMIT, skip: SKIP });
   const [loadMore, setLoadMore] = useState(posts.length !== 0);

   // render posts list when component first mounts
   useEffect(() => {
      // invoke backend service to fetch list of posts, then update UI
      postService
         .fetchPosts({ limit: LIMIT, skip: SKIP })
         .then((posts) => setPosts(posts))
         .catch((err) => console.log('Could not fetch posts ' + err));
   }, []);

   // keep track of post input change
   const handlePostInput = (event) => {
      setPostInput(event.target.value);
   };

   const handleCreatePost = () => {
      // invoke backend service to create post when the content is not empty
      if (postInput.trim() !== '') {
         postService
            .createPost(postInput)
            .then((post) => {
               // update posts list and UI
               setPosts([post, ...posts]);
               setPostInput('');
            })
            .catch((err) => console.log('Could not create post ' + err));
      }
   };

   const handleUpdatePost = (id, newContent) => {
      // invoke backend service to update post content
      postService
         .updatePost(id, newContent)
         .then(() => {
            // update UI
            setPosts(
               posts.map((post) =>
                  post._id !== id ? post : { ...post, content: newContent }
               )
            );
         })
         .catch((err) => console.log('Could not update post ' + err));
   };

   const handleRemovePost = (id) => {
      // invoke backend service to delete post by id
      postService
         .removePost(id)
         .then(() => {
            // update UI
            setPosts(posts.filter((post) => post._id !== id));
         })
         .catch((err) => {
            console.log('Could not remove post ' + err);
         });
   };

   // render list of posts
   const renderPosts = () => {
      return posts.map((post) => (
         <Post
            key={post._id}
            id={post._id}
            owner={post.owner}
            content={post.content}
            comments={post.comments}
            creationTime={post.createdAt}
            updateTime={post.updatedAt}
            onRemove={handleRemovePost}
            onUpdate={handleUpdatePost}
         />
      ));
   };

   // load more posts
   const loadMorePosts = async () => {
      let { limit, skip } = pagination;

      // skip the already loaded posts
      skip += limit;

      // fetch the next batch of posts
      postService
         .fetchPosts({ limit, skip })
         .then((data) => {
            // update pagination params
            setPagination({ limit, skip });

            // disable load more button when no more posts are available
            if (data.length === 0) {
               setLoadMore(false);
            }

            // update list of posts
            setPosts([...posts, ...data]);
         })
         .catch((err) => console.log('Could not load more posts'));
   };

   return (
      <Box>
         <CssBaseline />
         <Header />

         <Box margin={4}>
            <TextField
               variant="outlined"
               color="secondary"
               multiline
               rows={6}
               placeholder="What's on your mind..."
               fullWidth
               value={postInput}
               onChange={handlePostInput}
            />

            <Box marginTop={1}>
               <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PostAddIcon />}
                  disableElevation
                  onClick={handleCreatePost}
                  fullWidth
                  size="large"
                  disabled={postInput.trim() === ''}
               >
                  post
               </Button>
            </Box>
         </Box>

         {renderPosts()}
         {loadMore && (
            <Button
               onClick={loadMorePosts}
               size="small"
               startIcon={<RefreshIcon />}
            >
               Load more posts
            </Button>
         )}
      </Box>
   );
}

export default Posts;
