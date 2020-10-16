import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Box, TextField } from '@material-ui/core';

import { signupUser } from '../../services/user';
import withValidation from '../higher-order/withValidation';
import withSubmission from '../higher-order/withSubmission';

function SignUp({ credentials, handleValidation, handleSubmission }) {
   // render input field
   const renderInput = ({ type, name }) => {
      return (
         <TextField
            type={type}
            id={name}
            name={name}
            value={credentials[name]}
            onChange={handleValidation}
            variant="filled"
            label={name}
            error={credentials.errors[name]}
            helperText={credentials.errors[name]}
            fullWidth
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
               onClick={handleSubmission}
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

export default withSubmission(withValidation(SignUp), signupUser);
