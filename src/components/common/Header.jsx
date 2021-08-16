import React, { useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { logUserOut } from '../../services/user';
import { getUser } from '../../services/storage';

import { IconButton, AppBar, Toolbar, Link } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

function Header() {
   const userId = useRef();

   useEffect(() => {
      // extract user id from local storage
      userId.current = getUser();
   }, []);

   return (
      <AppBar position="static">
         <Toolbar>
            <Link
               to="/login"
               onClick={logUserOut}
               component={RouterLink}
               underline="none"
            >
               <IconButton variant="text">
                  <LockIcon />
               </IconButton>
            </Link>

            <Link
               to={`/user/${userId.current}/profile`}
               component={RouterLink}
               underline="none"
            >
               <IconButton>
                  <AccountCircleIcon />
               </IconButton>
            </Link>
         </Toolbar>
      </AppBar>
   );
}

export default Header;
