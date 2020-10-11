import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Box, TextField } from '@material-ui/core';

import { signupUser } from '../../services/user';
import withValidation from '../higher-order/withValidation';

function SignUp({ credentials, validate, handleSubmit }) {
   // render input (email or password)
   const renderInput = ({ type, name }) => {
      return (
         <div>
            <TextField
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
         </div>
      );
   };

   return (
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         bgcolor="lightblue"
         height="80vh"
      >
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgcolor="lightgreen"
            width="40%"
            height="75%"
         >
            <h1>Sign Up</h1>
            <Box display="flex" flexDirection="row">
               {renderInput({ type: 'text', name: 'email' })}
               {renderInput({ type: 'password', name: 'password' })}
               <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
               >
                  Sign up
               </Button>
            </Box>

            <p>
               Already registered ? <Link to="/login">Log In</Link>
            </p>
         </Box>
      </Box>
   );
}

export default withValidation(SignUp, signupUser);
