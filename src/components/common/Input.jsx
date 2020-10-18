import React from 'react';
import { TextField } from '@material-ui/core';

function Input({ credentials, onValidate, type, name }) {
   return (
      <TextField
         type={type}
         id={name}
         name={name}
         value={credentials[name]}
         onChange={onValidate}
         variant="filled"
         label={name}
         error={credentials.errors[name]}
         helperText={credentials.errors[name]}
         fullWidth
      />
   );
}

export default Input;
