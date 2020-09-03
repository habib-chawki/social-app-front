import React, { useState, useEffect } from 'react';

import Header from '../common/Header';
import Post from './Post';

import * as post from '../../services/post';

function Posts() {
   const [posts, setPosts] = useState([]);
   const [postInput, setPostInput] = useState('');

   // render posts list when component first mounts
   useEffect(() => {
      // call backend service to fetch list of posts, then update UI
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
      // call backend service to create post
      const { _id, owner, content, comments } = await post.create(postInput);

      // update posts list and UI
      setPosts([{ _id, owner, content, comments }, ...posts]);
      setPostInput('');
   };

   // update post content
   const handleUpdatePost = (id, newContent) => {
      // call backend service to update post
      post.update(id, newContent);

      // update UI
      setPosts(
         posts.map((post) =>
            post._id !== id ? post : { ...post, content: newContent }
         )
      );
   };

   // delete post
   const handleRemovePost = (id) => {
      // call backend service to delete post
      post.remove(id);

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
      const data = await post.fetchAll();
   };

   return (
      <div>
         <Header />
         <input type="text" value={postInput} onChange={handlePostInput} />
         <button onClick={handleCreatePost}>post</button>
         {renderPosts()}
         <button onClick={loadMorePosts}>Load more posts</button>
      </div>
   );
}

export default Posts;
