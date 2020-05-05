import React, { useState } from 'react';

function CredentialsForm() {
   // manage email, password and validation errors state
   const [credentials, setCredentials] = useState({
      email: '',
      password: '',
      errors: {},
   });

   // handle email and password input
   const handleCredentials = (event) => {
      const errors = credentials.errors;

      // TODO: validate email and password properly
      if (event.target.value.length < 3) {
         // add validation errors
         errors[event.target.name] = `Invalid ${event.target.name}`;
      } else {
         // delete key (email or password) if no validation errors are present
         delete errors[event.target.name];
      }

      setCredentials({
         ...credentials,
         [event.target.name]: event.target.value,
         errors,
      });
   };

   // handle form submission
   const handleSubmit = (event) => {
      // prevent default form submission behavior
      event.preventDefault();

      // reject log in in case of invalid credentials (erros object is not empty)
      if (Object.keys(credentials.errors).length === 0) {
         console.log('Calling server...');
      } else {
         console.log('Invalid credentials.');
      }

      // clear input fields and errors object
      setCredentials({ email: '', password: '', errors: {} });
   };

   // return a form with email, password inputs and a submit button (render validation errors conditionally)
   return (
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
         {credentials.errors.password && <p>{credentials.errors.password}</p>}
         <input type="submit" value="Log in" />
      </form>
   );
}

export default CredentialsForm;
