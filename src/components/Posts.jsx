import React, { useState, useEffect } from 'react';
import Post from './Post';
import server from '../utils/server';

function Posts() {
   const [posts, setPosts] = useState([]); // list of posts
   const [content, setContent] = useState(''); // post content

   // retrieve auth token from localStorage
   const token = 'Bearer ' + localStorage.getItem('Token');

   // render posts list when component first mounts
   useEffect(() => {
      console.log('useEffect triggered ...');
      // fetch current user's posts list
      const fetchPosts = async () => {
         try {
            const response = await server({
               url: '/post/all',
               method: 'get',
               headers: { authorization: token },
            });

            //populate posts list
            setPosts(response.data);
         } catch (e) {
            console.log('Unable to fetch posts list.' + e.message);
         }
      };

      fetchPosts();
   }, [token]);

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
         console.log(response.data);
         setPosts([
            {
               _id: response.data._id,
               owner: response.data.owner,
               content: response.data.content,
            },
            ...posts,
         ]);
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
         {posts.map(({ _id, owner, content }) => (
            <Post key={_id} owner={owner} content={content} />
         ))}
      </div>
   );
}

export default Posts;
