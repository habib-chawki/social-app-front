import React, { useState } from 'react';

function LogIn() {
   // manage email and password state
   const [credentials, setCredentials] = useState({ email: '', password: '' });

   // handle email and password input
   const handleCredentials = (event) => {
      setCredentials({
         ...credentials,
         [event.target.name]: event.target.value,
      });
   };

   // handle form submission
   const handleLogIn = (event) => {
      // prevent default form submission behavior and clear input fields
      event.preventDefault();
      setCredentials({ email: '', password: '' });
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
         <label htmlFor="password">Password:</label>
         <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleCredentials}
            id="password"
            placeholder="Password..."
         />
         <input type="submit" />
      </form>
   );
}

export default LogIn;
