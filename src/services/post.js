import server from '../utils/server';
import { getToken } from './token';

// get the list of posts
async function getPosts() {
   try {
      const response = await server({
         url: '/post/all',
         method: 'get',
         headers: { authorization: getToken() },
      });

      // return the list of posts
      return response.data;
   } catch (e) {
      console.log('Unable to fetch list of posts: ' + e.message);
   }
}

// create a new post
async function createPost(content) {
   try {
      // make api request to persist post in db
      const response = await server({
         url: '/post',
         method: 'post',
         data: { content },
         headers: { authorization: getToken() },
      });

      // return newly created post
      return response.data;
   } catch (e) {
      console.log('Unable to add post: ' + e.message);
   }
}

export { getPosts, createPost };
