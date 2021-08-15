import React, { useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { logUserOut } from '../../services/user';
import { getUser } from '../../services/storage';

import { Button, AppBar, Toolbar, Link } from '@material-ui/core';

function Header() {
   const userId = useRef();

   useEffect(() => {
      // extract user id from local storage
      userId.current = getUser();
   }, []);

   return (
      <AppBar position="static" color="secondary">
         <Toolbar>
            <Link
               to="/login"
               onClick={logUserOut}
               component={RouterLink}
               underline="none"
            >
               <Button variant="text"> Log out </Button>
            </Link>

            <Link
               to={`/user/${userId.current}/profile`}
               component={RouterLink}
               underline="none"
            >
               <Button variant="text"> View profile </Button>
            </Link>
         </Toolbar>
      </AppBar>
   );
}

export default Header;
