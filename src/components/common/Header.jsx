import React from 'react';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../services/user';

function Header() {
   return (
      <nav>
         <ul>
            <li>
               <Link to="/login" onClick={logoutUser}>
                  Log out
               </Link>
            </li>
            <li>
               <Link to="/profile">View profile</Link>
            </li>
         </ul>
      </nav>
   );
}

export default Header;
