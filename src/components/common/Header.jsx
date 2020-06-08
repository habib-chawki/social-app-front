import React from 'react';
import { Link } from 'react-router-dom';

import { removeToken } from '../../services/token';

function Header() {
   return (
      <Link to="/" onClick={removeToken}>
         Log out
      </Link>
   );
}

export default Header;
