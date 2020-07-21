import React from 'react';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../services/user';

function Header() {
   return (
      <div>
         <Link to="/login" onClick={logoutUser}>
            Log out
         </Link>
         <Link to="/profile">View profile</Link>
      </div>
   );
}

export default Header;
