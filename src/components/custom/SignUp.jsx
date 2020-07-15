import React from 'react';
import { Link } from 'react-router-dom';

import CredentialsForm from './common/CredentialsForm';

function SignUp() {
   const renderLink = () => {
      return (
         <p>
            Already registered ? <Link to="/login">Log In</Link>
         </p>
      );
   };

   return (
      <div>
         <CredentialsForm submissionType="signup" title="Sign up" />
      </div>
   );
}

export default SignUp;
