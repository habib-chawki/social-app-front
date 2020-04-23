import React, { useState } from 'react';
import Post from './Post';

function Posts() {
   const [posts, setPosts] = useState([]);
   const [postContent, setPostContent] = useState('');

   // handle adding new post
   const addPost = () => {
      setPosts([...posts, { owner: 'me', content: 'This is a new post' }]);
   };

   // handle post content
   const handleChange = (event) => {
      setPostContent(event.target.value);
      console.log('postContent: ', postContent);
   };

   return (
      <div>
         <input type="text" value={postContent} onChange={handleChange} />
         <button onClick={addPost}>Add post</button>
         {posts.map(({ owner, content }, index) => (
            <Post key={index} owner={owner} content={content} />
         ))}
      </div>
   );
}

export default Posts;
