import React from 'react';
import { TextField } from '@material-ui/core';

function Input({ credentials, onChange, onValidate, type, name }) {
   return (
      <TextField
         type={type}
         id={name}
         name={name}
         value={credentials[name]}
         onChange={onChange}
         onBlur={onValidate}
         variant="filled"
         label={name}
         error={credentials.errors[name] ? true : false}
         helperText={credentials.errors[name]}
         fullWidth
      />
   );
}

export default Input;
