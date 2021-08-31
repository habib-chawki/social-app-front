import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getUser } from '../services/storage';

function ProtectedRoute({ children, ...rest }) {
   // allow routing only when user is authenticated
   return (
      <Route
         {...rest}
         render={() => (getUser() ? children : <Redirect to="/login" />)}
      />
   );
}

export default ProtectedRoute;
