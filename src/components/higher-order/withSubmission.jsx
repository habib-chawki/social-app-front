import React from 'react';
import { useHistory } from 'react-router-dom';

function withSubmission(Component, submit) {
   return (props) => {
      // history object
      const history = useHistory();

      // extract credentials from component props
      const { credentials } = props;

      // handle form submission
      const handleSubmission = async (event) => {
         // prevent default form submission behavior
         event.preventDefault();

         // reject login in case of invalid credentials (errors object is not empty)
         if (Object.keys(credentials.errors).length === 0) {
            // handle user login / signup
            await submit(credentials);

            // navigate user to posts page
            history.replace('/posts');
         } else {
            console.log('Invalid credentials.');
         }
      };

      return <Component {...props} onSubmit={handleSubmission} />;
   };
}

export default withSubmission;
