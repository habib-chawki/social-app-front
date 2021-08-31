import axios from 'axios';
import { storeUserInfo, removeUserInfo } from './storage';

const baseUrl = '/users';

// handle signup
async function signUserUp({ email, password, firstName, lastName }) {
   try {
      const response = await axios({
         url: `${baseUrl}/signup`,
         method: 'post',
         data: { email, password, firstName, lastName },
      });

      // store authenticated user id in localStorage
      storeUserInfo(response.data.id);
   } catch (err) {
      console.log('Unable to signup: ' + err.message);
      throw err.response.data;
   }
}

// handle login
async function logUserIn({ email, password }) {
   try {
      const response = await axios({
         url: `${baseUrl}/login`,
         method: 'post',
         data: { email, password },
      });

      // store authenticated user id in localStorage
      storeUserInfo(response.data.id);
   } catch (err) {
      console.log('Unable to login: ' + err.message);
      throw err.response.data;
   }
}

// handle user logout
async function logUserOut() {
   try {
      await axios({
         url: `${baseUrl}/logout`,
         method: 'post',
      });

      // remove user id from localStorage
      removeUserInfo();
   } catch (e) {
      console.log('Unable to logout: ' + e.message);
   }
}

export { signUserUp, logUserIn, logUserOut };
