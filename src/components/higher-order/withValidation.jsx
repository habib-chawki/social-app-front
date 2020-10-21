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
      const handleChange = (event) => {
         // extract the input target
         const { target } = event;

         const inputValue = target.value.trim(); // trim input value
         const inputType = target.name;

         // update credentials state
         setCredentials({
            ...credentials,
            [inputType]: inputValue,
         });
      };

      const handleValidation = (event) => {
         // extract the input target
         const { target } = event;

         //const inputValue = target.value.trim(); // trim input value
         const inputType = target.name;

         // keep track of validation errors
         const { errors } = credentials;

         // add validation error if any, otherwise delete key (email or password) from errors object
         !isInputValid(inputType, credentials[inputType])
            ? (errors[inputType] = `Invalid ${inputType}.`)
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
