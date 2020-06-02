import server from '../utils/server';
import { setToken } from './token';

// handle signup / login form submission
async function handleFormSubmission(url, { email, password }) {
   try {
      const response = await server.post(`user/${url}/`, {
         email,
         password,
      });

      // persist auth token to localStorage
      setToken(response.data.token);
   } catch (e) {
      console.log('Unable to handle form submission: ' + e.message);
   }
}

export { handleFormSubmission };
