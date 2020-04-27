import React, { useState } from 'react';

function LogIn() {
   // manage email and password state
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   // handle email input value
   const handleEmail = (event) => {
      setEmail(event.target.value);
   };

   // handle password input value
   const handlePassword = (event) => {
      setPassword(event.target.value);
   };

   // handle form submission
   const handleSubmit = (event) => {
      // prevent default form submission behavior
      event.preventDefault();
      console.log(`Email: ${email}, Password: ${password}`);
   };

   // return a form with email, password and a submit button
   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="email">Email:</label>
         <input
            type="text"
            value={email}
            onChange={handleEmail}
            id="email"
            placeholder="Email..."
         />
         <label htmlFor="password">Password:</label>
         <input
            type="password"
            value={password}
            onChange={handlePassword}
            id="password"
            placeholder="Password..."
         />
         <input type="submit" />
      </form>
   );
}

export default LogIn;
