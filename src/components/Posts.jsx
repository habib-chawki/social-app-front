import React, { useState, useEffect } from 'react';
import Post from './Post';
import server from '../utils/server';

function Posts() {
   const [posts, setPosts] = useState([]); // list of posts
   const [postContent, setPostContent] = useState(''); // post content

   // retrieve auth token from localStorage
   const token = 'Bearer ' + localStorage.getItem('Token');

   // render posts list when component first mounts
   useEffect(() => {
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
            console.log(response.data);
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
            data: { content: postContent },
            headers: { authorization: token },
         });

         // destructure data object
         const { _id, owner, content } = response.data;

         // update posts list
         setPosts([{ _id, owner, content }, ...posts]);
         setPostContent('');
      } catch (e) {
         console.log('Unable to add post ' + e.message);
      }
   };

   // handle post input change
   const handlePostInput = (event) => {
      setPostContent(event.target.value);
   };

   return (
      <div>
         <input type="text" value={postContent} onChange={handlePostInput} />
         <button onClick={addPost}>Add post</button>
         {posts.map(({ _id, owner, content, comments }) => (
            <Post
               key={_id}
               id={_id}
               owner={owner}
               content={content}
               commentsList={comments}
            />
         ))}
      </div>
   );
}

export default Posts;
