import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';

import { loginUser } from '../../services/user';

function CredentialsForm({ type, title }) {
   // history object
   const history = useHistory();

   // manage email, password and validation errors state
   const [credentials, setCredentials] = useState({
      email: '',
      password: '',
      errors: { email: '', password: '' },
   });

   // validate and update email and password input
   const handleCredentials = ({ target }) => {
      const errors = credentials.errors; // keep track of validation errors
      const inputValue = target.value.trim(); // trim input value

      // validate email or password accordingly
      const isValid =
         target.name === 'email' ? isEmail(inputValue) : inputValue.length >= 5;

      if (!isValid) {
         // add validation error
         errors[target.name] = `Invalid ${target.name}.`;
      } else {
         // delete key (email / password) from errors object if no validation errors occurred
         delete errors[target.name];
      }

      // update credentials state
      setCredentials({
         ...credentials,
         [target.name]: inputValue,
         errors,
      });
   };

   // handle form submission
   const handleSubmit = async (event) => {
      // prevent default form submission behavior
      event.preventDefault();

      // reject login in case of invalid credentials (errors object is not empty)
      if (Object.keys(credentials.errors).length === 0) {
         // handle user login / signup
         await loginUser(type, credentials);

         // navigate user to posts page
         history.replace('/posts');
      } else {
         console.log('Invalid credentials.');
      }
   };

   const renderInput = (type, name) => {
      return (
         <div>
            <label htmlFor={name}>{name + ': '}</label>
            <input
               type={type}
               id={name}
               name={name}
               value={credentials[name]}
               onChange={handleCredentials}
               placeholder={`${name} ...`}
            />
         </div>
      );
   };
   // form with email, password inputs and a submit button
   return (
      <div>
         <h1>{title}</h1>
         <form onSubmit={handleSubmit}>
            {renderInput('text', 'email')}

            {/* render validation error conditionally */}
            {credentials.errors.email && <p>{credentials.errors.email}</p>}

            {renderInput('password', 'password')}

            {credentials.errors.password && (
               <p>{credentials.errors.password}</p>
            )}
            <input type="submit" value={title} />
         </form>
      </div>
   );
}

export default CredentialsForm;
