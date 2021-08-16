import React, { useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { logUserOut } from '../../services/user';
import { getUser } from '../../services/storage';

import { IconButton, AppBar, Toolbar, Link } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

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
               <Tooltip title="Log out">
                  <IconButton>
                     <LockIcon />
                  </IconButton>
               </Tooltip>
            </Link>

            <Link
               to={`/user/${userId.current}/profile`}
               component={RouterLink}
               underline="none"
            >
               <Tooltip title="View profile">
                  <IconButton>
                     <AccountCircleIcon />
                  </IconButton>
               </Tooltip>
            </Link>
         </Toolbar>
      </AppBar>
   );
}

export default Header;
