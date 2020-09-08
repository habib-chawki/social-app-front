import server from '../utils/server';

const baseUrl = '/comments';

// add a new comment
async function create(postId, content) {
   try {
      const response = await server({
         url: baseUrl,
         method: 'post',
         data: { content },
         params: { post: postId },
      });

      // return new comment
      return response.data;
   } catch (e) {
      console.log('Unable to create comment: ' + e.message);
   }
}

// get list of comments
async function fetchAll(postId, { limit, skip }) {
   try {
      const response = await server({
         url: `${baseUrl}/?post=${postId}&limit=${limit}&skip=${skip}`,
         method: 'get',
      });

      // return list of comments
      return response.data;
   } catch (e) {
      console.log('Unable to fetch list of comments: ' + e.message);
   }
}

// update comment by id
async function update(postId, commentId, newComment) {
   try {
      await server({
         url: `${baseUrl}/${commentId}?post=${postId}`,
         method: 'put',
         data: { newComment },
      });
   } catch (e) {
      console.log('Unable to update comment: ' + e.message);
   }
}

// delete comment by id
async function remove(postId, commentId) {
   try {
      await server({
         url: `${baseUrl}/${commentId}?post=${postId}`,
         method: 'delete',
      });
   } catch (e) {
      console.log('Unable to delete comment: ' + e.message);
   }
}

export { create, update, remove, fetchAll };
