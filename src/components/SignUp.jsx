import React from 'react';
import { Link } from 'react-router-dom';

import CredentialsForm from './common/CredentialsForm';
import server from '../utils';

function SignUp({ history }) {
   // handle sign up form submission
   const handleSignUp = async ({ email, password }) => {
      // user sign up
      try {
         const response = await server.post('user/signup/', {
            email,
            password,
         });

         // persist auth token to localStorage
         localStorage.setItem('Token', response.data.token);

         // navigate user to posts
         history.push('/posts');
      } catch (e) {
         // Error
         console.log(e.message);
      }
   };

   return (
      <div>
         <CredentialsForm title="Sign up" handleFormSubmission={handleSignUp} />
         <p>
            Already registered ? <Link to="/login">Log In</Link>
         </p>
      </div>
   );
}

export default SignUp;
