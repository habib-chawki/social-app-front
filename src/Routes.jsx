import React, { useState } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { getUser } from './services/storage';

import SignUp from './components/custom/SignUp';
import LogIn from './components/custom/LogIn';
import Profile from './components/custom/profile/main/Profile';
import ProfileForm from './components/custom/profile/main/ProfileForm';
import Posts from './components/custom/post/Posts';
import NotFound from './components/common/NotFound';

import UserContext from './context/user-context';

function Routes() {
   const [authenticatedUser, setAuthenticatedUser] = useState(getUser());

   return (
      <Switch>
         <UserContext.Provider
            value={{ authenticatedUser, setAuthenticatedUser }}
         >
            <Route exact path="/">
               <SignUp />
            </Route>

            <Route path="/login">
               <LogIn />
            </Route>

            <Route path="/user/:userId/profile-form">
               <ProfileForm />
            </Route>

            <Route path="/user/:userId/profile/">
               <Profile />
            </Route>

            <Route path="/posts">
               <Posts />
            </Route>

            <Route path="/not-found">
               <NotFound />
            </Route>
         </UserContext.Provider>

         <Redirect to="/not-found" />
      </Switch>
   );
}

export default Routes;
