import React, { useState } from 'react';

import isEmail from 'validator/lib/isEmail';

function withValidation(Component) {
   return (props) => {
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
      const handleValidation = ({ target }) => {
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

      return (
         <Component
            {...props}
            credentials={credentials}
            onValidate={handleValidation}
         />
      );
   };
}

export default withValidation;
