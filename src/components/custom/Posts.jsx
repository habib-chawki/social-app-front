import React, { useState, useEffect } from 'react';

import Header from '../common/Header';
import Post from './Post';

import * as postService from '../../services/post';

import { TextField, Button } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

// set pagination params
const LIMIT = 10,
   SKIP = 0;

function Posts() {
   const [posts, setPosts] = useState([]);
   const [postInput, setPostInput] = useState('');

   const [pagination, setPagination] = useState({ limit: LIMIT, skip: SKIP });
   const [loadMore, setLoadMore] = useState(posts !== 0);

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

   // handle adding new post
   const handleCreatePost = async () => {
      // invoke backend service to create post
      const post = await postService.createPost(postInput);

      // update posts list and UI
      setPosts([post, ...posts]);
      setPostInput('');
   };

   // update post content
   const handleUpdatePost = async (id, newContent) => {
      try {
         // call backend service to update post
         await postService.updatePost(id, newContent);

         // update UI
         setPosts(
            posts.map((post) =>
               post._id !== id ? post : { ...post, content: newContent }
            )
         );
      } catch (e) {
         console.log(e.message);
      }
   };

   // delete post
   const handleRemovePost = (id) => {
      // call backend service to delete post
      postService.removePost(id);

      // update UI
      setPosts(posts.filter((post) => post._id !== id));
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
      const data = await postService.fetchPosts({ limit, skip });

      // update pagination params
      setPagination({ limit, skip });

      // disable load more button when no more posts are available
      if (data.length === 0) {
         setLoadMore(false);
      }
      // update list of posts
      setPosts([...posts, ...data]);
   };

   return (
      <div>
         <Header />
         <TextField
            variant="outlined"
            color="secondary"
            multiline
            rows={5}
            placeholder="What's on your mind..."
            fullWidth
            value={postInput}
            onChange={handlePostInput}
         />
         <Button
            variant="contained"
            color="secondary"
            startIcon={<DoneIcon />}
            disableElevation
            onClick={handleCreatePost}
         >
            post
         </Button>
         {renderPosts()}
         {loadMore && <button onClick={loadMorePosts}>Load more posts</button>}
      </div>
   );
}

export default Posts;
