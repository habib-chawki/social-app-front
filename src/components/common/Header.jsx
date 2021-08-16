import React, { useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { logUserOut } from '../../services/user';
import { getUser } from '../../services/storage';

import { IconButton, AppBar, Toolbar, Box } from '@material-ui/core';
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
            <Box display="flex" justifyContent="flex-end">
               <Tooltip title="Log out">
                  <IconButton
                     color="inherit"
                     component={RouterLink}
                     to="/login"
                     onClick={logUserOut}
                  >
                     <LockIcon />
                  </IconButton>
               </Tooltip>

               <Tooltip title="View profile">
                  <IconButton
                     color="inherit"
                     component={RouterLink}
                     to={`/user/${userId.current}/profile`}
                  >
                     <AccountCircleIcon />
                  </IconButton>
               </Tooltip>
            </Box>
         </Toolbar>
      </AppBar>
   );
}

export default Header;
