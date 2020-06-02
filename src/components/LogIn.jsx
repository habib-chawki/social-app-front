import React from 'react';
import { Link } from 'react-router-dom';

import CredentialsForm from './common/CredentialsForm';

function LogIn() {
   return (
      <div>
         <CredentialsForm type="login" title="Log in" />
         <p>
            Not registered yet ? <Link to="/">Sign Up</Link>
         </p>
      </div>
   );
}

export default LogIn;
