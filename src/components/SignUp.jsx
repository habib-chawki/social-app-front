import React, { useState } from 'react';

function SignUp() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleEmail = (event) => {
      setEmail(event.target.value);
   };

   const handlePassword = (event) => {
      setPassword(event.target.value);
   };

   const handleSignUp = (event) => {
      event.preventDefault();
      console.log(`Email: ${email}, Password: ${password}`);
   };

   return (
      <div>
         <form onSubmit={handleSignUp}>
            <label htmlFor="email">Email: </label>
            <input
               value={email}
               onChange={handleEmail}
               id="email"
               type="text"
               placeholder="Email..."
            />
            <label htmlFor="password">Password: </label>
            <input
               value={password}
               onChange={handlePassword}
               id="password"
               type="password"
               placeholder="Password..."
            />
            <label htmlFor="repeatPassword">Repeat password: </label>
            <input
               type="password"
               id="repeatPassword"
               placeholder="Repeat password..."
            />
            <input type="submit" />
         </form>
      </div>
   );
}
