import React from 'react';

function LogIn() {
   return (
      <form>
         <label htmlFor="email">Email:</label>
         <input type="text" id="email" placeholder="Email..." />
         <label htmlFor="password">Password:</label>
         <input type="text" id="password" placeholder="Password..." />
         <input type="submit" />
      </form>
   );
}

export default LogIn;
