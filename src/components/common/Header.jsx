import React from 'react';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../services/user';

function Header() {
   return (
      <Link to="/login" onClick={logoutUser}>
         Log out
      </Link>
   );
}

export default Header;
