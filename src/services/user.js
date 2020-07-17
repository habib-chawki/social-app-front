import server from '../utils/server';
import { setToken, removeToken } from './token';

// handle signup
async function signupUser({ email, password }) {
   try {
      // formType => "signup" or "login"
      const response = await server({
         url: '/user/signup',
         method: 'post',
         data: { email, password },
      });

      // persist auth token to localStorage
      setToken(response.data.token);
   } catch (e) {
      console.log('Unable to signup: ' + e.message);
   }
}

// handle login
async function loginUser({ email, password }) {
   try {
      // formType => "signup" or "login"
      const response = await server({
         url: '/user/login',
         method: 'post',
         data: { email, password },
      });

      // persist auth token to localStorage
      setToken(response.data.token);
   } catch (e) {
      console.log('Unable to login: ' + e.message);
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
      console.log('Unable to logout: ' + e.message);
   }
}

export { signupUser, loginUser, logoutUser };
