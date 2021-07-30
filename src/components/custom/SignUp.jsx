import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Input from '../common/Input';
import Form from '../common/Form';

import { signUserUp } from '../../services/user';

import withValidation from '../higher-order/withValidation';
import withSubmission from '../higher-order/withSubmission';

/**
 *
 * @param {Object} props.credentials - user credentials, part of "withValidation" component
 * @param {Function} props.onChange - handles input change, part of "withValidation" component
 * @param {Function} props.onValidate - validates the input, part of "withValidation" component
 * @param {Function} props.onSubmit - handles form submission, part of "withSubmission" component
 * @returns SignUp component with validation and submission
 */
function SignUp({ credentials, onChange, onValidate, onSubmit }) {
   return (
      <Form>
         <Typography variant="h3">Sign Up</Typography>
         <Input
            id="firstName"
            type="text"
            name="First name"
            credentials={credentials}
            onChange={onChange}
            onValidate={onValidate}
         />
         <Input
            id="lastName"
            type="text"
            name="Last name"
            credentials={credentials}
            onChange={onChange}
            onValidate={onValidate}
         />
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
         <Typography>
            Already registered ?
            <Button component={Link} to="/login" color="primary">
               Log In
            </Button>
         </Typography>
      </Form>
   );
}

export default withValidation(withSubmission(SignUp, signUserUp));
