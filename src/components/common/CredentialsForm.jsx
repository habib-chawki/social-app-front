import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

function CredentialsForm({ title, handleFormSubmission }) {
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
   const handleSubmit = (event) => {
      // prevent default form submission behavior
      event.preventDefault();

      // reject login in case of invalid credentials (errors object is not empty)
      if (Object.keys(credentials.errors).length === 0) {
         // call appropriate backend service
         handleFormSubmission(credentials);
      } else {
         console.log('Invalid credentials.');
      }
   };

   // form with email, password inputs and a submit button
   return (
      <div>
         <h1>{title}</h1>
         <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
               type="text"
               name="email"
               value={credentials.email}
               onChange={handleCredentials}
               id="email"
               placeholder="Email..."
            />
            {/* render validation error conditionally */}
            {credentials.errors.email && <p>{credentials.errors.email}</p>}
            <label htmlFor="password">Password:</label>
            <input
               type="password"
               name="password"
               value={credentials.password}
               onChange={handleCredentials}
               id="password"
               placeholder="Password..."
            />
            {credentials.errors.password && (
               <p>{credentials.errors.password}</p>
            )}
            <input type="submit" value={title} />
         </form>
      </div>
   );
}

export default CredentialsForm;