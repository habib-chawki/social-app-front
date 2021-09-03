import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Input from '../common/Input';
import Form from '../common/Form';

import { signUserUp } from '../../services/user';

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
 * @returns SignUp component with validation and submission
 */
function SignUp({ credentials, onChange, onValidate, onSubmit }) {
   const classes = useStyles();

   return (
      <Form>
         <Grid item>
            <Typography variant="h3">Sign Up</Typography>
         </Grid>

         <Grid item className={classes.item}>
            <Box display="flex">
               <Box mr={0.5}>
                  <Input
                     id="firstName"
                     type="text"
                     name="First name"
                     credentials={credentials}
                     onChange={onChange}
                     onValidate={onValidate}
                  />
               </Box>
               <Box ml={0.5}>
                  <Input
                     id="lastName"
                     type="text"
                     name="Last name"
                     credentials={credentials}
                     onChange={onChange}
                     onValidate={onValidate}
                  />
               </Box>
            </Box>
         </Grid>

         <Grid item className={classes.item}>
            <Input
               id="email"
               type="text"
               name="Email"
               credentials={credentials}
               onChange={onChange}
               onValidate={onValidate} // invoked when the TextField is blurred
            />
         </Grid>

         <Grid item className={classes.item}>
            <Input
               id="password"
               type="password"
               name="Password"
               credentials={credentials}
               onChange={onChange}
               onValidate={onValidate} // invoked when the TextField is blurred
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
               Sign up
            </Button>
         </Grid>

         <Grid item>
            <Typography>
               Already registered ?
               <Button component={Link} to="/login" color="primary">
                  Log In
               </Button>
            </Typography>
         </Grid>
      </Form>
   );
}

const formFields = {
   email: '',
   password: '',
   firstName: '',
   lastName: '',
};

export default withValidation(withSubmission(SignUp, signUserUp), formFields);
