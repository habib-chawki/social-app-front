import React, { useState, useEffect } from 'react';

import Header from './common/Header';
import Post from './Post';
import {
   fetchPosts,
   createPost,
   updatePost,
   deletePost,
} from '../services/post';

function Posts() {
   const [posts, setPosts] = useState([]);
   const [postInput, setPostInput] = useState('');

   // render posts when component first mounts
   useEffect(() => {
      // fetch and set posts list
      (async () => {
         const data = await fetchPosts();
         setPosts(data);
      })();
   }, []);

   // keep track of post input change
   const handlePostInput = (event) => {
      setPostInput(event.target.value);
   };

   // handle adding new post
   const handleCreatePost = async () => {
      const { _id, owner, content, comments } = await createPost(postInput);

      // update posts list
      setPosts([{ _id, owner, content, comments }, ...posts]);
      setPostInput('');
   };

   // update post
   const handleUpdatePost = (id, newContent) => {
      updatePost(id, newContent);
      setPosts(
         posts.map((post) =>
            post._id !== id ? post : { ...post, content: newContent }
         )
      );
   };

   // delete post
   const handleDeletePost = (id) => {
      deletePost(id);
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
            onDeletePost={handleDeletePost}
            onUpdatePost={handleUpdatePost}
         />
      ));
   };

   return (
      <div>
         <Header />
         <input type="text" value={postInput} onChange={handlePostInput} />
         <button onClick={handleCreatePost}>post</button>
         {renderPosts()}
      </div>
   );
}

export default Posts;
