import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignUp from './components/custom/SignUp';
import LogIn from './components/custom/LogIn';
import Posts from './components/custom/Posts';
import Post from './components/custom/Post';
import NotFound from './components/common/NotFound';

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
