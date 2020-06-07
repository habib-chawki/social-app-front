import React, { useState, useEffect } from 'react';

import Post from './Post';
import { getPosts, createPost } from '../services/post';

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

   return (
      <div>
         <input type="text" value={postInput} onChange={handlePostInput} />
         <button onClick={addPost}>Add post</button>
         {posts.map(({ _id, owner, content, comments }) => (
            <Post
               key={_id}
               postId={_id}
               owner={owner}
               content={content}
               commentsList={comments}
            />
         ))}
      </div>
   );
}

export default Posts;
