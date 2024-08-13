import React from 'react';
import { TextField } from '@mui/material';

const UserInput = ({ value, onChange, onSubmit }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Place your message here for the VRI CoPilot"
      fullWidth
      sx={{ marginRight: 2 }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onSubmit();
        }
      }}
      inputProps={{ maxLength: 1000 }}
    />
  );
};

export default UserInput;
