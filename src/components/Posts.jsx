import React, { useState } from 'react';
import Post from './Post';

function Posts() {
   const [posts, setPosts] = useState([]);

   const addPost = () => {
      setPosts([...posts, { owner: 'me', content: 'This is a new post' }]);
   };

   return (
      <div>
         <button onClick={addPost}>Add post</button>
         {posts.map(({ owner, content }, index) => (
            <Post key={index} owner={owner} content={content} />
         ))}
      </div>
   );
}

export default Posts;
