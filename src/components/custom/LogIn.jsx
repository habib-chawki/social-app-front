import React from 'react';
import { Link } from 'react-router-dom';

import { TextField } from '@material-ui/core';

import { loginUser } from '../../services/user';
import withValidation from '../higher-order/withValidation';

function LogIn({ credentials, validate, handleSubmit }) {
   // render input (email or password)
   const renderInput = ({ type, name }) => {
      return (
         <div>
            <TextField
               type={type}
               id={name}
               name={name}
               value={credentials[name]}
               variant="filled"
               onChange={validate}
               label={name}
               error={credentials.errors[name]}
               helperText={credentials.errors[name]}
            />
         </div>
      );
   };
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
