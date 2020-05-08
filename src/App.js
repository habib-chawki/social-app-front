import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/login" component={LogIn} />
         </Switch>
      </div>
   );
}

export default App;
