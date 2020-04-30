import React, { useState } from 'react';

function LogIn() {
   // manage email and password state
   const [credentials, setCredentials] = useState({
      email: '',
      password: '',
      errors: {},
   });

   // handle email and password input
   const handleCredentials = (event) => {
      // check validation errors
      const errors = credentials.errors;
      if (event.target.value.length < 3) {
         errors[event.target.name] = `Invalid ${event.target.name}`;
      } else {
         delete errors[event.target.name];
      }

      setCredentials({
         ...credentials,
         [event.target.name]: event.target.value,
         errors,
      });
   };

   // handle form submission
   const handleLogIn = (event) => {
      // prevent default form submission behavior and clear input fields
      event.preventDefault();

      // reject log in in case of invalid credentials
      if (Object.keys(credentials.errors).length === 0) {
         console.log('Logged in.');
      } else {
         console.log('Invalid credentials.');
      }

      setCredentials({ email: '', password: '', errors: {} });
   };

   // return a form with email, password and a submit button
   return (
      <form onSubmit={handleLogIn}>
         <label htmlFor="email">Email:</label>
         <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleCredentials}
            id="email"
            placeholder="Email..."
         />
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

export default LogIn;
