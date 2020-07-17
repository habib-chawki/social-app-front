import React, { useState, useEffect } from 'react';

import Header from '../common/Header';
import Post from './Post';

import * as post from '../../services/post';

function Posts() {
   const [posts, setPosts] = useState([]);
   const [postInput, setPostInput] = useState('');

   // render posts when component first mounts
   useEffect(() => {
      // fetch and set posts list
      (async () => {
         const data = await post.fetchAll();
         setPosts(data);
      })();
   }, []);

   // keep track of post input change
   const handlePostInput = (event) => {
      setPostInput(event.target.value);
   };

   // handle adding new post
   const handleCreatePost = async () => {
      const { _id, owner, content, comments } = await post.create(postInput);

      // update posts list
      setPosts([{ _id, owner, content, comments }, ...posts]);
      setPostInput('');
   };

   // get post
   const handleFetchPost = async (id) => {
      const data = await post.fetch(id);
      console.log(data);
   };

   // update post
   const handleUpdatePost = (id, newContent) => {
      post.update(id, newContent);
      setPosts(
         posts.map((post) =>
            post._id !== id ? post : { ...post, content: newContent }
         )
      );
   };

   // delete post
   const handleRemovePost = (id) => {
      post.remove(id);
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
            onFetch={handleFetchPost}
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
