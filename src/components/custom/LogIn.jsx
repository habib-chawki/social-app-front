import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import Input from '../common/Input';
import Form from '../common/Form';

import { loginUser } from '../../services/user';

import withValidation from '../higher-order/withValidation';
import withSubmission from '../higher-order/withSubmission';

function LogIn({ credentials, onChange, onValidate, onSubmit }) {
   return (
      <Form>
         <h1>Log In</h1>

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
            Log in
         </Button>
         <p>
            Not registered yet ?
            <Button component={Link} to="/" color="primary">
               Sign Up
            </Button>
         </p>
      </Form>
   );
}

export default withSubmission(withValidation(LogIn), loginUser);
