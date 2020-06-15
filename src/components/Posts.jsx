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

   // handle delete post
   const handleDeletePost = (postId) => {
      deletePost(postId);
      setPosts(posts.filter((post) => post._id !== postId));
   };

   // handle post update
   const handleUpdatePost = (postId, postContent) => {
      updatePost(postId, postContent);
   };

   return (
      <div>
         <Header />
         <input type="text" value={postInput} onChange={handlePostInput} />
         <button onClick={addPost}>Add post</button>
         {posts.map((post) => (
            <Post
               key={post._id}
               postId={post._id}
               owner={post.owner}
               content={post.content}
               commentsList={post.comments}
               handleDeletePost={handleDeletePost}
               handleUpdatePost={handleUpdatePost}
            />
         ))}
      </div>
   );
}

export default Posts;
