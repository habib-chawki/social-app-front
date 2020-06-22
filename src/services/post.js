import server from '../utils/server';

// get the list of posts
async function fetchPosts() {
   try {
      // retrieve list of posts
      const response = await server({
         url: '/post/all',
         method: 'get',
      });

      // return list of posts
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

// update post by id
async function updatePost(id, content) {
   try {
      const response = await server({
         url: `/post/${id}`,
         method: 'patch',
         data: { content },
      });

      return response.data;
   } catch (e) {
      console.log('Unable to update post: ' + e.message);
   }
}

// delete post by id
async function deletePost(id) {
   try {
      const response = await server({
         url: `/post/${id}`,
         method: 'delete',
      });

      return response.data;
   } catch (e) {
      console.log('Unable to delete post: ' + e.message);
   }
}

export { fetchPosts, createPost, updatePost, deletePost };
