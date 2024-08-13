import React from 'react';
import { TextField } from '@mui/material';

const UserInput = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Type your message..."
      fullWidth
      sx={{ marginRight: 2 }}
    />
  );
};

export default UserInput;
