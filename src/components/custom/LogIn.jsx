import React from 'react';
import { Link } from 'react-router-dom';

import { loginUser } from '../../services/user';
import withValidation from '../higher-order/withValidation';

function LogIn({ renderInput, handleSubmit }) {
   return (
      <div>
         <h1>Log In</h1>
         <form onSubmit={handleSubmit}>
            {renderInput({ type: 'text', name: 'email' })}
            {renderInput({ type: 'password', name: 'password' })}
            <input type="submit" value="Log in" />
         </form>
         <p>
            Not registered yet ? <Link to="/">Sign Up</Link>{' '}
         </p>
      </div>
   );
}

export default withValidation(LogIn, loginUser);
