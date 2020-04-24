import React, { useState } from 'react';
import Post from './Post';

function Posts() {
   const [posts, setPosts] = useState([]); // list of posts
   const [content, setContent] = useState(''); // post content
   const [comments, setComments] = useState([]); // list of comments

   // handle adding new post
   const addPost = () => {
      setPosts([...posts, { owner: 'me', content }]);
   };

   // handle adding new comment
   const addComment = () => {
      setComments([...comments, { content: 'new comment' }]);
      console.log(comments);
   };

   // handle post content
   const handleChange = (event) => {
      setContent(event.target.value);
   };

   return (
      <div>
         <input type="text" value={content} onChange={handleChange} />
         <button onClick={addPost}>Add post</button>
         {posts.map(({ owner, content }, index) => (
            <Post
               key={index}
               owner={owner}
               content={content}
               addComment={addComment}
            />
         ))}
      </div>
   );
}

export default Posts;
