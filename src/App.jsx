import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/">
               <SignUp />
            </Route>

            <Route path="/login">
               <LogIn />
            </Route>

            <Route
               exact
               path="/posts/:id"
               render={(props) => <Post {...props} />}
            ></Route>

            <Route path="/posts">
               <Posts />
            </Route>

            <Route path="/not-found">
               <NotFound />
            </Route>

            <Redirect to="/not-found" />
         </Switch>
      </div>
   );
}

export default App;
