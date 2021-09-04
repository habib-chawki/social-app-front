import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ErrorSnackbar from '../common/ErrorSnackbar';

import UserContext from '../../context/user-context';
import { storeUserInfo } from '../../services/storage';

function withSubmission(Component, submit) {
   return (props) => {
      const { setAuthenticatedUser } = useContext(UserContext);

      const [open, setOpen] = useState(false);
      // history object
      const history = useHistory();

      // extract credentials from component props
      const { credentials } = props;

      // handle form submission
      const handleSubmission = (event) => {
         // prevent default form submission behavior
         event.preventDefault();

         // reject login in case of invalid credentials (errors object is not empty)
         if (Object.keys(credentials.errors).length === 0) {
            // handle user login / signup
            submit(credentials)
               .then((userId) => {
                  // set authenticated user context value
                  setAuthenticatedUser(userId);

                  // store authenticated user in localStorage
                  storeUserInfo(userId);

                  // navigate user to posts page
                  history.replace('/posts');
               })
               .catch((err) => {
                  // TODO: display error message!
                  console.log(err);
               });
         } else {
            console.log('Invalid credentials.');
            setOpen(true);
         }
      };

      return (
         <div>
            <Component {...props} onSubmit={handleSubmission} />
            <ErrorSnackbar open={open} message="Invalid credentials" />
         </div>
      );
   };
}

export default withSubmission;
