import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import isEmail from 'validator/lib/isEmail';

function withValidation(Component, submitForm) {
   return (props) => {
      // history object
      const history = useHistory();

      // manage email, password and validation errors state
      const [credentials, setCredentials] = useState({
         email: '',
         password: '',
         errors: { email: '', password: '' },
      });

      // validate input value
      const isInputValid = (type, content) => {
         const validator = {
            email: isEmail(content),
            password: content.length >= 5,
         };

         return validator[type];
      };

      // validate and update input
      const validate = ({ target }) => {
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
            await submitForm(credentials);

            // navigate user to posts page
            history.replace('/posts');
         } else {
            console.log('Invalid credentials.');
         }
      };

      return (
         <Component
            {...props}
            credentials={credentials}
            validate={validate}
            handleSubmit={handleSubmit}
         />
      );
   };
}

export default withValidation;
