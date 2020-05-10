import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CredentialsForm from './common/CredentialsForm';

function SignUp() {
   // handle sign up form submission
   const handleSignUp = async () => {
      console.log('Handling signup...');

      // user sign up
      try {
         const response = await axios.post(
            'http://localhost:3001/user/signup',
            {
               email: 'habib@email.com',
               password: 'P@$$W0rD',
            }
         );

         console.log(response);
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
