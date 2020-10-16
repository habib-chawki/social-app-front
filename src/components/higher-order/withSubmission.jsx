import React from 'react';
import { useHistory } from 'react-router-dom';

function withSubmission(Component) {
   return (props) => {
      const { credentials, signupUser } = props;
      // history object
      const history = useHistory();

      // handle form submission
      const handleSubmit = async (event) => {
         // prevent default form submission behavior
         event.preventDefault();

         // reject login in case of invalid credentials (errors object is not empty)
         if (Object.keys(credentials.errors).length === 0) {
            // handle user login / signup
            await signupUser(credentials);

            // navigate user to posts page
            history.replace('/posts');
         } else {
            console.log('Invalid credentials.');
         }
      };

      return <Component {...props} handleSubmit={handleSubmit} />;
   };
}

export default withSubmission;
