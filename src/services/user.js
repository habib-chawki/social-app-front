import server from '../utils/server';
import { setToken } from './token';

// handle signup / login form submission
async function handleFormSubmission(formType, { email, password }) {
   try {
      // formType => "signup" or "login"
      const response = await server({
         url: `/user/${formType}`,
         method: 'post',
         data: { email, password },
      });

      // persist auth token to localStorage
      setToken(response.data.token);
   } catch (e) {
      console.log('Unable to handle form submission: ' + e.message);
   }
}

export { handleFormSubmission };
