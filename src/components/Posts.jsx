import React, { useState, useEffect } from 'react';
import Post from './Post';
import server from '../utils/server';

function Posts() {
   const [posts, setPosts] = useState([]); // list of posts
   const [content, setContent] = useState(''); // post content

   // retrieve auth token from localStorage
   const token = 'Bearer ' + localStorage.getItem('Token');

   // render posts list when component mounts
   useEffect(() => {
      console.log('useEffect triggered ...');
      const fetchPosts = async () => {
         try {
            const response = await server({
               url: '/post/all',
               method: 'get',
               headers: { authorization: token },
            });
            console.log('response: ', response);
         } catch (e) {
            console.log('Unable to fetch posts list.' + e.message);
         }
      };

      fetchPosts();
   }, [posts, token]);

   // handle adding new post
   const addPost = async () => {
      try {
         // make api request to persist post in db
         const response = await server({
            url: '/post',
            method: 'post',
            data: { content },
            headers: { authorization: token },
         });

         // update posts list
         setPosts([{ id: response.data.id, owner: 'me', content }, ...posts]);
         setContent('');
      } catch (e) {
         console.log(e.message);
      }
   };

   // handle post input change
   const handlePostInput = (event) => {
      setContent(event.target.value);
   };

   return (
      <div>
         <input type="text" value={content} onChange={handlePostInput} />
         <button onClick={addPost}>Add post</button>
         {posts.map(({ id, owner, content }) => (
            <Post key={id} owner={owner} content={content} />
         ))}
      </div>
   );
}

export default Posts;
