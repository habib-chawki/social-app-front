import server from '../utils/server';
import { storeUserInfo, removeUserInfo } from './storage';

const baseUrl = '/users';

// handle signup
async function signUserUp({ email, password }) {
   try {
      const response = await server({
         url: `${baseUrl}/signup`,
         method: 'post',
         data: { email, password },
      });

      // persist auth token and user id to localStorage
      storeUserInfo(response.data.token, response.data.id);
   } catch (e) {
      console.log('Unable to signup: ' + e.message);
   }
}

// handle login
async function logUserIn({ email, password }) {
   try {
      const response = await server({
         url: `${baseUrl}/login`,
         method: 'post',
         data: { email, password },
      });

      // persist auth token and user id to localStorage
      storeUserInfo(response.data.token, response.data.id);
   } catch (e) {
      console.log('Unable to login: ' + e.message);
   }
}

// handle user logout
async function logUserOut() {
   try {
      await server({
         url: `${baseUrl}/logout`,
         method: 'post',
      });

      // remove token and user id from localStorage
      removeUserInfo();
   } catch (e) {
      console.log('Unable to logout: ' + e.message);
   }
}

export { signUserUp, logUserIn, logUserOut };
