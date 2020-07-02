import server from '../utils/server';

// add a new comment
async function create(postId, content) {
   try {
      const response = await server({
         url: '/comment',
         method: 'post',
         data: { postId, content },
      });

      // return new comment
      return response.data;
   } catch (e) {
      console.log('Unable to create comment: ' + e.message);
   }
}

// update comment by id
async function update(postId, commentId, newComment) {
   try {
      await server({
         url: '/comment',
         method: 'put',
         data: { postId, commentId, newComment },
      });
   } catch (e) {
      console.log('Unable to update comment: ' + e.message);
   }
}

// delete comment by id
async function remove(postId, commentId) {
   try {
      await server({
         url: '/comment',
         method: 'delete',
         data: { postId, commentId },
      });
   } catch (e) {
      console.log('Unable to delete comment: ' + e.message);
   }
}

export { create, update, remove };
