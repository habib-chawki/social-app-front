import server from '../utils/server';

const baseUrl = '/posts';

// create a new post
async function createPost(content) {
   try {
      // make api request to persist post in db
      const response = await server({
         url: baseUrl,
         method: 'post',
         data: { content },
      });

      // return newly created post
      return response.data;
   } catch (e) {
      console.log('Unable to create post: ' + e.message);
   }
}

// get a single post by id
async function fetchPost(id) {
   try {
      const response = await server({
         url: `${baseUrl}/${id}`,
         method: 'get',
      });

      // return post
      return response.data;
   } catch (e) {
      console.log('Unable to fetch post: ' + e.message);
   }
}

// get the list of posts
async function fetchPosts({ limit, skip }) {
   try {
      // retrieve list of posts
      const response = await server({
         url: `${baseUrl}?limit=${limit}&skip=${skip}`,
         method: 'get',
      });

      // return list of posts
      return response.data;
   } catch (e) {
      console.log('Unable to fetch list of posts: ' + e.message);
   }
}

// update post by id
async function updatePost(id, content) {
   try {
      const response = await server({
         url: `${baseUrl}/${id}`,
         method: 'patch',
         data: { content },
      });

      return response.data;
   } catch (e) {
      console.log('Unable to update post: ' + e.message);
   }
}

// delete post by id
async function removePost(id) {
   try {
      const response = await server({
         url: `${baseUrl}/${id}`,
         method: 'delete',
      });

      return response.data;
   } catch (e) {
      console.log('Unable to remove post: ' + e.message);
   }
}

// delete all posts
async function removePosts() {
   try {
      const response = await server({
         url: baseUrl,
         method: 'delete',
      });

      return response.data;
   } catch (e) {
      console.log('Unable to remove all posts ' + e.message);
   }
}

export {
   createPost,
   fetchPost,
   fetchPosts,
   updatePost,
   removePost,
   removePosts,
};
