import React, { useState, useEffect } from 'react';

import Post from './Post';
import server from '../utils/server';
import { getToken } from '../services/token';
import { getPosts } from '../servives/post';

function Posts() {
   const [posts, setPosts] = useState([
      { _id: '', owner: '', content: '', comments: [] },
   ]); // list of posts
   const [postInput, setPostInput] = useState(''); // post input field content

   // render posts list when component first mounts
   useEffect(() => {
      // fetch current user's posts list
      const fetchPosts = async () => {
         const data = await getPosts();

         //populate posts list
         setPosts(data);
         console.log(data);
      };

      fetchPosts();
   }, []);

   // handle adding new post
   const addPost = async () => {
      try {
         // make api request to persist post in db
         const response = await server({
            url: '/post',
            method: 'post',
            data: { content: postInput },
            headers: { authorization: getToken() },
         });

         // destructure data object
         const { _id, owner, content, comments } = response.data;

         // update posts list
         setPosts([{ _id, owner, content, comments }, ...posts]);
         setPostInput('');
      } catch (e) {
         console.log('Unable to add post ' + e.message);
      }
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
