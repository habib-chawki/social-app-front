import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../services/user';
import { getUser } from '../../services/storage';

function Header() {
   const userId = useRef();

   useEffect(() => {
      // extract user id from local storage
      userId.current = getUser();
   }, []);

   return (
      <nav>
         <ul>
            <li>
               <Link to="/login" onClick={logoutUser}>
                  Log out
               </Link>
            </li>
            <li>
               <Link to={`/profile/${userId.current}`}>View profile</Link>
            </li>
         </ul>
      </nav>
   );
}

export default Header;
