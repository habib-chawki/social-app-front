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
      <AppBar position="static" color="secondary">
         <Toolbar>
            <Link to="/login" onClick={logUserOut}>
               <Button> Log out </Button>
            </Link>

            <Link to={`/user/${userId.current}/profile`}>
               <Button> View profile </Button>
            </Link>
         </Toolbar>
      </AppBar>
   );
}

export default Header;
