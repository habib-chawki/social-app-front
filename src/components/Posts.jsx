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
   const [posts, setPosts] = useState([
      { _id: '', owner: '', content: '', comments: [] },
   ]);
   const [postInput, setPostInput] = useState('');

   // render posts list when component first mounts
   useEffect(() => {
      // fetch and set posts list
      (async () => {
         const data = await fetchPosts();
         setPosts(data);
      })();
   }, []);

   // handle adding new post
   const handleCreatePost = async () => {
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
   const handleDeletePost = (id) => {
      deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
   };

   // update post
   const handleUpdatePost = (id, content) => {
      updatePost(id, content);
      setPosts(
         posts.map((post) => (post._id !== id ? post : { ...post, content }))
      );
   };

   return (
      <div>
         <Header />
         <input type="text" value={postInput} onChange={handlePostInput} />
         <button onClick={handleCreatePost}>Add post</button>
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
