import React from 'react';
import { Link } from 'react-router-dom';
import CredentialsForm from './common/CredentialsForm';

function SignUp() {
   const handleSignUp = () => {
      console.log('Handle signup...');
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
