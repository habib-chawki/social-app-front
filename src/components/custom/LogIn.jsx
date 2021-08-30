import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Input from '../common/Input';
import Form from '../common/Form';

import { logUserIn } from '../../services/user';

import withValidation from '../higher-order/withValidation';
import withSubmission from '../higher-order/withSubmission';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   item: {
      width: '100%',
   },
});

/**
 *
 * @param {Object} props.credentials - user credentials, part of "withValidation" component
 * @param {Function} props.onChange - handles input change, part of "withValidation" component
 * @param {Function} props.onValidate - validates the input, part of "withValidation" component
 * @param {Function} props.onSubmit - handles form submission, part of "withSubmission" component
 * @returns LogIn component with validation and submission
 */
function LogIn({ credentials, onChange, onValidate, onSubmit }) {
   const classes = useStyles();

   return (
      <Form>
         <Grid item>
            <Typography variant="h3">Log In</Typography>
         </Grid>

         <Grid item className={classes.item}>
            <Input
               id="email"
               type="text"
               name="Email"
               credentials={credentials}
               onChange={onChange}
               onValidate={onValidate}
            />
         </Grid>

         <Grid item className={classes.item}>
            <Input
               id="password"
               type="password"
               name="Password"
               credentials={credentials}
               onChange={onChange}
               onValidate={onValidate}
            />
         </Grid>

         <Grid item className={classes.item}>
            <Button
               fullWidth
               type="submit"
               variant="contained"
               color="primary"
               onClick={onSubmit}
            >
               Log in
            </Button>
         </Grid>

         <Grid item>
            <Typography>
               Not registered yet ?
               <Button component={Link} to="/" color="primary">
                  Sign Up
               </Button>
            </Typography>
         </Grid>
      </Form>
   );
}

const initialCredentials = {
   email: '',
   password: '',
   errors: { email: '', password: '' },
};

export default withValidation(
   withSubmission(LogIn, logUserIn),
   initialCredentials
);
