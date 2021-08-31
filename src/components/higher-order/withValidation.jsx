import React, { useState } from 'react';

import isEmail from 'validator/lib/isEmail';

function withValidation(Component, initialCredentials) {
   return (props) => {
      // manage email, password and validation errors state
      const [credentials, setCredentials] = useState({
         ...initialCredentials,
         errors: { ...initialCredentials },
      });

      // validate input value
      const validateInput = (type, content) => {
         const validator = {
            email: {
               isValid: isEmail(content),
               validationError: 'Invalid Email',
            },
            password: {
               isValid: content.length >= 5,
               validationError: 'Password should be at least 5 characters long',
            },
            firstName: {
               isValid: content.length >= 5,
               validationError:
                  'First name should be at least 5 characters long',
            },
            lastName: {
               isValid: content.length >= 5,
               validationError:
                  'Last name should be at least 5 characters long',
            },
         };

         return validator[type];
      };

      // validate and update input
      const handleChange = (event) => {
         // extract the input target
         const { target } = event;

         const inputValue = target.value.trim(); // trim input value
         const inputType = target.id;

         // validate input
         const input = validateInput(inputType, inputValue);

         // remove error when input is valid
         if (input.isValid) {
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

         // validate input
         const input = validateInput(inputType, credentials[inputType]);

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
