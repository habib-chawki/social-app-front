import axios from 'axios';

const baseUrl = '/comments';

// add a new comment
async function createComment(postId, content) {
   try {
      const response = await axios({
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
async function fetchComments({ postId, limit, skip }) {
   try {
      const response = await axios({
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
async function updateComment(postId, commentId, content) {
   try {
      await axios({
         url: `${baseUrl}/${commentId}?post=${postId}`,
         method: 'put',
         data: { content },
      });
   } catch (e) {
      // console.log('Unable to update comment: ' + e.message);
      throw new Error('Error: ' + e.message);
   }
}

// delete comment by id
async function removeComment(postId, commentId) {
   try {
      await axios({
         url: `${baseUrl}/${commentId}?post=${postId}`,
         method: 'delete',
      });
   } catch (e) {
      console.log('Unable to delete comment: ' + e.message);
   }
}

export { createComment, updateComment, removeComment, fetchComments };
