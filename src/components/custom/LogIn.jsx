import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../common/Input';

import { loginUser } from '../../services/user';

import withValidation from '../higher-order/withValidation';
import withSubmission from '../higher-order/withSubmission';

function LogIn({ credentials, onValidate, onSubmit }) {
   return (
      <div>
         <h1>Log In</h1>
         <form onSubmit={onSubmit}>
            <Input
               type="text"
               name="email"
               credentials={credentials}
               onValidate={onValidate}
            />
            <Input
               type="password"
               name="password"
               credentials={credentials}
               onValidate={onValidate}
            />
            <input type="submit" value="Log in" />
         </form>
         <p>
            Not registered yet ? <Link to="/">Sign Up</Link>{' '}
         </p>
      </div>
   );
}

export default withSubmission(withValidation(LogIn), loginUser);
