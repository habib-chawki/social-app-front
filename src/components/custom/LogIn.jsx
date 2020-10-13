import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { TextField } from '@material-ui/core';

import { loginUser } from '../../services/user';
import withValidation from '../higher-order/withValidation';

function LogIn({ credentials, validate }) {
   // history object
   const history = useHistory();

   // handle form submission
   const handleSubmit = async (event) => {
      // prevent default form submission behavior
      event.preventDefault();

      // reject login in case of invalid credentials (errors object is not empty)
      if (Object.keys(credentials.errors).length === 0) {
         // handle user login / signup
         await loginUser(credentials);

         // navigate user to posts page
         history.replace('/posts');
      } else {
         console.log('Invalid credentials.');
      }
   };

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
