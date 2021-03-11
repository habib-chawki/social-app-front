import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import Input from '../common/Input';
import Form from '../common/Form';

import { signupUser } from '../../services/user';

import withValidation from '../higher-order/withValidation';
import withSubmission from '../higher-order/withSubmission';

/**
 *
 * @param {Object} credentials - the email and password credentials, part of withValidation
 * @param {Function} onChange - handles input change, part of withValidation
 * @param {Function} onValidate - validates the input, part of withValidation
 * @param {Function} onSubmit - handles form submission, part of withSubmission
 * @returns signup component with validation and submission
 */
function SignUp({ credentials, onChange, onValidate, onSubmit }) {
   return (
      <Form>
         <h1>Sign Up</h1>
         <Input
            id="email"
            type="text"
            name="Email"
            credentials={credentials}
            onChange={onChange}
            onValidate={onValidate} // invoked when the TextField is blurred
         />
         <Input
            id="password"
            type="password"
            name="Password"
            credentials={credentials}
            onChange={onChange}
            onValidate={onValidate} // invoked when the TextField is blurred
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
