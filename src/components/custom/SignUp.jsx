import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Box } from '@material-ui/core';

import { signupUser } from '../../services/user';
import withValidation from '../higher-order/withValidation';

function SignUp({ renderInput, handleSubmit }) {
   return (
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         bgcolor="lightblue"
         height="100vh"
      >
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgcolor="lightgreen"
            width="50%"
            height="50%"
         >
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
               {renderInput({ type: 'text', name: 'email' })}
               {renderInput({ type: 'password', name: 'password' })}
               <Button type="submit" variant="contained" color="primary">
                  Sign up
               </Button>
            </form>
            <p>
               Already registered ? <Link to="/login">Log In</Link>
            </p>
         </Box>
      </Box>
   );
}

export default withValidation(SignUp, signupUser);
