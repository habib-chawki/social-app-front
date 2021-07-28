import React, { useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignUp from './components/custom/SignUp';
import LogIn from './components/custom/LogIn';
import Profile from './components/custom/profile/Profile';
import ProfileForm from './components/custom/profile/ProfileForm';
import Posts from './components/custom/Posts';
import NotFound from './components/common/NotFound';

import UserContext from './context/user-context';

import { getUser } from './services/storage';

import './index.css';

function App() {
   const loggedInUser = useRef(getUser());

   return (
      <Switch>
         <Route exact path="/">
            <SignUp />
         </Route>

         <Route path="/login">
            <LogIn />
         </Route>

         <UserContext.Provider value={loggedInUser.current}>
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

            <Redirect to="/not-found" />
         </UserContext.Provider>
      </Switch>
   );
}

export default App;
