import React from 'react';
import { Link } from 'react-router-dom';

import CredentialsForm from './common/CredentialsForm';
import server from '../utils';

function LogIn({ history }) {
   const handleLogIn = async ({ email, password }) => {
      // handle login form submission
      try {
         const response = await server.post('user/login/', { email, password });

         // persist auth token to localStorage
         localStorage.setItem('Token', response.data.token);

         // navigate user to posts
         history.replace('/posts');
      } catch (e) {
         console.log(e.message);
      }
   };

   return (
      <div>
         <CredentialsForm title="Log in" handleFormSubmission={handleLogIn} />
         <p>
            Not registered yet ? <Link to="/">Sign Up</Link>
         </p>
      </div>
   );
}

export default LogIn;
