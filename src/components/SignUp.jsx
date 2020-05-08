import React from 'react';
import { Link } from 'react-router-dom';
import CredentialsForm from './common/CredentialsForm';

function SignUp() {
   return (
      <div>
         <CredentialsForm title="Sign up" />
         <Link to="/login">LogIn</Link>
      </div>
   );
}

export default SignUp;
