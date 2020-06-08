import server from '../utils/server';
import { setToken, removeToken } from './token';

// handle signup / login form submission
async function loginUser(formType, { email, password }) {
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

// handle user logout
async function logoutUser() {
   try {
      await server({
         url: 'user/logout',
         method: 'post',
      });

      // remove token from localStorage
      removeToken();
   } catch (e) {
      console.log('Unable to log user out: ' + e.message);
   }
}

export { loginUser, logoutUser };
