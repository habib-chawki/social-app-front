import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import NotFound from './components/NotFound';

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route component={NotFound} />
         </Switch>
      </div>
   );
}

export default App;
