import server from '../utils/server';

// add a new comment
async function createComment(postId, comment) {
   try {
      // send postId and comment content with auth token
      const response = await server({
         url: '/comment',
         method: 'post',
         data: { postId, comment },
      });

      // return new comment
      return response.data;
   } catch (e) {
      console.log('Unable to create comment: ' + e.message);
   }
}

export { createComment };