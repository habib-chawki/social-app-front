import React, { useState } from 'react';
import Post from './Post';

function Posts() {
   const [posts, setPosts] = useState([]); // list of posts
   const [content, setContent] = useState(''); // post content

   // handle adding new post
   const addPost = () => {
      setPosts([{ owner: 'me', content }, ...posts]);
      setContent('');
   };

   // handle post input change
   const handleChange = (event) => {
      setContent(event.target.value);
   };

   return (
      <div>
         <input type="text" value={content} onChange={handleChange} />
         <button onClick={addPost}>Add post</button>
         {posts.map(({ owner, content }, index) => (
            <Post key={index} owner={owner} content={content} />
         ))}
      </div>
   );
}

export default Posts;
