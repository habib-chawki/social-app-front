import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import isInputValid from '../../utils/validation';
import { loginUser } from '../../services/user';

function CredentialsForm({ submissionType, title }) {
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
      const inputType = target.name;

      // add validation error if any, otherwise delete key (email or password) from errors object
      !isInputValid(inputType, inputValue)
         ? (errors[inputType] = `Invalid ${inputType}.`)
         : delete errors[inputType];

      // update credentials state
      setCredentials({
         ...credentials,
         [inputType]: inputValue,
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
         await loginUser(submissionType, credentials);

         // navigate user to posts page
         history.replace('/posts');
      } else {
         console.log('Invalid credentials.');
      }
   };

   // render input (email or password)
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

   // render validation errors if any
   const renderError = (input) => {
      return credentials.errors[input] && <p>{credentials.errors[input]}</p>;
   };

   // form with email, password inputs and a submit button
   return (
      <div>
         <h1>{title}</h1>
         <form onSubmit={handleSubmit}>
            {renderInput('text', 'email')}
            {renderError('email')}

            {renderInput('password', 'password')}
            {renderError('password')}

            <input type="submit" value={title} />
         </form>
      </div>
   );
}

export default CredentialsForm;
