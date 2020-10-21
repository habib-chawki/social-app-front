import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import Input from '../common/Input';
import Form from '../common/Form';

import { signupUser } from '../../services/user';

import withValidation from '../higher-order/withValidation';
import withSubmission from '../higher-order/withSubmission';

function SignUp({ credentials, onChange, onValidate, onSubmit }) {
   return (
      <Form>
         <h1>Sign Up</h1>
         <Input
            type="text"
            name="email"
            credentials={credentials}
            onChange={onChange}
            onValidate={onValidate}
         />
         <Input
            type="password"
            name="password"
            credentials={credentials}
            onChange={onChange}
            onValidate={onValidate}
         />
         <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSubmit}
         >
            Sign up
         </Button>
         <p>
            Already registered ?
            <Button component={Link} to="/login" color="primary">
               Log In
            </Button>
         </p>
      </Form>
   );
}

export default withSubmission(withValidation(SignUp), signupUser);
