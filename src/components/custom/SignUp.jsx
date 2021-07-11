import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

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
   const [firstNameInput, setFirstNameInput] = useState('');
   const [lastNameInput, setLastNameInput] = useState('');

   return (
      <Form>
         <h1>Sign Up</h1>
         <TextField
            id="firstName"
            type="text"
            variant="filled"
            label="First name"
            value={firstNameInput}
            error={firstNameInput.length < 5 ? true : false}
            onChange={(event) => setFirstNameInput(event.target.value)}
            helperText="First name must be at least 5 characters long"
            fullWidth
         />
         <TextField
            id="lastName"
            type="text"
            variant="filled"
            label="Last name"
            value={lastNameInput}
            error={lastNameInput.length < 5 ? true : false}
            onChange={(event) => setLastNameInput(event.target.value)}
            helperText="Last name must be at least 5 characters long"
            fullWidth
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
         <p>
            Already registered ?
            <Button component={Link} to="/login" color="primary">
               Log In
            </Button>
         </p>
      </Form>
   );
}

export default withValidation(withSubmission(SignUp, signUserUp));
