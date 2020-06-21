import React, { useState, useEffect } from 'react';

import Header from './common/Header';
import Post from './Post';
import { getPosts, createPost, updatePost, deletePost } from '../services/post';

function Posts() {
   const [posts, setPosts] = useState([
      { _id: '', owner: '', content: '', comments: [] },
   ]);
   const [postInput, setPostInput] = useState('');

   // render posts list when component first mounts
   useEffect(() => {
      const fetchPosts = async () => {
         // fetch and set posts list
         const data = await getPosts();
         setPosts(data);
      };

      fetchPosts();
   }, []);

   // handle adding new post
   const addPost = async () => {
      const { _id, owner, content, comments } = await createPost(postInput);

      // update posts list
      setPosts([{ _id, owner, content, comments }, ...posts]);
      setPostInput('');
   };

   // handle post input change
   const handlePostInput = (event) => {
      setPostInput(event.target.value);
   };

   // delete post
   const handleDeletePost = (postId) => {
      deletePost(postId);
      setPosts(posts.filter((post) => post._id !== postId));
   };

   // update post
   const handleUpdatePost = (postId, content) => {
      updatePost(postId, content);
      setPosts(
         posts.map((post) =>
            post._id !== postId ? post : { ...post, content }
         )
      );
   };

   return (
      <div>
         <Header />
         <input type="text" value={postInput} onChange={handlePostInput} />
         <button onClick={addPost}>Add post</button>
         {posts.map((post) => (
            <Post
               key={post._id}
               id={post._id}
               owner={post.owner}
               content={post.content}
               comments={post.comments}
               onDeletePost={handleDeletePost}
               onUpdatePost={handleUpdatePost}
            />
         ))}
      </div>
   );
}

export default Posts;
