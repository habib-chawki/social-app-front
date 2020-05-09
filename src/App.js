import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import NotFound from './components/NotFound';

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
         </Switch>
      </div>
   );
}

export default App;
