import React from 'react';
import Post from './Post';

function Posts() {
   const addPost = () => {
      console.log('post added');
   };

   return (
      <div>
         <button onClick={addPost}>Add post</button>
         <Post />
      </div>
   );
}

export default Posts;
