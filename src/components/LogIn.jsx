import React, { useState } from 'react';

function LogIn() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleEmail = (event) => {
      setEmail(event.target.value);
      console.log(email);
   };

   const handlePassword = (event) => {
      setPassword(event.target.value);
      console.log(password);
   };

   return (
      <form>
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
