import React from 'react';
import { Link } from 'react-router-dom';
import CredentialsForm from './common/CredentialsForm';

function LogIn() {
   const handleLogIn = () => {
      console.log('Handle login...');
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
