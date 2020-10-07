import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { signupUser } from '../../services/user';
import withValidation from '../higher-order/withValidation';

function SignUp({ renderInput, handleSubmit }) {
   return (
      <div>
         <h1>Sign Up</h1>
         <form onSubmit={handleSubmit}>
            {renderInput({ type: 'text', name: 'email' })}
            {renderInput({ type: 'password', name: 'password' })}
            <Button type="submit" variant="contained" color="primary">
               Sign up
            </Button>
         </form>
         <p>
            Already registered ? <Link to="/login">Log In</Link>
         </p>
      </div>
   );
}

export default withValidation(SignUp, signupUser);
