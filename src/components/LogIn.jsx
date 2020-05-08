import React from 'react';
import { Link } from 'react-router-dom';
import CredentialsForm from './common/CredentialsForm';

function LogIn() {
   return (
      <div>
         <CredentialsForm title="Log in" />
         <Link to="/">Signup</Link>
      </div>
   );
}

export default LogIn;
