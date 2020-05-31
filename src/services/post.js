import { server } from '../utils/server';
import { getToken } from './token';

// get the list of posts
async function getPosts() {
   try {
      // return the posts list
      return await server({
         url: '/post/all',
         method: 'get',
         headers: { authorization: getToken() },
      });
   } catch (e) {
      console.log('Unable to fetch posts list.' + e.message);
   }
}

// create a new post
function createPost() {}

export { getPosts, createPost };
