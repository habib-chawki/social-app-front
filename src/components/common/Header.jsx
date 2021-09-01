import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import UserContext from '../../context/user-context';

import { logUserOut } from '../../services/user';

import { IconButton, AppBar, Toolbar, Box } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

function Header() {
   const { authenticatedUser } = useContext(UserContext);

   return (
      <Box>
         <CssBaseline />

         <AppBar position="static">
            <Toolbar>
               <Box display="flex" justifyContent="flex-end" width="100%">
                  <Tooltip title="Home">
                     <IconButton
                        color="inherit"
                        component={RouterLink}
                        to="/posts"
                     >
                        <HomeIcon />
                     </IconButton>
                  </Tooltip>

                  <Tooltip title="View profile">
                     <IconButton
                        color="inherit"
                        component={RouterLink}
                        to={`/user/${authenticatedUser}/profile`}
                     >
                        <AccountCircleIcon />
                     </IconButton>
                  </Tooltip>

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
               </Box>
            </Toolbar>
         </AppBar>
      </Box>
   );
}

export default Header;
