import React from 'react';
import { Link } from 'react-router-dom';

import CredentialsForm from './common/CredentialsForm';

function SignUp() {
   return (
      <div>
         <CredentialsForm submissionType="signup" title="Sign up" />
         <p>
            Already registered ? <Link to="/login">Log In</Link>
         </p>
      </div>
   );
}

export default SignUp;
