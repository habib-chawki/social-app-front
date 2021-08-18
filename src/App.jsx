import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignUp from './components/custom/SignUp';
import LogIn from './components/custom/LogIn';
import Profile from './components/custom/profile/Profile';
import ProfileForm from './components/custom/profile/ProfileForm';
import Posts from './components/custom/post/Posts';
import NotFound from './components/common/NotFound';

import UserContext from './context/user-context';

import { getUser } from './services/storage';

import './index.css';

function App() {
   return (
      <Switch>
         <Route exact path="/">
            <SignUp />
         </Route>

         <Route path="/login">
            <LogIn />
         </Route>

         <UserContext.Provider value={getUser()}>
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

export default App;
