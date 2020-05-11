import React from 'react';
import { Link } from 'react-router-dom';
import CredentialsForm from './common/CredentialsForm';

function LogIn() {
   const handleLogIn = ({ email, password }) => {
      console.log(`Handle login... Email: ${email}, Password: ${password}`);
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
