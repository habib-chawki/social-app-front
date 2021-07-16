import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { logUserOut } from '../../services/user';
import { getUser } from '../../services/storage';

import { Button, AppBar, Toolbar } from '@material-ui/core';

function Header() {
   const userId = useRef();

   useEffect(() => {
      // extract user id from local storage
      userId.current = getUser();
   }, []);

   return (
      <AppBar position="static">
         <Toolbar>
            <Link to="/login" onClick={logUserOut}>
               <Button color="white"> Log out </Button>
            </Link>

            <Button color="primary">
               <Link to={`/user/${userId.current}/profile`}>View profile</Link>
            </Button>
         </Toolbar>
      </AppBar>
   );
}

export default Header;
