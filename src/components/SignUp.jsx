import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CredentialsForm from './common/CredentialsForm';

function SignUp() {
   // handle sign up form submission
   const handleSignUp = async ({ email, password }) => {
      console.log(`Handling signup... Email: ${email} Password: ${password}`);

      // user sign up
      try {
         const response = await axios.post(
            'http://localhost:3001/user/signup',
            {
               email,
               password,
            }
         );

         // persist auth token to localStorage
         localStorage.setItem('Token', response.data.token);
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
