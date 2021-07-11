import React, { useState } from 'react';

import isEmail from 'validator/lib/isEmail';

function withValidation(Component) {
   return (props) => {
      // manage email, password and validation errors state
      const [credentials, setCredentials] = useState({
         email: '',
         password: '',
         firstName: '',
         lastName: '',
         errors: { email: '', password: '', firstName: '', lastName: '' },
      });

      // validate input value
      const isInputValid = (type, content) => {
         const validator = {
            email: {
               isValid: isEmail(content),
               validationError: 'Invalid Email',
            },
            password: content.length >= 5,
            firstName: content.length >= 5,
            lastName: content.length >= 5,
         };

         return validator[type];
      };

      // validate and update input
      const handleChange = (event) => {
         // extract the input target
         const { target } = event;

         const inputValue = target.value.trim(); // trim input value
         const inputType = target.id;

         // remove error when input is valid
         if (isInputValid(inputType, inputValue)) {
            delete credentials.errors[inputType];
         }

         // update credentials state
         setCredentials({
            ...credentials,
            [inputType]: inputValue,
         });
      };

      const handleValidation = (event) => {
         // extract the input target
         const { target } = event;
         const inputType = target.id;

         // keep track of validation errors
         const errors = { ...credentials.errors };

         const input = isInputValid(inputType, credentials[inputType]);

         // add validation error if any, otherwise delete key from errors object
         !input.isValid
            ? (errors[inputType] = input.validationError)
            : delete errors[inputType];

         // update credentials state
         setCredentials({
            ...credentials,
            errors,
         });
      };

      return (
         <Component
            {...props}
            credentials={credentials}
            onValidate={handleValidation}
            onChange={handleChange}
         />
      );
   };
}

export default withValidation;
