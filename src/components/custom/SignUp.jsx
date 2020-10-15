import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import { Button, Box, TextField } from '@material-ui/core';

import { signupUser } from '../../services/user';
import withValidation from '../higher-order/withValidation';

function SignUp({ credentials, validate }) {
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

   // render input (email or password)
   const renderInput = ({ type, name }) => {
      return (
         <TextField
            fullWidth
            type={type}
            id={name}
            name={name}
            value={credentials[name]}
            variant="filled"
            onChange={validate}
            label={name}
            error={credentials.errors[name]}
            helperText={credentials.errors[name]}
         />
      );
   };

   return (
      <Box
         display="flex"
         flexDirection="row"
         justifyContent="center"
         alignItems="center"
         height="80vh"
      >
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            bgcolor="lightgray"
            width="25%"
            height="70%"
            padding={5}
         >
            <h1>Sign Up</h1>
            {renderInput({ type: 'text', name: 'email' })}
            {renderInput({ type: 'password', name: 'password' })}
            <Button
               fullWidth
               type="submit"
               variant="contained"
               color="primary"
               onClick={handleSubmit}
            >
               Sign up
            </Button>
            <p>
               Already registered ?
               <Button component={RouterLink} to="/login" color="primary">
                  Log In
               </Button>
            </p>
         </Box>
      </Box>
   );
}

export default withValidation(SignUp, signupUser);
