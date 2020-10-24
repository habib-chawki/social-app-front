import React from 'react';
import { TextField } from '@material-ui/core';

function Input({ credentials, onChange, onValidate, id, type, name }) {
   return (
      <TextField
         id={id}
         type={type}
         name={name}
         value={credentials[id]}
         onChange={onChange}
         onBlur={onValidate}
         variant="filled"
         label={name}
         error={credentials.errors[id] ? true : false}
         helperText={credentials.errors[id]}
         fullWidth
      />
   );
}

export default Input;
