import React, { useState } from 'react';
import Post from './Post';
import server from '../utils/server';

function Posts() {
   const [posts, setPosts] = useState([]); // list of posts
   const [content, setContent] = useState(''); // post content

   // handle adding new post
   const addPost = async () => {
      try {
         // retrieve auth token from localStorage
         const token = 'Bearer ' + localStorage.getItem('Token');

         // send post request with authotization header
         const response = await server({
            url: '/post',
            method: 'post',
            data: { content },
            headers: { authorization: token },
         });

         // update posts list
         setPosts([{ id: response.data.id, owner: 'me', content }, ...posts]);
         setContent('');

         console.log(response);
      } catch (e) {
         console.log(e.message);
      }
   };

   // handle post input change
   const handleChange = (event) => {
      setContent(event.target.value);
   };

   return (
      <div>
         <input type="text" value={content} onChange={handleChange} />
         <button onClick={addPost}>Add post</button>
         {posts.map(({ id, owner, content }) => (
            <Post key={id} owner={owner} content={content} />
         ))}
      </div>
   );
}

export default Posts;
