import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import Input from '../common/Input';
import Form from '../common/Form';

import { loginUser } from '../../services/user';

import withValidation from '../higher-order/withValidation';
import withSubmission from '../higher-order/withSubmission';

/**
 *
 * @param {Object} props.credentials - user credentials, part of "withValidation" component
 * @param {Function} props.onChange - handles input change, part of "withValidation" component
 * @param {Function} props.onValidate - validates the input, part of "withValidation" component
 * @param {Function} props.onSubmit - handles form submission, part of "withSubmission" component
 * @returns LogIn component with validation and submission
 */
function LogIn({ credentials, onChange, onValidate, onSubmit }) {
   return (
      <Form>
         <h1>Log In</h1>
         <Input
            id="email"
            type="text"
            name="Email"
            credentials={credentials}
            onChange={onChange}
            onValidate={onValidate}
         />
         <Input
            id="password"
            type="password"
            name="Password"
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
