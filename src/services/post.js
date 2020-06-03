import server from '../utils/server';

// get the list of posts
async function getPosts() {
   try {
      const response = await server({
         url: '/post/all',
         method: 'get',
      });

      // return the list of posts
      console.log('list of posts' + response.data);
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
      });

      // return newly created post
      return response.data;
   } catch (e) {
      console.log('Unable to add post: ' + e.message);
   }
}

export { getPosts, createPost };
