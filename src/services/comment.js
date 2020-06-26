import server from '../utils/server';

// add a new comment
async function createComment(postId, comment) {
   try {
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

// update comment by id
async function updateComment(postId, commentId, newComment) {
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
async function deleteComment(postId, commentId) {
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

export { createComment, deleteComment, updateComment };
